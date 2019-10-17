import React from 'react'
import github from './github.svg'
import linkedin from './linkedin.svg'
import styled from 'styled-components'
import medium from './medium.svg'
import email from './email.svg'
import stackoverflow from './stackoverflow.svg'

const Article = styled.article`
  display: flex;
  justify-content: center;

  @media print {
    width: fit-content;
    margin: 0 auto;
    flex-direction: column;
  }

  a {
    color: #fff;
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 10px;
    text-decoration: none;
    text-indent: -99999px;

    @media print {
      text-indent: 0;
      display: block;
      width: 100%;
      margin: 10px 0;
      display: flex;
      padding-left: 40px;
      align-items: center;
      padding-top: 8px;
    }

    &.linkedin {
      background: url("${linkedin}") no-repeat;
      background-size: contain;
    }

    &.github {
      background: url("${github}") no-repeat;
      background-size: contain;
    }
    
    &.stackoverflow {
      background: url("${stackoverflow}") no-repeat;
      background-size: contain;
    }
    
    &.medium {
      background: url("${medium}") no-repeat;
      background-size: contain;
    }

    &.mail {
      background: url("${email}") no-repeat;
      background-size: contain;
    }
  }
`

const Links = () => (
  <Article>
    <a className="linkedin" href="https://www.linkedin.com/in/nahuelveron/">https://www.linkedin.com/in/nahuelveron/</a>
    <a className="medium" href="https://medium.com/@negan1911">https://medium.com/@negan1911</a>
    <a className="github" href="https://github.com/negan1911">https://github.com/negan1911</a>
    <a className="stackoverflow" href="https://stackoverflow.com/users/4285914/nahuel-veron">https://stackoverflow.com/users/4285914/nahuel-veron</a>
    <a className="mail" href="mailto:nahuelav96@gmail.com">nahuelav96@gmail.com</a>
  </Article>
)

export default Links