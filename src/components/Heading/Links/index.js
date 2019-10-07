import React from 'react'
import github from './github.svg'
import linkedin from './linkedin.svg'
import styled from 'styled-components'
import medium from './medium.svg'
import stackoverflow from './stackoverflow.svg'

const Article = styled.article`
  display: flex;
  justify-content: center;

  a {
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 10px;
    text-indent: -99999px;

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
  }
`

const Links = () => (
  <Article>
    <a className="linkedin" href="https://www.linkedin.com/in/nahuelveron/">Linkedin</a>
    <a className="medium" href="https://medium.com/@negan1911">Medium</a>
    <a className="github" href="https://github.com/negan1911">Github</a>
    <a className="stackoverflow" href="https://stackoverflow.com/users/4285914/nahuel-veron">StackOverflow</a>
  </Article>
)

export default Links