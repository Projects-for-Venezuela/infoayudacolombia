import { IconFlame, IconHeart, IconPhone, IconUsers } from '@tabler/icons-astro'

type EmergencyIcon = typeof IconPhone

export interface EmergencyNumber {
  number: string
  name: string
  description: string
  href: string
  icon: EmergencyIcon
  featured?: boolean
}

export interface EmergencyInstitution {
  name: string
  number: string
  description: string
  href: string
}

export interface EmergencyContact {
  number: string
  name: string
  href: string
  icon: EmergencyIcon
  featured?: boolean
}

export interface EmergencyCity {
  city: string
  department: string
  accent: string
  contacts: EmergencyContact[]
  note?: string
}

/* -------------------------------------------------------------------------- */
/* Líneas nacionales                                                          */
/* -------------------------------------------------------------------------- */

export const emergencyNumbers: EmergencyNumber[] = [
  {
    number: '123',
    name: 'Línea única de emergencias',
    description: 'Policía, bomberos, ambulancias y atención de emergencias.',
    href: 'tel:123',
    icon: IconPhone,
    featured: true,
  },
  {
    number: '119',
    name: 'Bomberos',
    description: 'Atención de incendios, rescates y emergencias relacionadas.',
    href: 'tel:119',
    icon: IconFlame,
  },
  {
    number: '132',
    name: 'Cruz Roja Colombiana',
    description: 'Atención y asistencia en situaciones de emergencia.',
    href: 'tel:132',
    icon: IconHeart,
  },
  {
    number: '144',
    name: 'Defensa Civil Colombiana',
    description: 'Atención de emergencias y apoyo en gestión del riesgo.',
    href: 'tel:144',
    icon: IconUsers,
  },
]

/* -------------------------------------------------------------------------- */
/* Información institucional                                                 */
/* -------------------------------------------------------------------------- */

export const emergencyInstitutions: EmergencyInstitution[] = [
  {
    name: 'Unidad Nacional para la Gestión del Riesgo de Desastres',
    number: '01 8000 113 200',
    description: 'Canal institucional para información y gestión del riesgo de desastres.',
    href: 'tel:018000113200',
  },
]

/* -------------------------------------------------------------------------- */
/* Líneas de emergencia por ciudad                                            */
/* -------------------------------------------------------------------------- */

export const emergencyCities: EmergencyCity[] = [
  {
    city: 'Armenia',
    department: 'Quindío',
    accent: 'yellow',
    contacts: [
      {
        number: '123',
        name: 'Línea única de emergencias',
        href: 'tel:123',
        icon: IconPhone,
        featured: true,
      },
      {
        number: '119',
        name: 'Bomberos de Armenia',
        href: 'tel:119',
        icon: IconFlame,
      },
      {
        number: '316 233 2682',
        name: 'Bomberos Armenia — WhatsApp y llamadas',
        href: 'tel:3162332682',
        icon: IconPhone,
      },
      {
        number: '132',
        name: 'Cruz Roja Colombiana',
        href: 'tel:132',
        icon: IconHeart,
      },
      {
        number: '144',
        name: 'Defensa Civil Colombiana',
        href: 'tel:144',
        icon: IconUsers,
      },
    ],
  },

  {
    city: 'Manizales',
    department: 'Caldas',
    accent: 'red',
    contacts: [
      {
        number: '123',
        name: 'Línea única de emergencias',
        href: 'tel:123',
        icon: IconPhone,
        featured: true,
      },
      {
        number: '119',
        name: 'Bomberos de Manizales — 24 horas',
        href: 'tel:119',
        icon: IconFlame,
      },
      {
        number: '132',
        name: 'Cruz Roja Colombiana',
        href: 'tel:132',
        icon: IconHeart,
      },
      {
        number: '144',
        name: 'Defensa Civil Colombiana',
        href: 'tel:144',
        icon: IconUsers,
      },
      {
        number: '606 863 2708',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068632708',
        icon: IconFlame,
      },
      {
        number: '606 863 2759',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068632759',
        icon: IconFlame,
      },
      {
        number: '606 863 2761',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068632761',
        icon: IconFlame,
      },
      {
        number: '606 863 2754',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068632754',
        icon: IconFlame,
      },
      {
        number: '606 896 9881',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068969881',
        icon: IconFlame,
      },
      {
        number: '606 896 1497',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068961497',
        icon: IconFlame,
      },
      {
        number: '606 896 2150',
        name: 'Bomberos — línea alternativa',
        href: 'tel:6068962150',
        icon: IconFlame,
      },
    ],
    note: 'Si el 119 está saturado, intenta comunicarte con las líneas alternativas de Bomberos.',
  },

  {
    city: 'Quibdó',
    department: 'Chocó',
    accent: 'purple',
    contacts: [
      {
        number: '123',
        name: 'Línea única de emergencias',
        href: 'tel:123',
        icon: IconPhone,
        featured: true,
      },
      {
        number: '119',
        name: 'Bomberos de Quibdó',
        href: 'tel:119',
        icon: IconFlame,
      },
      {
        number: '132',
        name: 'Cruz Roja Colombiana',
        href: 'tel:132',
        icon: IconHeart,
      },
      {
        number: '144',
        name: 'Defensa Civil Colombiana',
        href: 'tel:144',
        icon: IconUsers,
      },
    ],
    note: 'Quibdó está cerca del epicentro y ya se registraron réplicas. Reporta colapsos y personas atrapadas al 123 o al 119, e indica la dirección exacta y punto de referencia.',
  },

  {
    city: 'Cali',
    department: 'Valle del Cauca',
    accent: 'blue',
    contacts: [
      {
        number: '123',
        name: 'Línea única de emergencias',
        href: 'tel:123',
        icon: IconPhone,
        featured: true,
      },
      {
        number: '119',
        name: 'Bomberos de Cali — también ambulancia',
        href: 'tel:119',
        icon: IconFlame,
      },
      {
        number: '132',
        name: 'Cruz Roja Colombiana',
        href: 'tel:132',
        icon: IconHeart,
      },
      {
        number: '144',
        name: 'Defensa Civil Colombiana',
        href: 'tel:144',
        icon: IconUsers,
      },
      {
        number: '117',
        name: 'Emcali — servicios públicos',
        href: 'tel:117',
        icon: IconPhone,
      },
      {
        number: '164',
        name: 'Fuga de gas',
        href: 'tel:164',
        icon: IconPhone,
      },
    ],
  },

  {
    city: 'Pereira',
    department: 'Risaralda',
    accent: 'green',
    contacts: [
      {
        number: '123',
        name: 'Línea única de emergencias',
        href: 'tel:123',
        icon: IconPhone,
        featured: true,
      },
      {
        number: '119',
        name: 'Bomberos de Pereira',
        href: 'tel:119',
        icon: IconFlame,
      },
      {
        number: '132',
        name: 'Cruz Roja Colombiana',
        href: 'tel:132',
        icon: IconHeart,
      },
      {
        number: '144',
        name: 'Defensa Civil Colombiana',
        href: 'tel:144',
        icon: IconUsers,
      },
      {
        number: '315 683 3300',
        name: 'Bomberos de Pereira — celular',
        href: 'tel:3156833300',
        icon: IconPhone,
      },
    ],
    note: 'La DIGER y el Cuerpo Oficial de Bomberos de Pereira atienden los reportes que llegan por las líneas 119 y 123, activas 24 horas.',
  },
]
