import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'

import LangSelect from '../../components/LangSelect'
import ThemeSwitch from '../../components/ThemeSwitch'
import WaveIcon from './-res/WaveHand'
import RightPointer from './-res/RightPointer'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Wrapper className={className}>
      <Selectors>
        <LangSelect />
        <ThemeSwitch />
      </Selectors>
      <div>
        <p>{t('index.header.hello')}</p>
        <Wave />
      </div>
      <Desc>
        <Trans i18nKey="index.header.desc" components={[<strong />]} />
      </Desc>
      <Contact>
        <div>
          <p>{t('index.header.contact')}</p>
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
}

const Wrapper = styled.div`
  height: calc(100vh - 400px);
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 36px;
  color: ${(props) => props.theme.primary};

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
  font-size: 16px;
  gap: 10px;

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

const Desc = styled.span`
  margin: 36px 0;
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
  box-shadow: inset 0 -3px ${(props) => props.theme.accent};
  padding: 3px 3px;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 0 -33px ${(props) => props.theme.accent};
    color: ${({ theme }) =>
      theme.name === 'dark' ? theme.background : theme.primary};
  }
`

export default Header
