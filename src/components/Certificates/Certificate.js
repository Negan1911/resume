import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 80px;
  object-fit: contain;
  margin-right: 40px;
`

const Section = styled.section`
  display: flex;
  padding-bottom: 60px;
  align-items: flex-start;
`

const Content = styled.article`
  font-size: 14px;

  h3,
  a {
    margin: 0;
    line-height: 1;
  }

  h3 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  a {
    display: block;
    color: #676767;
    font-weight: 400;
    padding-bottom: 14px;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export default function Certificate({ title, img, href, company }) {
  return <Section>
    <Img src={`certificates/${img}`} alt={company} />
    <Content>
      <h3>{title}</h3>
      <a href={href} rel="noopener noreferrer">{company}</a>
    </Content>
  </Section>
}