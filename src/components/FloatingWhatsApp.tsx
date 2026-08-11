type FloatingWhatsAppProps = {
  href: string
}

export function FloatingWhatsApp({ href }: FloatingWhatsAppProps) {
  return (
    <a
      aria-label="Escribir por WhatsApp"
      className="floating-whatsapp fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full shadow-lg transition hover:scale-105 focus-visible:outline-none sm:bottom-6 sm:right-6"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <img src="/whatsapp.png" alt="" aria-hidden="true" />
    </a>
  )
}
