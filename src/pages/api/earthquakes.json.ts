import type { APIRoute } from 'astro'

export const prerender = true

const USGS_API_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query'

const COLOMBIA_BOUNDS = {
  minLatitude: -5,
  maxLatitude: 14,
  minLongitude: -82,
  maxLongitude: -66,
}

const MIN_MAGNITUDE = 4.0
const LOOKBACK_DAYS = 2

export const GET: APIRoute = async () => {
  const startTime = new Date(Date.now() - LOOKBACK_DAYS * 24 * 60 * 60 * 1000).toISOString()

  const params = new URLSearchParams({
    format: 'geojson',
    orderby: 'time',
    minmagnitude: String(MIN_MAGNITUDE),
    starttime: startTime,
    minlatitude: String(COLOMBIA_BOUNDS.minLatitude),
    maxlatitude: String(COLOMBIA_BOUNDS.maxLatitude),
    minlongitude: String(COLOMBIA_BOUNDS.minLongitude),
    maxlongitude: String(COLOMBIA_BOUNDS.maxLongitude),
  })

  const headers = {
    'content-type': 'application/json',
    'cache-control': 's-maxage=1800, stale-while-revalidate=3600',
  }

  try {
    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 5000)

    const response = await fetch(`${USGS_API_URL}?${params}`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'infoayudacolombia',
      },
    })

    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`USGS request failed with status ${response.status}`)
    }

    const data = await response.json()

    const earthquakes = (data.features ?? []).map((feature: any) => ({
      magnitude: feature.properties?.mag,
      location: feature.properties?.place,
      time: feature.properties?.time,
      url: feature.properties?.url,
      depth: Array.isArray(feature.geometry?.coordinates) ? feature.geometry.coordinates[2] : null,
    }))

    const strongestEarthquake = earthquakes.reduce(
      (strongest: any, earthquake: any) =>
        earthquake.magnitude > (strongest?.magnitude ?? -Infinity) ? earthquake : strongest,
      null,
    )

    return new Response(
      JSON.stringify({
        count: earthquakes.length,
        strongest: strongestEarthquake,
        earthquakes,
      }),
      {
        headers,
      },
    )
  } catch (error) {
    console.warn('Earthquake API: USGS unavailable.', error)

    return new Response(
      JSON.stringify({
        count: 0,
        strongest: null,
        earthquakes: [],
      }),
      {
        headers,
      },
    )
  }
}
