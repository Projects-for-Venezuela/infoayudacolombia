import raw from "./acopio.json";

function sanitize(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
}

export function slug(name) {
  return name.replace(/ \/ /g, "--").replace(/ /g, "_");
}

export function unslug(slugStr) {
  const name = slugStr.replace(/--/g, " / ").replace(/_/g, " ");
  return ALIASES[name] || name;
}

export function resolveEstado(name) {
  return ALIASES[name] || name;
}

export function flagUrl(departamento) {
  const canonical = resolveEstado(departamento);

  if (canonical === "Internacional") {
    return "https://upload.wikimedia.org/wikipedia/commons/e/e1/Globe.svg";
  }

  const file = FLAG_MAP[canonical] || sanitize(canonical);
  return `/flags/${file}.webp`;
}

// FALLBACK EXTRAÍDO: Si el JSON es plano, hardcodeamos la lista global para evitar undefined
export const insumos = Array.isArray(raw)
  ? [
      "Alimentos no perecederos",
      "Agua potable",
      "Baterías / pilas",
      "Medicamentos",
      "Insumos médicos",
      "Gasas, alcohol, algodón, jeringas",
      "Ropa en buen estado / abrigos / cobijas",
      "Linternas",
      "Herramientas (martillos, palas, picos)",
      "Equipos de seguridad (cascos, guantes)",
      "Pañales y fórmulas infantiles",
    ]
  : raw.insumos_generales_aceptados || [];

const ALIASES = {
  Bogota: "Bogotá D.C.",
  Bogotá: "Bogotá D.C.",
  "Distrito Capital": "Bogotá D.C.",
  "San Andrés": "San Andrés y Providencia",
};

const FLAG_MAP = {
  "Bogotá D.C.": "Bogota_D.C.",
};

const TODOS_DEPARTAMENTOS = [
  "Internacional",
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];

// PROcesamiento seguro para soportar arrays planos de Supabase o JSONs anidados antiguos
const centrosPlanos = Array.isArray(raw) ? raw : raw.centros_acopio || [];

// Agrupamiento O(n) usando Map (en lugar de O(n²) con .find())
const departamentosMap = new Map();
const departamentosConDatosArr = [];

for (const item of centrosPlanos) {
  let dptoEntry = departamentosMap.get(item.estado);
  if (!dptoEntry) {
    dptoEntry = { estado: item.estado, ciudades: [], _ciudadesMap: new Map() };
    departamentosMap.set(item.estado, dptoEntry);
    departamentosConDatosArr.push(dptoEntry);
  }

  let ciudadEntry = dptoEntry._ciudadesMap.get(item.ciudad);
  if (!ciudadEntry) {
    ciudadEntry = { ciudad: item.ciudad, centros: [] };
    dptoEntry._ciudadesMap.set(item.ciudad, ciudadEntry);
    dptoEntry.ciudades.push(ciudadEntry);
  }

  if (item.centros && Array.isArray(item.centros)) {
    ciudadEntry.centros.push(...item.centros);
  } else {
    ciudadEntry.centros.push({
      nombre: item.nombre,
      direccion: item.direccion,
      contacto: item.contacto,
      hora: item.hora,
      acepta: item.acepta || [],
      necesitan: item.necesitan || [],
      zelle: item.zelle,
      pago_movil: item.pago_movil,
      verificado: item.verificado,
    });
  }
}

// Limpieza de prop internas
for (const d of departamentosConDatosArr) {
  delete d._ciudadesMap;
}

// Conversión del array a un Map para lookup O(1) en TODOS_DEPARTAMENTOS
const departamentosConDatosSet = new Map(departamentosConDatosArr.map((d) => [d.estado, d]));
export const estados = TODOS_DEPARTAMENTOS.map((nombre) => {
  return departamentosConDatosSet.get(nombre) || { estado: nombre, ciudades: [] };
});

export function centrosPorEstado(departamento) {
  const canonical = resolveEstado(departamento);
  const d = estados.find((d) => d.estado === canonical);
  return d ? d.ciudades : [];
}

export const ZONAS_AFECTADAS = ["Chocó", "Caldas", "Risaralda", "Quindío", "Cauca", "Valle del Cauca"];

export function sortCentros(a, b) {
  const aAfectado = ZONAS_AFECTADAS.includes(a.estado);
  const bAfectado = ZONAS_AFECTADAS.includes(b.estado);
  if (aAfectado && !bAfectado) return -1;
  if (!aAfectado && bAfectado) return 1;

  const compEstado = a.estado.localeCompare(b.estado);
  if (compEstado !== 0) return compEstado;
  const compCiudad = a.ciudad.localeCompare(b.ciudad);
  if (compCiudad !== 0) return compCiudad;
  return a.nombre.localeCompare(b.nombre);
}

export function sortEstados(a, b) {
  const aAfectado = ZONAS_AFECTADAS.includes(a.estado);
  const bAfectado = ZONAS_AFECTADAS.includes(b.estado);
  if (aAfectado && !bAfectado) return -1;
  if (!aAfectado && bAfectado) return 1;
  return a.estado.localeCompare(b.estado);
}