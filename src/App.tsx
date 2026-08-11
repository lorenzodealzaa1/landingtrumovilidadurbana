import { useLayoutEffect, useState } from 'react'
import { IdCard, KeyRound, Store } from 'lucide-react'
import { BikeCard } from './components/BikeCard'
import { Container } from './components/Container'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { LeadForm } from './components/LeadForm'
import { LocationMap } from './components/LocationMap'
import { site } from './content/site'

const promoItems = [
  { Icon: Store, label: 'Concesionaria de Motos N°1 de Córdoba' },
  { Icon: IdCard, label: 'Financiación solo con tu DNI' },
  { Icon: KeyRound, label: '+10.580 motos entregadas' },
]

function PromoStripGroup() {
  return (
    <div className="promo-strip__group">
      {[0, 1, 2].map((cycle) =>
        promoItems.map(({ Icon, label }) => (
          <span className="promo-strip__item" key={`${cycle}-${label}`}>
            <i className="promo-strip__icon"><Icon aria-hidden="true" strokeWidth={1.8} /></i>
            {label}
          </span>
        )),
      )}
    </div>
  )
}

function HappyClientsGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="happy-clients__group" aria-hidden={duplicate || undefined}>
      {site.happyClients.map((client) => (
        <img
          className="happy-clients__image"
          src={client.image}
          alt={duplicate ? '' : client.imageAlt}
          loading="lazy"
          decoding="async"
          key={client.image}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [heroMediaReady, setHeroMediaReady] = useState(false)

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    elements.forEach((element) => {
      element.classList.add('reveal-ready')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <div className="promo-strip" role="region" aria-label="Información destacada">
        <p className="sr-only">Concesionaria de Motos N°1 de Córdoba. Financiación solo con tu DNI. Más de 10.580 motos entregadas.</p>
        <div className="promo-strip__track" aria-hidden="true">
          <PromoStripGroup />
          <PromoStripGroup />
        </div>
      </div>
      <header className="site-header">
        <Container>
          <div className="header-inner">
            <a className="brand brand--header" href="#inicio" aria-label="TRU Movilidad Urbana, ir al inicio" data-reveal="down">
              <img src="/logo-tru-navbar.png" alt="TRU Movilidad Urbana" />
              <img className="brand__dark-subtext" src="/logo-tru-navbar.png" alt="" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </header>

      <main>
        <section className={`hero${heroMediaReady ? ' hero--media-ready' : ''}`} id="inicio" aria-busy={!heroMediaReady}>
          <div className="hero__image" aria-hidden="true" />
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setHeroMediaReady(true)}
            onError={() => setHeroMediaReady(true)}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/hero-motion.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
          <div className="hero__grain" aria-hidden="true" />
          <Container>
            <div className="hero__content">
              <p className="hero__brandline" data-reveal="up">TRU Movilidad Urbana</p>
              <div className="hero-title-reveal" data-reveal="up" style={{ transitionDelay: '80ms' }}>
                <h1>
                  <span>Tu próxima moto</span>
                  <span>en Córdoba Capital</span>
                  <span>100% financiada</span>
                </h1>
              </div>
              <p className="hero__copy" data-reveal="up" style={{ transitionDelay: '150ms' }}>Encontrá opciones para moverte por la ciudad y recibí asesoramiento directo de nuestro equipo en Córdoba.</p>
              <div className="hero__actions" data-reveal="up" style={{ transitionDelay: '220ms' }}>
                <a className="button button-accent" href={site.primaryAction.href} target="_blank" rel="noreferrer">Consultá ahora por WhatsApp</a>
                <a className="button button-ghost" href="#motos">Ver motos</a>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section--catalog" id="motos">
          <Container>
            <div className="section-heading section-heading--center" data-reveal="up">
              <h2>Encontrá la moto que estás buscando</h2>
              <p>Compará los modelos disponibles, conocé sus características y consultá precio, stock y financiación con un asesor.</p>
            </div>
            <div className="catalog-grid">
              {site.motorcycles.map((motorcycle, index) => (
                <div className="catalog-reveal" data-reveal="up" style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }} key={motorcycle.title}>
                  <BikeCard {...motorcycle} />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section--about" id="nosotros">
          <Container>
            <div className="about-grid">
              <div className="about-image-wrap" data-reveal="left">
                <img src="/local-tru-showroom.jpg" alt="Motos exhibidas en un punto de venta de TRU Movilidad Urbana" loading="lazy" />
              </div>
              <div className="about-copy" data-reveal="right" style={{ transitionDelay: '80ms' }}>
                <h2>Movilidad para acompañarte todos los días</h2>
                <p>TRU Movilidad Urbana es un negocio de Córdoba dedicado a la venta de motos e indumentaria. Te ayudamos a convertir una primera consulta en una opción concreta para tu día a día.</p>
                <a className="button button-primary" href={site.contact.whatsappUrl} target="_blank" rel="noreferrer">Hablar con un asesor</a>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section--locations" id="locales">
          <Container>
            <div className="section-heading section-heading--center" data-reveal="up">
              <h2>Elegí tu punto de venta más cercano</h2>
              <p>Consultá por WhatsApp antes de acercarte para confirmar atención, stock y disponibilidad.</p>
            </div>
            <ul className="locations-list">
              {site.locations.map((location, index) => (
                <li className="location-item" data-reveal="up" style={{ transitionDelay: `${index * 80}ms` }} key={location.name}>
                  <h3>{location.name}</h3>
                  <div className="location-rating" aria-label={`${location.rating} de 5, ${location.reviewCount} reseñas en Google`}>
                    <strong>{location.rating.toFixed(1).replace('.', ',')}</strong>
                    <span className="location-rating__stars" aria-hidden="true">★★★★★</span>
                    <span>{location.reviewCount} reseñas</span>
                  </div>
                  <div className="location-map-card">
                    <LocationMap coordinates={location.coordinates} name={location.name} />
                    <div className="location-map-card__footer">
                      <a href={location.mapsUrl} target="_blank" rel="noreferrer" aria-label={`Abrir ${location.name} en Google Maps`}>
                        Abrir en Google Maps <b aria-hidden="true">↗</b>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="section section--happy-clients" aria-labelledby="happy-clients-title">
          <Container>
            <div className="section-heading section-heading--center" data-reveal="up">
              <h2 id="happy-clients-title">Clientes felices, motos en marcha</h2>
              <p>Cada entrega marca un nuevo comienzo. Estas son algunas de las personas que confiaron en TRU para estrenar su próxima moto.</p>
            </div>
          </Container>
          <div className="happy-clients" aria-label="Galería de clientes de TRU" data-reveal="scale">
            <div className="happy-clients__track">
              <HappyClientsGroup />
              <HappyClientsGroup duplicate />
            </div>
          </div>
        </section>

        <section className="conversion" id="contacto">
          <Container>
            <div className="conversion-grid">
              <div className="conversion-note" data-reveal="up">
                <strong>¿Querés consultar financiación?</strong>
                <span>Incluí el modelo o tipo de moto que te interesa y el equipo te cuenta las opciones vigentes.</span>
              </div>
              <div className="conversion-copy" data-reveal="left" style={{ transitionDelay: '80ms' }}>
                <h2>Contanos qué moto estás buscando</h2>
                <p>Dejanos tus datos y abrimos una conversación de WhatsApp con tu consulta lista para enviar.</p>
              </div>
              <div className="lead-form-reveal" data-reveal="right" style={{ transitionDelay: '140ms' }}>
                <LeadForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container>
          <div className="footer-grid" data-reveal="up">
            <div className="footer-brand">
              <a className="brand brand--footer" href="#inicio">
                <img src="/logo-tru.png" alt="TRU Movilidad Urbana" />
              </a>
              <p>Venta de motos e indumentaria con atención directa en Córdoba.</p>
              <a href={site.contact.instagram} target="_blank" rel="noreferrer">Instagram @trumovilidadurbana</a>
            </div>
            <div>
              <h2>Contacto</h2>
              <ul>
                <li><a href={site.contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp {site.contact.phone}</a></li>
                <li>Córdoba, Argentina</li>
              </ul>
            </div>
            <div>
              <h2>Navegación</h2>
              <ul>{site.navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
            </div>
            <div>
              <h2>Puntos de venta</h2>
              <ul>{site.locations.map((location) => <li key={location.name}><a href={location.mapsUrl} target="_blank" rel="noreferrer">{location.name}</a></li>)}</ul>
            </div>
          </div>
          <p className="footer-bottom" data-reveal="up">© {new Date().getFullYear()} TRU Movilidad Urbana. Todos los derechos reservados.</p>
        </Container>
      </footer>

      <FloatingWhatsApp href={site.contact.whatsappUrl} />
    </div>
  )
}
