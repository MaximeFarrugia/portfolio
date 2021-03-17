import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const FixedLinks = ({ className }) => (
  <Wrapper className={className}>
    <a
      href="https://github.com/MaximeFarrugia"
      rel="noopener noreferrer"
      target="_blank"
    >
      <GitHubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/maxime-farrugia-881365178/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedInIcon />
    </a>
    <Rode />
  </Wrapper>
)

FixedLinks.propTypes = {
  className: string,
}

FixedLinks.defaultProps = {
  className: '',
}

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
