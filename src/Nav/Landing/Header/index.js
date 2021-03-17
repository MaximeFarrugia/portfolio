import React from 'react'
import styled, { keyframes } from 'styled-components'
import { string } from 'prop-types'

import { translate as t } from '../../../Common/Helpers/i18n'
import LangSelectComponent from '../../../Common/Components/LangSelect'
import ThemeSwitch from '../../../Common/Components/ThemeSwitch'
import { ReactComponent as WaveIcon } from './wave.svg'
import { ReactComponent as RightPointer } from './rightPointer.svg'

const Header = ({ className }) => (
  <Wrapper className={className}>
    <Selectors>
      <LangSelect />
      <ThemeSwitch />
    </Selectors>
    <div>
      <p>{t('Bonjour !')}</p>
      <Wave />
    </div>
    <p>
      {t(
        'Je suis **Maxime Farrugia**, développeur freelance et étudiant en informatique.',
        null,
        { md: true },
      )}
    </p>
    <Contact>
      <div>
        <p>{t('Me contacter')}</p>
        <RightPointer />
      </div>
      <Underlined
        href="mailto:farrugia.maxime@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        farrugia.maxime@gmail.com
      </Underlined>
    </Contact>
  </Wrapper>
)

Header.propTypes = {
  className: string,
}

Header.defaultProps = {
  className: '',
}

const Wrapper = styled.div`
  height: calc(100vh - 400px);
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 36px;
  color: ${props => props.theme.primary};

  & > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1140px) {
    padding: 200px 100px;
  }

  @media (max-width: 500px) {
    padding: 200px 50px;
    font-size: 24px;
  }
`

const Selectors = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;

  @media (max-width: 700px) {
    left: 50%;
    right: unset;
    transform: translateX(-50%);
  }

  @media (max-width: 414px) {
    flex-direction: column-reverse;
    align-items: center;
    top: 20px;
  }
`

const LangSelect = styled(LangSelectComponent)`
  margin-right: 20px;
  width: 150px;

  @media (max-width: 414px) {
    margin: 10px 0 0 0;
  }
`

const wave = keyframes`
  0% {
    transform: none;
  }
  15% {
      transform: translate3d(-20%,0,0) rotate3d(0,0,1,-10deg);
  }
  30% {
      transform: translate3d(10%,0,0) rotate3d(0,0,1,7deg);
  }
  45% {
      transform: translate3d(-15%,0,0) rotate3d(0,0,1,-10deg);
  }
  60% {
      transform: translate3d(10%,0,0) rotate3d(0,0,1,5deg);
  }
  75% {
      transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg);
  }
  100% {
      transform: none;
  }
`

const Wave = styled(WaveIcon)`
  width: 40px;
  height: 40px;
  margin-left: 40px;
  animation: ${wave} 2s infinite;
`

const Contact = styled.div`
  font-size: 20px;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > p {
    margin: 0;
  }

  & svg {
    margin: 0 20px;
  }

  & a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 320px) {
    font-size: 15px;

    & svg {
      width: 30px;
      height: 30px;
    }
  }
`

const Underlined = styled.a`
  box-shadow: inset 0 -3px ${props => props.theme.accent};
  padding: 3px 3px;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: inset 0 -33px ${props => props.theme.accent};
  }
`

export default Header
