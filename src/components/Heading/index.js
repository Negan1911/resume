import JS from './JS'
import React from 'react'
import Links from './Links'
import Background from './Background'
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #394053;

  @media print {
    height: 700px;
    width: 100%;
  }
`

const Article = styled.article`
  text-align: center;

  h1 {
    margin: 0.3em 0;
    font-size: 82px;
    text-transform: lowercase;
    font-family: 'Major Mono Display', monospace;

    @media print {
      font-size: 60px;
    }
  }
`

const Heading = () => <Background>
  <Section>
    <Article>
      <h1>HI, I'm Nahuel Veron</h1>
      <h2>Software Developer | Entrepreneur | <JS /> Fan</h2>
      <Links />
    </Article>
  </Section>
</Background>

export default Heading