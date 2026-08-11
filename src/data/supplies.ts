import {
  IconDroplet,
  IconFirstAidKit,
  IconPill,
  IconWash,
  IconTools,
  IconBulb,
  IconBed,
  IconTent,
} from '@tabler/icons-astro'

export interface Supply {
  name: string
  description: string
  priority?: 'high' | 'normal'
}

export interface Category {
  title: string
  description: string
  icon: typeof IconDroplet
  supplies: Supply[]
}

export const categories: Category[] = [
  {
    title: 'Agua y alimentos',
    description: 'Productos básicos para consumo y distribución.',
    icon: IconDroplet,
    supplies: [
      {
        name: 'Agua potable',
        description: 'Botellas o recipientes sellados con agua apta para consumo.',
        priority: 'high',
      },
      {
        name: 'Alimentos no perecederos',
        description:
          'Arroz, pasta, harina, granos, atún, sardinas y otros alimentos de larga duración.',
      },
      {
        name: 'Alimentos enlatados',
        description: 'Vegetales, frutas, granos, carnes y pescados enlatados.',
      },
      {
        name: 'Alimentos para bebés',
        description: 'Fórmula infantil, compotas, cereales y alimentos apropiados para bebés.',
      },
      {
        name: 'Snacks y alimentos empacados',
        description: 'Galletas, barras de cereal, frutos secos y otros alimentos empacados.',
      },
    ],
  },

  {
    title: 'Salud y primeros auxilios',
    description: 'Materiales para atención básica y cuidado de personas afectadas.',
    icon: IconFirstAidKit,
    supplies: [
      {
        name: 'Suero oral',
        description: 'Sales de rehidratación oral y productos para prevenir la deshidratación.',
      },
      {
        name: 'Material de curación',
        description: 'Gasas estériles, vendas, apósitos, algodón y esparadrapo.',
      },
      {
        name: 'Elementos de protección',
        description: 'Guantes, tapabocas y otros elementos de protección personal.',
      },
      {
        name: 'Termómetros',
        description: 'Termómetros para control básico de temperatura.',
      },
      {
        name: 'Botiquines',
        description: 'Kits de primeros auxilios completos y en buen estado.',
      },
    ],
  },

  {
    title: 'Medicamentos',
    description:
      'Medicamentos únicamente cuando el centro de acopio confirme que los está recibiendo.',
    icon: IconPill,
    supplies: [
      {
        name: 'Medicamentos de venta libre',
        description:
          'Medicamentos de uso común, siempre en su empaque original y dentro de la fecha de vencimiento.',
      },
      {
        name: 'Medicamentos para enfermedades crónicas',
        description:
          'Medicamentos para tratamientos crónicos, entregados en su empaque original y según las indicaciones correspondientes.',
      },
    ],
  },

  {
    title: 'Higiene personal',
    description: 'Elementos esenciales para el cuidado y aseo diario.',
    icon: IconWash,
    supplies: [
      {
        name: 'Pañales',
        description: 'Pañales para bebés y adultos, según las necesidades indicadas por el centro.',
      },
      {
        name: 'Higiene femenina',
        description: 'Toallas sanitarias, protectores y otros productos de higiene menstrual.',
      },
      {
        name: 'Artículos de aseo personal',
        description: 'Jabón, champú, cepillos de dientes, crema dental y desodorante.',
      },
      {
        name: 'Toallas húmedas',
        description: 'Toallas húmedas para higiene personal.',
      },
    ],
  },

  {
    title: 'Limpieza',
    description: 'Productos para mantener limpios refugios y espacios comunitarios.',
    icon: IconTools,
    supplies: [
      {
        name: 'Productos de limpieza',
        description: 'Jabón, detergentes y productos de limpieza para espacios y ropa.',
      },
      {
        name: 'Elementos de limpieza',
        description: 'Escobas, traperos, cubetas, recogedores y otros implementos.',
      },
      {
        name: 'Papel higiénico y servilletas',
        description: 'Papel higiénico, servilletas y toallas de cocina.',
      },
    ],
  },

  {
    title: 'Herramientas y protección',
    description: 'Elementos que pueden apoyar labores de recuperación y limpieza.',
    icon: IconTools,
    supplies: [
      {
        name: 'Herramientas manuales',
        description: 'Palas, picos, barras, martillos, alicates y herramientas similares.',
      },
      {
        name: 'Guantes de trabajo',
        description: 'Guantes resistentes para labores de limpieza y recuperación.',
      },
      {
        name: 'Cascos de seguridad',
        description:
          'Elementos de protección para personas autorizadas a realizar labores de riesgo.',
      },
      {
        name: 'Cuerdas y elementos de amarre',
        description: 'Cuerdas, sogas, cinchos y cintas resistentes.',
      },
    ],
  },

  {
    title: 'Iluminación y comunicación',
    description: 'Elementos útiles para espacios sin servicio eléctrico o comunicación.',
    icon: IconBulb,
    supplies: [
      {
        name: 'Linternas',
        description: 'Linternas convencionales o recargables.',
      },
      {
        name: 'Baterías y pilas',
        description: 'Pilas y baterías compatibles con los equipos entregados.',
      },
      {
        name: 'Radios portátiles',
        description: 'Radios de comunicación y accesorios compatibles.',
      },
      {
        name: 'Megáfonos',
        description: 'Equipos de comunicación para espacios comunitarios.',
      },
    ],
  },

  {
    title: 'Ropa y descanso',
    description: 'Elementos para personas que necesitan alojamiento temporal.',
    icon: IconBed,
    supplies: [
      {
        name: 'Cobijas y mantas',
        description: 'Frazadas, cobijas térmicas y sleeping bags en buen estado.',
      },
      {
        name: 'Colchonetas',
        description: 'Colchonetas plegables o inflables para refugios temporales.',
      },
      {
        name: 'Ropa en buen estado',
        description: 'Camisas, pantalones, ropa interior, medias y zapatos cerrados limpios.',
      },
      {
        name: 'Ropa para bebés y niños',
        description: 'Bodies, pijamas, mudas y prendas infantiles en buen estado.',
      },
      {
        name: 'Ropa de cama',
        description: 'Sábanas, fundas, almohadas y otros elementos de cama.',
      },
    ],
  },

  {
    title: 'Refugio y logística',
    description: 'Elementos para apoyar alojamientos temporales y transporte.',
    icon: IconTent,
    supplies: [
      {
        name: 'Carpas y toldos',
        description: 'Carpas familiares, lonas impermeables y toldos para refugios temporales.',
      },
      {
        name: 'Tanques y recipientes para agua',
        description: 'Recipientes adecuados para almacenamiento y distribución de agua.',
      },
      {
        name: 'Generadores eléctricos',
        description:
          'Equipos eléctricos únicamente cuando sean solicitados por el centro de acopio.',
      },
      {
        name: 'Transporte',
        description:
          'Vehículos disponibles para transportar donaciones cuando exista coordinación previa.',
      },
    ],
  },
]

export const donationTips = [
  'Verifica primero con el centro de acopio qué productos necesita y está recibiendo.',
  'No dones alimentos vencidos, abiertos o con empaques deteriorados.',
  'Entrega los medicamentos en su empaque original y revisa siempre la fecha de vencimiento.',
  'Separa y organiza la ropa por tipo y talla antes de entregarla.',
  'Entrega herramientas únicamente si están limpias y en condiciones adecuadas de uso.',
  'Etiqueta las cajas indicando claramente su contenido.',
  'Si donas agua, utiliza envases sellados y aptos para consumo.',
  'Coordina previamente el transporte de donaciones para evitar saturar los centros.',
]
