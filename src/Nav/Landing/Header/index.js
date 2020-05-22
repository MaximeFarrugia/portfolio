import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation, Trans } from 'react-i18next'

import {
  Wrapper,
  ThemeSwitchClass,
  Dark,
  Light,
  WaveClass,
  Contact,
  Underlined,
} from './Header.module.css'

import ThemeSwitch from '../../../Common/Components/ThemeSwitch'
import classNames from '../../../Common/Helpers/classNames'
import { ReactComponent as Wave } from './wave.svg'
import { ReactComponent as RightPointer } from './rightPointer.svg'
import { Context } from '../../../App'

const Header = ({ className }) => {
  const { darkTheme } = useContext(Context)
  const { t } = useTranslation()

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
      <ThemeSwitch className={ThemeSwitchClass} />
      <div>
        <p>{t('Bonjour !')}</p>
        <Wave className={WaveClass} />
      </div>
      <p>
        <Trans>
          Je suis
          <strong> Maxime Farrugia</strong>
          , développeur web et étudiant en informatique.
        </Trans>
      </p>
      <div className={Contact}>
        <div>
          <p>{t('Me contacter')}</p>
          <RightPointer />
        </div>
        <a
          href="mailto:farrugia.maxime@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className={Underlined}
        >
          farrugia.maxime@gmail.com
        </a>
      </div>
    </div>
  )
}

Header.propTypes = {
  className: string,
}

Header.defaultProps = {
  className: '',
}

export default Header
