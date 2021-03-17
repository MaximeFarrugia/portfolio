import React, { useContext } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import Icon from '@material-ui/core/Icon'

import { translate as t, getLocale } from '../../../Common/Helpers/i18n'
import { Context } from '../../../App'

const getCV = (locale, theme) => {
  const cvs = {
    fr: {
      dark: '/res/cv/dark/cv_Maxime_Farrugia_2021.pdf',
      light: '/res/cv/light/cv_Maxime_Farrugia_2021.pdf',
    },
    en: {
      dark: '/res/cv/dark/resume_Maxime_Farrugia_2021.pdf',
      light: '/res/cv/light/resume_Maxime_Farrugia_2021.pdf',
    },
  }
  return cvs[locale][theme.name] || cvs.fr.dark
}

const About = ({ className }) => {
  const { theme } = useContext(Context)
  const locale = getLocale()

  return (
    <Wrapper className={className}>
      <Left>
        <p>{t('À propos de moi')}</p>
      </Left>
      <Right>
        <p>
          {t(
            'Je suis actuellement en fin de 2ème année d’étude à l’école ' +
              'EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme ' +
              'd’Expert en Informatique.',
          )}
        </p>
        <p>
          {t(
            'Je suis rentré dans le monde du développement web, lors de ma ' +
              "période de stage, à l'issue de ma première " +
              'année au sein d’EPITECH.',
          )}
        </p>
        <p>
          {t(
            'Par la suite, j’aimerais m’orienter vers le domaine de la ' +
              'sécurité informatique.',
          )}
        </p>
        <CV
          href={getCV(locale, theme)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>{t('Voir mon CV')}</p>
          <Arrow>arrow_forward</Arrow>
        </CV>
      </Right>
    </Wrapper>
  )
}

About.propTypes = {
  className: string,
}

About.defaultProps = {
  className: '',
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: ${props => props.theme.primary};

  @media (max-width: 1200px) {
    justify-content: center;
    padding: 100px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 500px) {
    padding: 50px;
  }
`

const Left = styled.div`
  text-transform: uppercase;
  text-align: right;
  font-weight: 700;
  color: ${props => props.theme.secondary};
`

const Right = styled.div`
  max-width: 700px;
  margin-left: 80px;

  & > p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1200px) {
    max-width: 600px;
    margin-left: auto;
  }
`

const Arrow = styled(Icon)`
  color: ${props => props.theme.accent};
`

const CV = styled.a`
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
