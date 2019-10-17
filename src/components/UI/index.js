import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${p => p.background || '#f4f4f4'};

  @media print {
    padding: 100px 0;
  }
`

const Content = styled.article`
  width: 700px;
  line-height: 1.6;
`

export const Title = styled.h1`
  font-size: 46px;
  text-align: left;
  padding-bottom: 30px;
  color: ${p => p.dark ? '#fff' : '#555'};

  &:after {
    content: '';
    height: 2px;
    width: 120px;
    display: block;
    margin: 10px auto 0 0;
    background: #777;
  }
`

export const Card = ({children, background}) => (
  <Wrapper background={background}>
    <Content>{children}</Content>
  </Wrapper>
)