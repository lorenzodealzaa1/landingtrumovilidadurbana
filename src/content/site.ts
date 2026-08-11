const whatsappBase = 'https://wa.me/3518598650'

export function whatsappUrl(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`
}

function googleMapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`TRU Movilidad Urbana, ${address}, Córdoba, Argentina`)}`
}

export const site = {
  name: 'TRU Movilidad Urbana',
  description: 'Venta de motos e indumentaria con atención directa en Córdoba.',
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Motos', href: '#motos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Locales', href: '#locales' },
    { label: 'Contacto', href: '#contacto' },
  ],
  primaryAction: {
    label: 'Consultá por WhatsApp',
    href: whatsappUrl('Hola TRU, quiero consultar por una moto.'),
  },
  contact: {
    phone: '351 859-8650',
    whatsappUrl: whatsappUrl('Hola TRU, quiero recibir asesoramiento para elegir mi próxima moto.'),
    instagram: 'https://www.instagram.com/trumovilidadurbana/',
  },
  locations: [
    { name: 'Blvd. Las Heras 264', rating: 4.7, reviewCount: 109, coordinates: [-31.4047312, -64.1835673] as const, mapsUrl: googleMapsUrl('Blvd. Las Heras 264') },
    { name: 'Rivera Indarte 635', rating: 4.8, reviewCount: 214, coordinates: [-31.4080371, -64.1824258] as const, mapsUrl: googleMapsUrl('Rivera Indarte 635') },
    { name: 'Sarmiento esq. Rivadavia', rating: 5, reviewCount: 137, coordinates: [-31.4107499, -64.1801279] as const, mapsUrl: googleMapsUrl('Rivadavia 496') },
    { name: 'Av. Mitre 179', rating: 4.8, reviewCount: 26, coordinates: [-31.4069382, -64.1828238] as const, mapsUrl: googleMapsUrl('Blvr. Mitre 179') },
  ],
  happyClients: Array.from({ length: 22 }, (_, index) => ({
    image: `/clientes/cliente-${String(index + 1).padStart(2, '0')}.webp`,
    imageAlt: `Cliente de TRU junto a su moto entregada, foto ${index + 1}`,
  })),
  motorcycles: [
    {
      title: 'Okinoi 110',
      description: 'Ideal para moverte a diario con bajo consumo, manejo liviano y tecnología práctica para recorridos urbanos.',
      image: '/motos/okinoi-110-gris.webp',
      imageAlt: 'Moto Okinoi 110 gris de perfil sobre fondo transparente',
      imageScale: 0.92,
      specifications: [
        { label: 'Cilindrada', value: '110 cc, monocilíndrico de 4 tiempos' },
        { label: 'Transmisión', value: 'Caja manual de 4 velocidades' },
        { label: 'Frenos', value: 'CBS, disco delantero y tambor trasero según versión' },
        { label: 'Tablero', value: 'Completamente digital' },
      ],
    },
    {
      title: 'Keller Crono Eco 110',
      description: 'Pensada para traslados urbanos diarios: es liviana, económica y fácil de manejar en trayectos cortos.',
      image: '/motos/keller-crono-uniform.webp',
      imageAlt: 'Moto Keller Crono Classic Eco 110 gris de perfil sobre fondo blanco',
      imageScale: 1.24,
      imageOffsetY: 8,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico 4 tiempos UNNITEC, 110 cc, refrigerado por aire' },
        { label: 'Arranque', value: 'Eléctrico y a patada' },
        { label: 'Frenos', value: 'Tambor en ambas ruedas en la versión Eco base' },
        { label: 'Tablero', value: 'Digital en las versiones recientes' },
        { label: 'Confort', value: 'Asiento antideslizante, baúl y parrilla trasera' },
      ],
    },
    {
      title: 'Motomel Blitz 110',
      description: 'Una compañera ágil y rendidora para el día a día, ideal si buscás movilidad económica y conducción simple.',
      image: '/motos/motomel-blitz-shadowless.png',
      imageAlt: 'Moto Motomel Blitz 110 negra de perfil sobre fondo blanco',
      imageScale: 1,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico de 4 tiempos' },
        { label: 'Cilindrada', value: '110 cm³' },
        { label: 'Arranque', value: 'Eléctrico y por patada' },
        { label: 'Frenos', value: 'Disco delantero y tambor trasero' },
        { label: 'Transmisión', value: '4 velocidades o automática según versión' },
      ],
    },
    {
      title: 'Kamax 125',
      description: 'Una cub versátil para uso diario o laboral, con buena respuesta, equipamiento moderno y autonomía extendida.',
      image: '/motos/kamax-125-negra.png',
      imageAlt: 'Moto Kamax 125 negra en vista de tres cuartos sobre fondo blanco',
      imageScale: 0.9,
      imageOffsetY: 6,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico 4 tiempos de 125 cc, refrigerado por aire' },
        { label: 'Transmisión', value: 'Semiautomática de 4 velocidades' },
        { label: 'Frenos', value: 'Disco delantero con sistema combinado y tambor trasero' },
        { label: 'Tecnología', value: 'Tablero digital, iluminación LED y puerto USB' },
        { label: 'Autonomía', value: 'Estimada entre 200 y 250 km, con tanque de 3,5 a 3,8 litros' },
      ],
    },
    {
      title: 'Gilera Smash 110',
      description: 'Ideal para moverte con agilidad y economía en la ciudad, con un formato liviano pensado para la rutina diaria.',
      image: '/motos/gilera-smash-shadowless.png',
      imageAlt: 'Moto Gilera Smash 110 roja de perfil sobre fondo blanco',
      imageScale: 1,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico de 4 tiempos' },
        { label: 'Transmisión', value: 'Semiautomática de 4 velocidades' },
        { label: 'Arranque', value: 'Eléctrico y a patada' },
        { label: 'Equipamiento', value: 'Frenos CBS y puerto USB' },
      ],
    },
    {
      title: 'Honda Wave 110',
      description: 'Una opción confiable y eficiente para el uso diario, ideal si priorizás bajo consumo y un manejo sencillo.',
      image: '/motos/honda-wave-shadowless.png',
      imageAlt: 'Moto Honda Wave 110 blanca de perfil sobre fondo blanco',
      imageScale: 0.97,
      specifications: [
        { label: 'Motor', value: '109 cc, monocilíndrico de 4 tiempos' },
        { label: 'Refrigeración', value: 'Por aire' },
        { label: 'Arranque', value: 'Eléctrico y a pedal' },
        { label: 'Transmisión', value: 'Semiautomática de 4 marchas' },
        { label: 'Alimentación', value: 'Inyección electrónica PGM-FI' },
      ],
    },
    {
      title: 'Okinoi ST 150',
      description: 'Una moto de calle accesible para traslados diarios y reparto, con potencia y practicidad para trabajar.',
      image: '/motos/okinoi-st-150.jpg',
      imageAlt: 'Moto Okinoi ST 150 violeta de perfil sobre fondo blanco',
      imageScale: 1.04,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico de 150 cc, 4 tiempos' },
        { label: 'Transmisión', value: 'Caja de 5 velocidades' },
        { label: 'Frenos', value: 'Disco delantero hidráulico con CBS y tambor trasero' },
        { label: 'Tablero', value: '100% digital' },
        { label: 'Equipamiento', value: 'Parrilla trasera de fábrica' },
      ],
    },
    {
      title: 'Keller Miracle 150',
      description: 'Orientada a caminos mixtos y escapadas, con postura alta, buena autonomía y una configuración robusta.',
      image: '/motos/keller-miracle-uniform.webp',
      imageAlt: 'Moto Keller Miracle 150 azul de perfil sobre fondo blanco',
      imageScale: 1,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico, 4 tiempos, 2 válvulas, SOHC, refrigerado por aire' },
        { label: 'Encendido', value: 'CDI y avance electrónico' },
        { label: 'Arranque', value: 'Eléctrico y a pedal' },
        { label: 'Transmisión', value: '5 velocidades' },
        { label: 'Frenos', value: 'Disco delantero y tambor trasero' },
      ],
    },
    {
      title: 'Keller Stratus 150',
      description: 'Pensada para recorridos urbanos diarios, con consumo contenido, andar cómodo y una propuesta equilibrada.',
      image: '/motos/keller-stratus-uniform.jpg',
      imageAlt: 'Moto Keller Stratus 150 negra de perfil sobre fondo blanco',
      imageScale: 1,
      specifications: [
        { label: 'Motor', value: 'Monocilíndrico, 4 tiempos, 2 válvulas, SOHC, refrigerado por aire' },
        { label: 'Encendido', value: 'CDI y avance electrónico' },
        { label: 'Arranque', value: 'Eléctrico y a pedal' },
        { label: 'Transmisión', value: '5 velocidades' },
      ],
    },
  ],
} as const
