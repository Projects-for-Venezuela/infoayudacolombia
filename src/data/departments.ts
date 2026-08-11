/* ==========================================================================
 * INFORMACIÓN SÍSMICA — COLOMBIA
 * Evento: 10 de agosto de 2026
 *
 * IMPORTANTE:
 * - Los balances de víctimas continúan cambiando.
 * - No se deben interpretar cifras preliminares como definitivas.
 * - Para datos sísmicos se prioriza el Servicio Geológico Colombiano (SGC).
 * - Para daños y respuesta se priorizan UNGRD, gobernaciones, alcaldías
 *   y posteriormente medios nacionales.
 * ========================================================================== */

export type AlertLevel = 'critical' | 'high' | 'moderate' | 'low'

export type CollectionCenterStatus = 'active' | 'pending'

export interface Source {
  name: string
  url: string
  type: 'official' | 'media' | 'institutional'
  publishedAt?: string
  updatedAt?: string
}

export interface Fact {
  value: string
  source?: Source
  updatedAt?: string
}

export interface CollectionCenter {
  name: string
  city: string
  address: string
  status: CollectionCenterStatus
  accepts: string[]
  phone?: string
  schedule?: string
  source?: Source
}

export interface DepartmentData {
  name: string
  capital: string
  slug: string
  status: AlertLevel

  summary: Fact

  municipalities: string[]

  affectedPeople: Fact
  deaths: Fact
  injured: Fact
  missing: Fact

  homes: Fact
  buildings: Fact
  hospitals: Fact
  schools: Fact
  roads: Fact
  airports: Fact
  services: Fact

  needs: string[]

  centers: CollectionCenter[]

  sources: Source[]
}

export interface EarthquakeData {
  title: string
  magnitude: string
  date: string
  time: string
  epicenter: string
  depth: string
  duration: string
  status: string
  update: string

  casualties: {
    deaths: Fact
    injured: Fact
    missing: Fact
  }

  infrastructure: {
    buildings: Fact
    homes: Fact
    roads: Fact
    airports: Fact
  }

  replicas: Fact

  mostAffectedCities: string[]

  departments: Record<string, DepartmentData>

  sources: Source[]
}

/* ==========================================================================
 * FUENTES
 * ========================================================================== */

const sources = {
  sgc: {
    name: 'Servicio Geológico Colombiano',
    url: 'https://www.sgc.gov.co/',
    type: 'official' as const,
  },

  sgcCatalogo: {
    name: 'SGC — Catálogo de Sismos',
    url: 'https://www.sgc.gov.co/catalogo',
    type: 'official' as const,
  },

  sgcSismosSentidos: {
    name: 'SGC — Sismos Sentidos',
    url: 'https://sismosentido.sgc.gov.co/EvaluacionIntensidadesServlet?metodo=irASelectorCompleto',
    type: 'official' as const,
  },

  ungrd: {
    name: 'Unidad Nacional para la Gestión del Riesgo de Desastres',
    url: 'https://www.gestiondelriesgo.gov.co/',
    type: 'official' as const,
  },

  presidencia: {
    name: 'Presidencia de la República de Colombia',
    url: 'https://www.presidencia.gov.co/',
    type: 'official' as const,
  },

  alcaldiaPereira: {
    name: 'Alcaldía de Pereira',
    url: 'https://www.pereira.gov.co/',
    type: 'institutional' as const,
  },

  gobernacionRisaralda: {
    name: 'Gobernación de Risaralda',
    url: 'https://www.risaralda.gov.co/',
    type: 'institutional' as const,
  },

  gobernacionAntioquia: {
    name: 'Gobernación de Antioquia',
    url: 'https://www.antioquia.gov.co/',
    type: 'institutional' as const,
  },

  gobernacionChoco: {
    name: 'Gobernación del Chocó',
    url: 'https://www.choco.gov.co/',
    type: 'institutional' as const,
  },

  gobernacionValle: {
    name: 'Gobernación del Valle del Cauca',
    url: 'https://www.valledelcauca.gov.co/',
    type: 'institutional' as const,
  },

  alcaldiaCali: {
    name: 'Alcaldía de Santiago de Cali',
    url: 'https://www.cali.gov.co/',
    type: 'institutional' as const,
  },

  noticiasCaracol: {
    name: 'Noticias Caracol',
    url: 'https://www.noticiascaracol.com/',
    type: 'media' as const,
  },

  caracolRadio: {
    name: 'Caracol Radio',
    url: 'https://caracol.com.co/',
    type: 'media' as const,
  },

  elColombiano: {
    name: 'El Colombiano',
    url: 'https://www.elcolombiano.com/',
    type: 'media' as const,
  },

  elEspectador: {
    name: 'El Espectador',
    url: 'https://www.elespectador.com/',
    type: 'media' as const,
  },

  laRepublica: {
    name: 'La República',
    url: 'https://www.larepublica.co/',
    type: 'media' as const,
  },

  ap: {
    name: 'Associated Press (AP)',
    url: 'https://apnews.com/',
    type: 'media' as const,
  },

  reuters: {
    name: 'Reuters',
    url: 'https://www.reuters.com/',
    type: 'media' as const,
  },

  elPais: {
    name: 'El País',
    url: 'https://elpais.com/',
    type: 'media' as const,
  },
}

