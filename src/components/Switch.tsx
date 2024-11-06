import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

const Switch = (props: Props) => <Wrapper {...props} type="checkbox" />

const Wrapper = styled.input`
  position: relative;
  height: 20px;
  width: 40px;
  -webkit-appearance: none;
  background: ${(props) => props.theme.primary};
  outline: none;
  border-radius: 12px;
  transition: 0.5s;
  border: 1px solid ${(props) => props.theme.background};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    border-color: ${(props) => props.theme.primary};
    top: 1px;
    left: 1px;
    background: ${(props) => props.theme.background};
    transition: 0.5s;
    text-align: center;
    line-height: 14px;
  }

  &:checked::before {
    left: 21px;
  }
`

export default Switch
