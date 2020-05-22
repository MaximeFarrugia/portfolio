import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
  Wrapper,
  Dark,
  Light,
  Left,
  Right,
  ProjectClass,
} from './Projects.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import projects from './projects'

const Projects = ({ className }) => {
  const { darkTheme } = useContext(Context)
  const { t } = useTranslation()

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
      <div className={Left}>
        <p>{t('Projets réalisés')}</p>
      </div>
      <div className={Right}>
        {projects.map((project) => (
          <div className={ProjectClass} key={project.project}>
            <img src={project.image} alt={project.name} />
            <div>
              <a
                href={project.link || '#'}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.project}
              </a>
              <p>{t(project.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Projects.propTypes = {
  className: string,
}

Projects.defaultProps = {
  className: '',
}

export default Projects
