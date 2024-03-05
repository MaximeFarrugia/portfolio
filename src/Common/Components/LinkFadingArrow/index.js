import React from 'react'
import styled, { keyframes } from 'styled-components'
import { string, oneOfType, arrayOf, node } from 'prop-types'
import Icon from '@material-ui/core/Icon'

const LinkFadingArrow = ({ className, link, children }) => (
  <Wrapper
    as={link ? "a" : "span"}
    className={className}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    {!!link && <Arrow>arrow_forward</Arrow>}
  </Wrapper>
)

LinkFadingArrow.propTypes = {
  className: string,
  link: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
}

LinkFadingArrow.defaultProps = {
  className: '',
  link: '',
}

const arrowIn = keyframes`
  0% {
    opacity: 0.5;
    margin-left: 20px;
  }
  50% {
    opacity: 1;
    margin-left: 20px;
  }
  100% {
    opacity: 1;
    margin-left: 40px;
  }
`

const arrowOut = keyframes`
  0% {
    opacity: 1;
    margin-left: 40px;
  }
  50% {
    opacity: 1;
    margin-left: 20px;
  }
  100% {
    opacity: 0.5;
    margin-left: 20px;
  }
`

const Arrow = styled(Icon)`
  opacity: 0.5;
  margin-left: 20px;
  color: ${props => props.theme.accent};
  animation: ${arrowOut} 0.35s ease-in-out;
`

const Wrapper = styled.a`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  display: flex;
  text-decoration: none;
  color: inherit;
  cursor: ${props => props.href ? "pointer" : "normal"};

  &:hover > ${Arrow} {
    opacity: 1;
    margin-left: 40px;
    animation: ${arrowIn} 0.35s ease-in-out;
  }
`

export default LinkFadingArrow
