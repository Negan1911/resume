import React from 'react'
import { FooterInput, FooterContent, FooterText, FooterButton } from './Components'

export default function FormContents({ onSubmit }) {
  return (
    <>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="text"></textarea>
      </form>
      <FooterContent method="post" name="contact" data-netlify="true">
        <FooterText>Thanks for visiting, let's stay on touch!</FooterText>
        <input type="hidden" name="form-name" value="contact" />
        <FooterInput type="text" placeholder="Name" aria-label="Name" initialValue="" name="name" />
        <FooterInput type="email" placeholder="Email" aria-label="Email" initialValue="" name="email" />
        <FooterInput as="textarea" placeholder="Text" aria-label="Text" initialValue="" name="text" />
        <FooterButton type="submit">Send</FooterButton>
      </FooterContent>
    </>
  )
}
