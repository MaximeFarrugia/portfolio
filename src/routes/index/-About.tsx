import styled from '@emotion/styled'
import { Theme } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'

import useMyTheme from '../../components/ThemeSwitch/useMyTheme'
import RightArrow from '../../icons/RightArrow'
import Section from './-Section'

const getCV = (locale: 'fr' | 'en', theme: Theme) => {
  const cvs = {
    fr: {
      dark: '/res/cv/dark/cv_Maxime_Farrugia.pdf',
      light: '/res/cv/light/cv_Maxime_Farrugia.pdf',
    },
    en: {
      dark: '/res/cv/dark/resume_Maxime_Farrugia.pdf',
      light: '/res/cv/light/resume_Maxime_Farrugia.pdf',
    },
  }
  return cvs[locale]?.[theme.name as 'dark' | 'light'] || cvs.fr.dark
}

interface Props {
  className?: string
}

const About = ({ className }: Props) => {
  const { t, i18n } = useTranslation()
  const { theme } = useMyTheme()

  return (
    <Section className={className} name={t('index.about.title')}>
      <Desc>
        <Trans i18nKey="index.about.desc" components={[<DescAccent />]} />
      </Desc>
      <Resume
        href={getCV(i18n.language.split('-')[0] as 'fr' | 'en', theme)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>{t('index.about.resume')}</p>
        <Arrow />
      </Resume>
    </Section>
  )
}

const Desc = styled.span`
  white-space: pre;
  word-break: break-word;
  text-wrap: wrap;
`

const DescAccent = styled.strong`
  color: ${({ theme }) => theme.accent};
`

const Arrow = styled(RightArrow)`
  color: ${(props) => props.theme.accent};
`

const Resume = styled.a`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-top: 40px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  & > p {
    margin: 0;
  }

  & > ${Arrow} {
    margin-left: 20px;
    transition: 0.2s ease-in-out;
  }

  &:hover > ${Arrow} {
    margin-left: 40px;
  }
`

export default About
