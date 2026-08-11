import { useState, type FormEvent } from 'react'
import { whatsappUrl } from '../content/site'

type FormState = 'idle' | 'success' | 'error'

export function LeadForm() {
  const [status, setStatus] = useState<FormState>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const interest = String(form.get('interest') ?? '').trim()

    if (!name || !phone || !interest) {
      setStatus('error')
      return
    }

    const message = `Hola TRU, soy ${name}. Mi teléfono es ${phone} y quiero consultar por ${interest}.`
    const popup = window.open(whatsappUrl(message), '_blank')

    if (popup) {
      popup.opener = null
      setStatus('success')
      event.currentTarget.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Teléfono</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Ej. 351 000-0000" required />
      </div>
      <div className="field field--wide">
        <label htmlFor="interest">¿Qué estás buscando?</label>
        <select id="interest" name="interest" defaultValue="" required>
          <option value="" disabled>Elegí una opción</option>
          <option>una moto urbana</option>
          <option>una moto 110 cc</option>
          <option>una moto de calle</option>
          <option>una moto enduro</option>
          <option>una moto Honda</option>
          <option>un scooter</option>
          <option>otra opción</option>
        </select>
      </div>
      <button className="button button-accent field--wide" type="submit">Quiero recibir asesoramiento</button>
      <p className="form-note field--wide">Al continuar se abrirá WhatsApp con tu consulta lista para enviar.</p>
      <p className={`form-status form-status--${status} field--wide`} role="status" aria-live="polite">
        {status === 'success' && 'Listo: abrimos WhatsApp con tu consulta.'}
        {status === 'error' && 'Completá todos los datos y asegurate de permitir la apertura de WhatsApp.'}
      </p>
    </form>
  )
}
