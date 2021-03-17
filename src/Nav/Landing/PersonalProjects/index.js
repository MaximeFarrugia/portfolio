import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useInView } from 'react-intersection-observer'

import {
  Wrapper,
  Visible,
  Dark,
  Light,
  Left,
  Right,
  PersonalProjectsClass,
  Description,
  Tags,
  TagClass,
} from './PersonalProjects.module.css'

import { translate as t } from '../../../Common/Helpers/i18n'
import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'
import Tag from '../../../Common/Components/Tag'

const PersonalProjects = ({ className }) => {
  const { darkTheme } = useContext(Context)
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
        <p>{t('Projets personnels')}</p>
      </div>
      <div className={Right}>
        {projects.map((project) => (
          <div className={PersonalProjectsClass} key={project.project}>
            <LinkFadingArrow link={project.link || '#'}>
              {project.project}
            </LinkFadingArrow>
            <div className={Description}>
              <p>{t(project.desc)}</p>
            </div>
            <div className={Tags}>
              {project.tags.map((tag) => (
                <Tag key={tag} className={TagClass} name={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

PersonalProjects.propTypes = {
  className: string,
}

PersonalProjects.defaultProps = {
  className: '',
}

export default PersonalProjects