/* ==========================================================================
 * FECHA DE ACTUALIZACIÓN
 * ========================================================================== */

const UPDATE_DATE = '11 de agosto de 2026'

/* ==========================================================================
 * INFORMACIÓN GENERAL DEL SISMO
 * ========================================================================== */

export const earthquake: EarthquakeData = {
  title: 'Sismo de Colombia — 10 de agosto de 2026',

  magnitude: '7,4',

  date: '10 de agosto de 2026',

  time: '7:34 a. m.',

  epicenter: 'San José del Palmar, Chocó',

  /*
   * Los reportes publicados durante el 11 de agosto muestran diferencias
   * en la profundidad exacta. Por eso se conserva como aproximadamente
   * 80–100 km y no se presenta un número único como definitivo.
   */
  depth: 'Aproximadamente 80–100 km',

  /*
   * No se debe afirmar que la ruptura duró exactamente cuatro minutos.
   * La percepción prolongada del movimiento fue reportada ampliamente.
   */
  duration: 'Movimiento percibido durante un periodo prolongado',

  status: 'Emergencia en atención',

  update: UPDATE_DATE,

  casualties: {
    deaths: {
      value:
        'Balance en actualización. Reportes del 11 de agosto registraron al menos 181 fallecidos y posteriormente Reuters informó un balance de 254.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.reuters,
        publishedAt: '11 de agosto de 2026',
      },
    },

    injured: {
      value:
        '2.595 heridos en uno de los balances oficiales reportados el 11 de agosto; la cifra puede cambiar.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.ap,
        publishedAt: '11 de agosto de 2026',
      },
    },

    missing: {
      value:
        'Balance de personas desaparecidas en actualización; AP reportó que podrían ser hasta 4.000.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.ap,
        publishedAt: '11 de agosto de 2026',
      },
    },
  },

  infrastructure: {
    buildings: {
      value: '48 edificios colapsados según un balance reportado el 11 de agosto.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.laRepublica,
        publishedAt: '11 de agosto de 2026',
      },
    },

    homes: {
      value:
        '1.136 viviendas destruidas y 8.357 viviendas averiadas según el balance reportado el 11 de agosto.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.laRepublica,
        publishedAt: '11 de agosto de 2026',
      },
    },

    roads: {
      value:
        'La infraestructura vial continúa bajo inspección y se han registrado cierres preventivos en corredores afectados.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.ungrd,
      },
    },

    airports: {
      value:
        'Varios aeropuertos realizaron cierres o inspecciones de seguridad debido a daños y verificaciones de infraestructura.',
      updatedAt: UPDATE_DATE,
      source: {
        ...sources.reuters,
        publishedAt: '11 de agosto de 2026',
      },
    },
  },

  replicas: {
    value:
      'Se han registrado numerosas réplicas después del evento principal. El conteo continúa actualizándose y debe consultarse directamente en el SGC.',
    updatedAt: UPDATE_DATE,
    source: sources.sgcCatalogo,
  },

  mostAffectedCities: ['Pereira', 'Cali', 'Manizales', 'Quibdó'],

  departments: {},

  sources: [
    sources.sgc,
    sources.sgcCatalogo,
    sources.sgcSismosSentidos,
    sources.ungrd,
    sources.presidencia,
    sources.reuters,
    sources.ap,
    sources.laRepublica,
    sources.noticiasCaracol,
    sources.caracolRadio,
    sources.elColombiano,
    sources.elEspectador,
    sources.elPais,
  ],
}

