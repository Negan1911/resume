import React from 'react'
import FooterForm from './Form'
import styled from 'styled-components'

const FooterContainer = styled.section`
  padding: 60px 0;
  background: #2d2d2a;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterForm />
    </FooterContainer>
  )
}