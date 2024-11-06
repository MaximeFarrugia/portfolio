import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import projects from './projects'
import LinkFadingArrow from '../../../components/LinkFadingArrow'
import Tag from '../../../components/Tag'
import Section from '../-Section'

interface Props {
  className?: string
}

const SchoolProjects = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Section className={className} name={t('index.school_projects.title')}>
      {projects.map((project) => (
        <SchoolProjectsClass key={project.project}>
          <LinkFadingArrow link={project.link}>
            {project.project}
          </LinkFadingArrow>
          <Description>
            <p>{t(project.desc)}</p>
          </Description>
          <Tags>
            {project.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </Tags>
        </SchoolProjectsClass>
      ))}
    </Section>
  )
}

const SchoolProjectsClass = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Description = styled.div`
  font-size: 14px;
  color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export default SchoolProjects
