import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from "react"

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`

const Marker = props => {
  const [ display, setDisplay ] = useState(false)

  // console.log(props.bar)
  return (
    <MarkerContainer>
      {props.marker === 'local-position' && 
        <div 
          style={{
            display: `${!display ? 'none' : 'initial'}`,
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '150px',
            background: 'white',
            borderRadius: '10px',
            // lineHeight: '5px',
            padding: '0 5px',
            zIndex: 10,
          }}
        >
          <p>{props.name}</p>
          <p>{props.address}</p>
          <p>{props.price}</p>
        </div>
      }
      <FaMapMarkerAlt 
        style={{
          width: '40px',
          height: '40px',
          color: `${props.marker === 'local-position' && !display ? 'gray' : 'red'}`,
          position: 'absolute',
          bottom: '100%',
          left: '-20px',
        }}  
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      />
    </MarkerContainer>
  )
}

export default Marker