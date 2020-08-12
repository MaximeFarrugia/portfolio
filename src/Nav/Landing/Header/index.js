import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation, Trans } from 'react-i18next'

import {
  Wrapper,
  Dark,
  Light,
  Selectors,
  LangSelectClass,
  ThemeSwitchClass,
  WaveClass,
  Contact,
  Underlined,
} from './Header.module.css'

import LangSelect from '../../../Common/Components/LangSelect'
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
      <div className={Selectors}>
        <LangSelect className={LangSelectClass} />
        <ThemeSwitch className={ThemeSwitchClass} />
      </div>
      <div>
        <p>{t('Bonjour !')}</p>
        <Wave className={WaveClass} />
      </div>
      <p>
        <Trans>
          Je suis
          <strong> Maxime Farrugia</strong>
          , développeur freelance et étudiant en informatique.
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
