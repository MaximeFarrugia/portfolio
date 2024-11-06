import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import RightArrow from '../icons/RightArrow'

interface Props {
  className?: string
  link?: string
}

const LinkFadingArrow = ({
  className,
  link,
  children,
}: PropsWithChildren<Props>) => (
  <Wrapper
    as={link ? 'a' : 'span'}
    className={className}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    {!!link && <Arrow>arrow_forward</Arrow>}
  </Wrapper>
)

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

const Arrow = styled(RightArrow)`
  opacity: 0.5;
  margin-left: 20px;
  color: ${(props) => props.theme.accent};
  animation: ${arrowOut} 0.35s ease-in-out;
`

const Wrapper = styled.a`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  display: flex;
  text-decoration: none;
  color: inherit;
  cursor: ${(props) => (props.href ? 'pointer' : 'normal')};

  &:hover > ${Arrow} {
    opacity: 1;
    margin-left: 40px;
    animation: ${arrowIn} 0.35s ease-in-out;
  }
`

export default LinkFadingArrow
