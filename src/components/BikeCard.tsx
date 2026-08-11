import { useId, useRef, type CSSProperties } from 'react'
import { Star, X } from 'lucide-react'
import { whatsappUrl } from '../content/site'

type BikeCardProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  imageScale: number
  imageFlip?: boolean
  imageOffsetY?: number
  specifications: readonly {
    label: string
    value: string
  }[]
}

export function BikeCard({ title, description, image, imageAlt, imageScale, imageFlip = false, imageOffsetY = 0, specifications }: BikeCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogTitleId = useId()
  const href = whatsappUrl(`Hola TRU, quiero más información sobre ${title}.`)

  const openSpecifications = () => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal()
  }

  const closeSpecifications = () => dialogRef.current?.close()

  return (
    <article className="bike-card">
      <div className="bike-card__media">
        <span className="bike-card__badge">
          <Star aria-hidden="true" size={12} strokeWidth={2} />
          <span className="bike-card__badge-label">Más vendida</span>
        </span>
        <img
          className="bike-card__image"
          src={image}
          alt={imageAlt}
          loading="lazy"
          style={{
            '--bike-image-scale': imageScale,
            '--bike-image-direction': imageFlip ? -1 : 1,
            '--bike-image-offset-y': `${imageOffsetY}px`,
          } as CSSProperties}
        />
      </div>
      <div className="bike-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="bike-card__actions">
          <button className="button button-outline bike-card__details-button" type="button" onClick={openSpecifications} aria-haspopup="dialog">
            Ver características
          </button>
          <a className="button button-primary bike-card__cta" href={href} target="_blank" rel="noreferrer">
            Quiero más información
          </a>
        </div>
      </div>

      <dialog
        className="specifications-dialog"
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onCancel={closeSpecifications}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            closeSpecifications()
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeSpecifications()
        }}
      >
        <div className="specifications-dialog__panel">
          <button className="specifications-dialog__close" type="button" onClick={closeSpecifications} aria-label={`Cerrar características de ${title}`} autoFocus>
            <X size={21} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <h2 id={dialogTitleId}>{title}</h2>
          <p>{description}</p>
          <dl className="specifications-list">
            {specifications.map((specification) => (
              <div key={specification.label}>
                <dt>{specification.label}</dt>
                <dd>{specification.value}</dd>
              </div>
            ))}
          </dl>
          <a className="button button-primary specifications-dialog__cta" href={href} target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </dialog>
    </article>
  )
}
