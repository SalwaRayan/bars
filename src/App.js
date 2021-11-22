// import styled from 'styled-components'
import React from 'react'
import { MapContextProvider } from './contexts/Map'

import Map from './components/Map'


const App = () => {
  return (
    <MapContextProvider>
      <Map />
    </MapContextProvider>
  )
}


export default App