/* ==========================================================================
 * HELPERS
 * ========================================================================== */

const fact = (value: string, source?: Source): Fact => ({
  value,
  source,
  updatedAt: UPDATE_DATE,
})

const noOfficialBalance = (source: Source = sources.ungrd): Fact =>
  fact('Sin consolidado oficial departamental disponible. Información en actualización.', source)

const noConfirmedDamage = (source: Source = sources.ungrd): Fact =>
  fact('Sin afectación generalizada confirmada en el balance consultado.', source)

/* ==========================================================================
 * DEPARTAMENTOS
 * ========================================================================== */

earthquake.departments = {
  /* ------------------------------------------------------------------------
   * CHOCÓ
   * ------------------------------------------------------------------------ */

  Choco: {
    name: 'Chocó',

    capital: 'Quibdó',

    slug: 'Choco',

    status: 'critical',

    summary: fact(
      'Chocó fue el departamento donde se ubicó el epicentro del sismo. La respuesta continúa concentrada en evaluación de daños, búsqueda, rescate y atención de las comunidades afectadas.',
      sources.sgc,
    ),

    municipalities: ['San José del Palmar', 'Quibdó'],

    affectedPeople: noOfficialBalance(),

    deaths: noOfficialBalance(),

    injured: noOfficialBalance(),

    missing: fact(
      'El consolidado departamental de personas desaparecidas continúa en actualización.',
      sources.ungrd,
    ),

    homes: fact(
      'Viviendas afectadas y destruidas reportadas dentro del balance nacional; distribución exacta para Chocó continúa en consolidación.',
      sources.ungrd,
    ),

    buildings: fact(
      'Se reportan daños estructurales y edificaciones afectadas en diferentes zonas del departamento.',
      sources.ungrd,
    ),

    hospitals: fact('Infraestructura y capacidad sanitaria bajo evaluación.', sources.ungrd),

    schools: fact('Instituciones educativas bajo evaluación.', sources.ungrd),

    roads: fact(
      'Accesos e infraestructura vial bajo inspección debido a la emergencia.',
      sources.ungrd,
    ),

    airports: fact(
      'Operaciones aeroportuarias bajo seguimiento y verificación de seguridad.',
      sources.ungrd,
    ),

    services: fact(
      'Servicios públicos, comunicaciones y conectividad bajo monitoreo.',
      sources.ungrd,
    ),

    needs: [
      'Agua potable',
      'Alimentos no perecederos',
      'Atención médica',
      'Medicamentos',
      'Kits de higiene',
      'Elementos de alojamiento temporal',
      'Ayuda humanitaria',
    ],

    centers: [],

    sources: [sources.sgc, sources.ungrd, sources.gobernacionChoco, sources.ap, sources.reuters],
  },

  /* ------------------------------------------------------------------------
   * RISARALDA
   * ------------------------------------------------------------------------ */

  Risaralda: {
    name: 'Risaralda',

    capital: 'Pereira',

    slug: 'Risaralda',

    status: 'critical',

    summary: fact(
      'Risaralda, particularmente Pereira, se encuentra entre las zonas con mayor afectación reportada. Las labores de búsqueda y rescate continúan.',
      sources.reuters,
    ),

    municipalities: ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal'],

    affectedPeople: fact('Balance departamental en actualización.', sources.governacionRisaralda),

    deaths: fact(
      'Pereira concentra una parte importante de las víctimas reportadas en los balances nacionales.',
      sources.reuters,
    ),

    injured: fact('Balance departamental en actualización.', sources.governacionRisaralda),

    missing: fact('La búsqueda de personas desaparecidas continúa.', sources.ap),

    homes: fact(
      'Viviendas destruidas y averiadas forman parte del balance nacional; distribución departamental continúa en consolidación.',
      sources.laRepublica,
    ),

    buildings: fact(
      'Se reportaron edificios y estructuras afectadas, incluyendo daños graves en Pereira.',
      sources.reuters,
    ),

    hospitals: fact(
      'Infraestructura hospitalaria bajo seguimiento por la emergencia.',
      sources.reuters,
    ),

    schools: fact('Infraestructura educativa bajo evaluación.', sources.ungrd),

    roads: fact('Vías y corredores bajo inspección.', sources.ungrd),

    airports: fact(
      'El Aeropuerto Internacional Matecaña de Pereira registró daños y permaneció cerrado durante la emergencia.',
      sources.ap,
    ),

    services: fact(
      'Se han reportado interrupciones y afectaciones en servicios y comunicaciones en zonas impactadas.',
      sources.reuters,
    ),

    needs: [
      'Agua potable',
      'Alimentos no perecederos',
      'Atención médica',
      'Medicamentos',
      'Kits de higiene',
      'Linternas',
      'Baterías',
      'Alojamiento temporal',
    ],

    centers: [],

    sources: [
      sources.reuters,
      sources.ap,
      sources.alcaldiaPereira,
      sources.governacionRisaralda,
      sources.ungrd,
    ],
  },

  /* ------------------------------------------------------------------------
   * VALLE DEL CAUCA
   * ------------------------------------------------------------------------ */

  Valle_del_Cauca: {
    name: 'Valle del Cauca',

    capital: 'Cali',

    slug: 'Valle_del_Cauca',

    status: 'critical',

    summary: fact(
      'Valle del Cauca se encuentra entre las regiones gravemente afectadas. Cali registró daños estructurales y continúa la evaluación de edificaciones y servicios.',
      sources.ap,
    ),

    municipalities: ['Cali', 'Buenaventura', 'Roldanillo', 'Zarzal'],

    affectedPeople: noOfficialBalance(),

    deaths: noOfficialBalance(),

    injured: noOfficialBalance(),

    missing: fact('Balance departamental en actualización.', sources.ap),

    homes: fact(
      'Las viviendas destruidas y averiadas forman parte del balance nacional; el desglose departamental continúa en actualización.',
      sources.laRepublica,
    ),

    buildings: fact(
      'Se registraron daños graves en edificaciones de Cali y otras zonas del departamento.',
      sources.ap,
    ),

    hospitals: fact(
      'Se reportaron daños en infraestructura hospitalaria de Cali y se activaron mecanismos de atención de emergencia.',
      sources.ap,
    ),

    schools: fact('Instituciones educativas bajo evaluación.', sources.ungrd),

    roads: fact('Vías y corredores bajo inspección.', sources.ungrd),

    airports: fact(
      'Aeropuertos del departamento realizaron verificaciones y operaciones estuvieron afectadas durante la emergencia.',
      sources.reuters,
    ),

    services: fact(
      'Servicios de agua, energía, gas y comunicaciones bajo monitoreo.',
      sources.ungrd,
    ),

    needs: [
      'Agua potable',
      'Alimentos no perecederos',
      'Medicamentos',
      'Kits de primeros auxilios',
      'Elementos de higiene',
      'Alojamiento temporal',
    ],

    centers: [],

    sources: [
      sources.ap,
      sources.reuters,
      sources.alcaldiaCali,
      sources.gobernacionValle,
      sources.ungrd,
    ],
  },

  /* ------------------------------------------------------------------------
   * CALDAS
   * ------------------------------------------------------------------------ */

  Caldas: {
    name: 'Caldas',

    capital: 'Manizales',

    slug: 'Caldas',

    status: 'high',

    summary: fact(
      'Manizales fue una de las ciudades fuertemente afectadas por el sismo. Se mantienen labores de evaluación de daños y atención a la población.',
      sources.ap,
    ),

    municipalities: ['Manizales'],

    affectedPeople: noOfficialBalance(),

    deaths: noOfficialBalance(),

    injured: noOfficialBalance(),

    missing: fact('Balance departamental en actualización.', sources.ungrd),

    homes: fact(
      'Viviendas afectadas dentro del balance nacional; desglose departamental en actualización.',
      sources.laRepublica,
    ),

    buildings: fact('Se reportaron daños estructurales en Manizales.', sources.ap),

    hospitals: fact('Infraestructura hospitalaria bajo seguimiento.', sources.ungrd),

    schools: fact('Instituciones educativas bajo evaluación.', sources.ungrd),

    roads: fact('Infraestructura vial bajo inspección.', sources.ungrd),

    airports: fact('Operación aeroportuaria bajo verificación de seguridad.', sources.reuters),

    services: fact('Servicios públicos bajo monitoreo.', sources.ungrd),

    needs: [
      'Agua potable',
      'Alimentos',
      'Medicamentos',
      'Kits de higiene',
      'Linternas',
      'Elementos de emergencia',
    ],

    centers: [],

    sources: [sources.ap, sources.reuters, sources.ungrd],
  },

  /* ------------------------------------------------------------------------
   * QUINDÍO
   * ------------------------------------------------------------------------ */

  Quindio: {
    name: 'Quindío',

    capital: 'Armenia',

    slug: 'Quindio',

    status: 'high',

    summary: fact(
      'Quindío fue una de las zonas donde el sismo fue ampliamente percibido. La infraestructura continúa bajo evaluación.',
      sources.sgcSismosSentidos,
    ),

    municipalities: ['Armenia', 'Calarcá', 'Montenegro'],

    affectedPeople: noOfficialBalance(),

    deaths: fact(
      'Sin consolidado departamental definitivo en las fuentes consultadas.',
      sources.ungrd,
    ),

    injured: noOfficialBalance(),

    missing: fact('Sin consolidado departamental definitivo.', sources.ungrd),

    homes: fact('Viviendas bajo evaluación.', sources.ungrd),

    buildings: fact('Edificaciones bajo inspección estructural.', sources.ungrd),

    hospitals: fact('Red hospitalaria bajo seguimiento.', sources.ungrd),

    schools: fact('Instituciones educativas bajo evaluación.', sources.ungrd),

    roads: fact('Vías y corredores bajo inspección.', sources.ungrd),

    airports: fact('Operación aeroportuaria bajo seguimiento.', sources.ungrd),

    services: fact('Servicios públicos bajo monitoreo.', sources.ungrd),

    needs: ['Agua potable', 'Alimentos', 'Medicamentos', 'Higiene personal', 'Kits de emergencia'],

    centers: [],

    sources: [sources.sgc, sources.sgcSismosSentidos, sources.ungrd],
  },

  /* ------------------------------------------------------------------------
   * ANTIOQUIA
   * ------------------------------------------------------------------------ */

  Antioquia: {
    name: 'Antioquia',

    capital: 'Medellín',

    slug: 'Antioquia',

    status: 'moderate',

    summary: fact(
      'El sismo fue ampliamente sentido en Antioquia y las autoridades activaron mecanismos de evaluación y respuesta.',
      sources.sgcSismosSentidos,
    ),

    municipalities: [
      'Medellín',
      'Rionegro',
      'Sonsón',
      'Abejorral',
      'La Ceja',
      'Sabaneta',
      'Támesis',
    ],

    affectedPeople: fact('Balance departamental en actualización.', sources.gobernacionAntioquia),

    deaths: fact('Balance departamental en actualización.', sources.gobernacionAntioquia),

    injured: fact('Balance departamental en actualización.', sources.gobernacionAntioquia),

    missing: fact('Sin consolidado departamental definitivo.', sources.ungrd),

    homes: fact('Viviendas afectadas bajo evaluación.', sources.gobernacionAntioquia),

    buildings: fact('Daños estructurales bajo evaluación.', sources.gobernacionAntioquia),

    hospitals: fact(
      'La red hospitalaria se mantiene bajo seguimiento.',
      sources.gobernacionAntioquia,
    ),

    schools: fact('Infraestructura educativa bajo evaluación.', sources.gobernacionAntioquia),

    roads: fact('Infraestructura vial bajo monitoreo.', sources.ungrd),

    airports: fact('Operaciones aeroportuarias bajo seguimiento.', sources.ungrd),

    services: fact(
      'Servicios públicos e infraestructura bajo monitoreo.',
      sources.gobernacionAntioquia,
    ),

    needs: [
      'Información oficial',
      'Atención médica',
      'Ayuda humanitaria',
      'Elementos de emergencia',
    ],

    centers: [],

    sources: [sources.sgc, sources.sgcSismosSentidos, sources.gobernacionAntioquia, sources.ungrd],
  },

  /* ------------------------------------------------------------------------
   * BOGOTÁ D.C.
   * ------------------------------------------------------------------------ */

  Bogota: {
    name: 'Bogotá D. C.',

    capital: 'Bogotá',

    slug: 'Bogota',

    status: 'low',

    summary: fact(
      'El sismo fue sentido con fuerza en Bogotá. Las autoridades realizaron verificaciones preventivas de infraestructura.',
      sources.sgcSismosSentidos,
    ),

    municipalities: ['Bogotá D. C.'],

    affectedPeople: fact(
      'Sin consolidado oficial de población afectada para Bogotá.',
      sources.ungrd,
    ),

    deaths: fact(
      'Sin consolidado oficial de fallecidos asociado específicamente a Bogotá.',
      sources.ungrd,
    ),

    injured: fact(
      'Sin consolidado oficial de heridos asociado específicamente a Bogotá.',
      sources.ungrd,
    ),

    missing: fact(
      'Sin consolidado oficial de desaparecidos asociado específicamente a Bogotá.',
      sources.ungrd,
    ),

    homes: noConfirmedDamage(),

    buildings: fact('Revisión preventiva de infraestructura.', sources.ungrd),

    hospitals: fact('Infraestructura sanitaria bajo monitoreo preventivo.', sources.ungrd),

    schools: fact('Infraestructura educativa bajo seguimiento.', sources.ungrd),

    roads: noConfirmedDamage(),

    airports: fact('Operación aeroportuaria bajo seguimiento.', sources.ungrd),

    services: fact('Servicios públicos bajo monitoreo preventivo.', sources.ungrd),

    needs: ['Información oficial'],

    centers: [],

    sources: [sources.sgc, sources.sgcSismosSentidos, sources.ungrd],
  },

  /* ------------------------------------------------------------------------
   * TOLIMA
   * ------------------------------------------------------------------------ */

  Tolima: {
    name: 'Tolima',

    capital: 'Ibagué',

    slug: 'Tolima',

    status: 'low',

    summary: fact(
      'El movimiento sísmico fue percibido en diferentes zonas del Tolima. Los daños específicos continúan bajo evaluación.',
      sources.sgcSismosSentidos,
    ),

    municipalities: ['Ibagué', 'Cajamarca'],

    affectedPeople: noOfficialBalance(),

    deaths: fact('Sin consolidado oficial departamental.', sources.ungrd),

    injured: fact('Sin consolidado oficial departamental.', sources.ungrd),

    missing: fact('Sin consolidado oficial departamental.', sources.ungrd),

    homes: fact('En evaluación.', sources.ungrd),

    buildings: fact('Evaluación preventiva.', sources.ungrd),

    hospitals: fact('Bajo monitoreo.', sources.ungrd),

    schools: fact('Bajo monitoreo.', sources.ungrd),

    roads: fact('Inspección preventiva.', sources.ungrd),

    airports: fact('Operación bajo seguimiento.', sources.ungrd),

    services: fact('Servicios bajo monitoreo.', sources.ungrd),

    needs: ['Información oficial', 'Agua', 'Alimentos', 'Elementos de emergencia'],

    centers: [],

    sources: [sources.sgc, sources.sgcSismosSentidos, sources.ungrd],
  },

  /* ------------------------------------------------------------------------
   * BOLÍVAR
   * ------------------------------------------------------------------------ */

  Bolivar: {
    name: 'Bolívar',

    capital: 'Cartagena',

    slug: 'Bolivar',

    status: 'low',

    summary: fact(
      'El movimiento sísmico fue percibido en diferentes regiones del país. No existe evidencia suficiente en las fuentes consultadas para clasificar a Bolívar entre las zonas de mayor afectación.',
      sources.sgcSismosSentidos,
    ),

    municipalities: ['Cartagena'],

    affectedPeople: noOfficialBalance(),

    deaths: fact('Sin consolidado oficial departamental.', sources.ungrd),

    injured: fact('Sin consolidado oficial departamental.', sources.ungrd),

    missing: fact('Sin consolidado oficial departamental.', sources.ungrd),

    homes: noConfirmedDamage(),

    buildings: fact('Evaluación preventiva.', sources.ungrd),

    hospitals: fact('Bajo monitoreo.', sources.ungrd),

    schools: fact('Bajo monitoreo.', sources.ungrd),

    roads: noConfirmedDamage(),

    airports: fact('Operación bajo seguimiento.', sources.ungrd),

    services: fact('Servicios bajo monitoreo.', sources.ungrd),

    needs: ['Información oficial'],

    centers: [],

    sources: [sources.sgc, sources.sgcSismosSentidos, sources.ungrd],
  },
}

