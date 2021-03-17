import React, { useContext } from 'react'
import { string } from 'prop-types'

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

import { translate as t } from '../../../Common/Helpers/i18n'
import LangSelect from '../../../Common/Components/LangSelect'
import ThemeSwitch from '../../../Common/Components/ThemeSwitch'
import classNames from '../../../Common/Helpers/classNames'
import { ReactComponent as Wave } from './wave.svg'
import { ReactComponent as RightPointer } from './rightPointer.svg'
import { Context } from '../../../App'

const Header = ({ className }) => {
  const { darkTheme } = useContext(Context)

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
        {t(
          'Je suis **Maxime Farrugia**, développeur freelance et étudiant en informatique.',
          null,
          { md: true },
        )}
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
