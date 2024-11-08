import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import GitHub from '../../icons/GitHub'
import LinkedIn from '../../icons/LinkedIn'

interface Props {
  className?: string
}

const FixedLinks = ({ className }: Props) => {
  const theme = useTheme()

  return (
  <Wrapper className={className}>
    <a
      href="https://github.com/MaximeFarrugia"
      rel="noopener noreferrer"
      target="_blank"
    >
      <GitHub color={theme.primary} />
    </a>
    <a
      href="https://www.linkedin.com/in/maxime-farrugia-881365178/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedIn color={theme.primary} />
    </a>
    <Rode />
  </Wrapper>
)}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 30px;
  bottom: 0;
  color: ${props => props.theme.primary};

  & > a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.2s ease-in-out;
  }

  & > a:hover {
    transform: scale(1.2);
    color: ${props => props.theme.accent};
  }

  @media (max-width: 500px) {
    flex-direction: row;
    position: relative;
    margin-bottom: 20px;
    transform: translateX(-50%);

    & > a {
      margin: 0;
    }

    & > a:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`

const Rode = styled.div`
  width: 5px;
  height: 50px;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.theme.accent};

  @media (max-width: 500px) {
    display: none;
  }
`

export default FixedLinks
