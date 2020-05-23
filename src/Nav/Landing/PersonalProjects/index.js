import React, { useContext } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
  Wrapper,
  Dark,
  Light,
  Left,
  Right,
  PersonalProjectsClass,
  Description,
  Tags,
  TagClass,
} from './PersonalProjects.module.css'

import classNames from '../../../Common/Helpers/classNames'
import { Context } from '../../../App'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'
import Tag from '../../../Common/Components/Tag'

const PersonalProjects = ({ className }) => {
  const { darkTheme } = useContext(Context)
  const { t } = useTranslation()

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
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
