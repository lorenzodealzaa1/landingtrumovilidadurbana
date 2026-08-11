import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

type LocationMapProps = {
  coordinates: readonly [number, number]
  name: string
}

export function LocationMap({ coordinates, name }: LocationMapProps) {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapElement.current) return

    const mapCenter: L.LatLngTuple = [coordinates[0], coordinates[1]]

    const map = L.map(mapElement.current, {
      attributionControl: true,
      boxZoom: false,
      doubleClickZoom: false,
      dragging: false,
      keyboard: false,
      scrollWheelZoom: false,
      touchZoom: false,
      zoomControl: false,
    }).setView(mapCenter, 15)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 20,
      subdomains: 'abcd',
    }).addTo(map)

    const marker = L.divIcon({
      className: 'tru-map-marker-shell',
      html: '<span class="tru-map-marker" aria-hidden="true"></span>',
      iconAnchor: [14, 35],
      iconSize: [28, 35],
    })

    L.marker(mapCenter, { icon: marker, keyboard: false, title: name }).addTo(map)

    return () => {
      map.remove()
    }
  }, [coordinates, name])

  return <div className="location-item__map" ref={mapElement} role="img" aria-label={`Mapa de ${name}`} />
}
