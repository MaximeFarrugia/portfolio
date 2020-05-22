import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
  Wrapper,
  Dark,
  Light,
  Left,
  Right,
} from './Skills.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'

const Skills = ({ className }) => {
  const { darkTheme } = useContext(Context)
  const { t } = useTranslation()

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
      <div className={Left}>
        <p>{t('Compétences')}</p>
      </div>
      <div className={Right}>
        <table>
          <thead>
            <tr>
              <td>{t('Langages')}</td>
              <td>Frameworks</td>
              <td>{t('Outils')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javascript (ES6+)</td>
              <td>React</td>
              <td>Bash</td>
            </tr>
            <tr>
              <td>HTML</td>
              <td>GraphQL</td>
              <td>Git & Github</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Prisma</td>
              <td>Chrome DevTools</td>
            </tr>
            <tr>
              <td>C / C++</td>
              <td>Node</td>
              <td>Postman</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Skills.propTypes = {
  className: string,
}

Skills.defaultProps = {
  className: '',
}

export default Skills
