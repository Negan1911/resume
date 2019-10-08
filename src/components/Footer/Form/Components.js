import styled from 'styled-components'

export const FooterContent = styled.form`
  margin: 0 auto;
  max-width: 700px;
`

export const FooterButton = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  appearance: none;
  background: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 10px 80px 10px auto;
`

export const FooterText = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
`

export const FooterInput = styled.input`
  border: none;
  color: white;
  padding: 10px;
  display: block;
  background: none;
  appearance: none;
  margin: 20px 80px;
  transition: 250ms border;
  width: calc(100% - 160px);
  border-bottom: 1px solid white;

  ::placeholder {
    color: white;
    opacity: .3;
    font-size: 14px;
  }

  :focus,
  :active {
    outline: none;
    border-bottom: 1px solid #007ace;
  }
`