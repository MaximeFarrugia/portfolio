import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import projects from './projects'
import LinkFadingArrow from '../../../components/LinkFadingArrow'
import Tag from '../../../components/Tag'
import GitHub from '../../../icons/GitHub'
import Section from '../-Section'

interface Props {
  className?: string
}

const PersonalProjects = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Section className={className} name={t('index.personal_projects.title')}>
      {projects.map((project) => (
        <PersonalProjectsClass key={project.project}>
          <LinkFadingArrow link={project.link}>
            {project.project}
          </LinkFadingArrow>
          <Description>
            <p>{t(project.desc)}</p>
          </Description>
          {!!project.github && (
            <ViewCode
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
              <span>{t('index.personal_projects.view_code')}</span>
            </ViewCode>
          )}
          <Tags>
            {project.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </Tags>
        </PersonalProjectsClass>
      ))}
    </Section>
  )
}

const PersonalProjectsClass = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Description = styled.div`
  font-size: 14px;
  color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
`

const ViewCode = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  & > svg {
    color: inherit;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export default PersonalProjects
