import { useEffect, useState, createContext } from "react"
import barsList from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = props => {
  const [ location, setLocation ] = useState(null)
  const [ bars, setBars ] = useState(barsList)

  
  useEffect(() => {
    console.log("Récupération de la localisation...")

    navigator.geolocation.getCurrentPosition(
      location => {
        console.log(location.coords)
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        })
      },
      error => {
        console.log(error)
      }
    )
  }, [])
    
    const value = {
      location,
      // setLocation,
      bars,
      // setBars,
    }

  return(
    <MapContext.Provider value={value}>
      {props.children}
    </MapContext.Provider>
  )
}

export {
  MapContext,
  MapContextProvider,
}