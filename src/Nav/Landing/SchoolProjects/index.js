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
  SchoolProjectsClass,
  Description,
  Tags,
  TagClass,
} from './SchoolProjects.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'
import Tag from '../../../Common/Components/Tag'

const SchoolProjects = ({ className }) => {
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
        <p>{t("Projets d'école")}</p>
      </div>
      <div className={Right}>
        {projects.map((project) => (
          <div className={SchoolProjectsClass} key={project.project}>
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

SchoolProjects.propTypes = {
  className: string,
}

SchoolProjects.defaultProps = {
  className: '',
}

export default SchoolProjects
