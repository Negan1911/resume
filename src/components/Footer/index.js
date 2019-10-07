import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.section`
  padding: 60px 0;
  background: #2d2d2a;
`

const FooterContent = styled.form`
  width: 700px;
`


export default function Footer() {
  return (
    <FooterContainer>
    <FooterContent action="https://docs.google.com/forms/d/e/1FAIpQLSff1WYOQDJo5XSrxocsS-fNonR5ayN_Bzc76csfrQv9sYgxXw/formResponse" method="POST">
      Thanks for visiting, let's stay on touch!
      <input type="text" aria-label="Name" initialValue="" name="entry.2005620554" />
      <input type="email" aria-label="Email" initialValue="" name="entry.1045781291"/>
      <textarea aria-label="Text" initialValue="" name="entry.839337160" />
      </FooterContent>
    </FooterContainer>
  )
}