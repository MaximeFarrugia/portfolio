import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import Icon from '@material-ui/core/Icon'

import {
  Wrapper,
  Visible,
  Dark,
  Light,
  Left,
  Right,
  CV,
  Arrow,
} from './About.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'

const About = ({ className }) => {
  const { darkTheme } = useContext(Context)
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <div
      ref={ref}
      className={classNames([
        className,
        Wrapper,
        darkTheme ? Dark : Light,
        inView && Visible,
      ])}
    >
      <div className={Left}>
        <p>{t('A propos de moi')}</p>
      </div>
      <div className={Right}>
        <p>
          {t(
            'Je suis actuellement en fin de 2ème année d’étude à l’école '
              + 'EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme '
              + 'd’Expert en Informatique.',
          )}
        </p>
        <p>
          {t(
            'Je suis rentré dans le monde du développement web, lors de ma '
              + "période de stage, à l'issue de ma première "
              + 'année au sein d’EPITECH.',
          )}
        </p>
        <p>
          {t(
            'Par la suite, j’aimerais m’orienter vers le domaine de la '
              + 'sécurité informatique.',
          )}
        </p>
        <a
          className={CV}
          href="/res/cv_Maxime_Farrugia_2018.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>{t('Voir mon CV')}</p>
          <Icon className={Arrow}>arrow_forward</Icon>
        </a>
      </div>
    </div>
  )
}

About.propTypes = {
  className: string,
}

About.defaultProps = {
  className: '',
}

export default About
