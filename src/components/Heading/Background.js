import React from 'react'
import styled from 'styled-components'
import { useAnimation } from './Animation'

const BGWrapper = styled.div`
  position: relative;
  background: #000;

  canvas {
    top: 0;
    left: 0;
    z-index: 0;
    position: absolute;
  }

  .children {
    position: relative;
    z-index: 1;
  }
`

const Background = ({ children }) => {
  const ref = React.useRef()
  useAnimation(ref)

  return <BGWrapper ref={ref}>
    <div className="children">{children}</div>
  </BGWrapper>
}

export default Background