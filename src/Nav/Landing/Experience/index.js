import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import Icon from '@material-ui/core/Icon'
import { useInView } from 'react-intersection-observer'

import {
  Wrapper,
  Visible,
  Dark,
  Light,
  Left,
  Right,
  ExperienceClass,
  CV,
  Arrow,
} from './Experience.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import experiences from './experiences'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'

const Experience = ({ className }) => {
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
        <p>{t('Expérience')}</p>
      </div>
      <div className={Right}>
        {experiences.map((exp) => (
          <div className={ExperienceClass} key={exp.company}>
            <div>
              <LinkFadingArrow link={exp.link || '#'}>
                {exp.company}
              </LinkFadingArrow>
              <p>
                {t(exp.start)}
                {exp.yearStart !== exp.yearEnd && ` ${exp.yearStart} `}
                {' - '}
                {t(exp.end)}
                {exp.yearEnd && ` ${exp.yearEnd}`}
              </p>
            </div>
            <div>
              <p>{t(exp.job)}</p>
            </div>
          </div>
        ))}
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

Experience.propTypes = {
  className: string,
}

Experience.defaultProps = {
  className: '',
}

export default Experience
