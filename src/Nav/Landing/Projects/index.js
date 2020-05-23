import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import {
  Wrapper,
  Visible,
  Dark,
  Light,
  Left,
  Right,
  ProjectClass,
} from './Projects.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'

const Projects = ({ className }) => {
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
        <p>{t('Projets réalisés')}</p>
      </div>
      <div className={Right}>
        {projects.map((project) => (
          <div className={ProjectClass} key={project.project}>
            <img src={project.image} alt={project.name} />
            <div>
              <LinkFadingArrow link={project.link || '#'}>
                {project.project}
              </LinkFadingArrow>
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
