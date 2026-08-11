import { IconBookmark, IconHome, IconPackage, IconPhone } from '@tabler/icons-astro'

export const navigation = [
  {
    label: 'Inicio',
    href: '/',
    icon: IconHome,
    description: 'Noticias y novedades',
  },
  {
    label: 'Insumos',
    href: '/supplies',
    icon: IconPackage,
    description: 'Donaciones y suministros',
  },
  {
    label: 'Noticias',
    href: '/notices',
    icon: IconBookmark,
    description: 'Últimas noticias',
  },
]

export const emergency = {
  label: 'Emergencia',
  href: '/emergency',
  icon: IconPhone,
  description: 'Números y ayuda inmediata',
}