/* ==========================================================================
 * LISTA DEPARTAMENTAL
 * ========================================================================== */

export const departmentList = Object.values(earthquake.departments)

/* ==========================================================================
 * FILTROS
 * ========================================================================== */

export const criticalDepartments = departmentList.filter(
  department => department.status === 'critical',
)

export const highRiskDepartments = departmentList.filter(department => department.status === 'high')

export const moderateDepartments = departmentList.filter(
  department => department.status === 'moderate',
)

export const lowRiskDepartments = departmentList.filter(department => department.status === 'low')

/* ==========================================================================
 * TODAS LAS FUENTES
 * ========================================================================== */

export const informationSources: Source[] = [
  {
    ...sources.sgc,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.sgcCatalogo,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.sgcSismosSentidos,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.ungrd,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.presidencia,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.reuters,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.ap,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.laRepublica,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.noticiasCaracol,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.caracolRadio,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.elColombiano,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.elEspectador,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.elPais,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.alcaldiaPereira,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.governacionRisaralda,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.gobernacionAntioquia,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.gobernacionChoco,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.gobernacionValle,
    updatedAt: UPDATE_DATE,
  },

  {
    ...sources.alcaldiaCali,
    updatedAt: UPDATE_DATE,
  },
]

export const allSources = [...earthquake.sources, ...informationSources].filter(
  (source, index, array) => array.findIndex(item => item.url === source.url) === index,
)
