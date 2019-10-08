import React from 'react'
import { FooterInput, FooterContent, FooterText, FooterButton } from './Components'

const form_fields = process.env.FORM_FIELDS
  .split('&')
  .reduce((_, el) => ({ ..._, [el.split('=')[0]]: el.split('=')[1] }), {})

export default function FormContents({ onSubmit }) {
  return (
    <FooterContent method="POST" action={process.env.FORM_URL}>
      <FooterText>Thanks for visiting, let's stay on touch!</FooterText>
      <FooterInput type="text" placeholder="Name" aria-label="Name" initialValue="" name={form_fields.name} />
      <FooterInput type="email" placeholder="Email" aria-label="Email" initialValue="" name={form_fields.email} />
      <FooterInput as="textarea" placeholder="Text" aria-label="Text" initialValue="" name={form_fields.text} />
      <FooterButton type="submit">Send</FooterButton>
    </FooterContent>
  )
}
