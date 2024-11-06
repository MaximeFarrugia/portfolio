import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import projects from './projects'
import LinkFadingArrow from '../../../components/LinkFadingArrow'
import Section from '../-Section'

interface Props {
  className?: string
}

const Projects = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Section className={className} name={t('index.projects.title')}>
      {projects.map((project) => (
        <ProjectClass key={project.project}>
          <img src={project.image} alt={project.project} />
          <div>
            <LinkFadingArrow link={project.link}>
              {project.project}
            </LinkFadingArrow>
            <p>{t(project.desc)}</p>
          </div>
        </ProjectClass>
      ))}
    </Section>
  )
}

const ProjectClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > img {
    max-width: calc(100% - 240px);
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 10px 10px
      ${(props) => (props.theme.name === 'dark' ? '#4C566A' : '#D8DEE9')};
  }

  & > div {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    flex: 1;
  }

  & > div > p {
    font-size: 14px;
    margin-bottom: 0;
    color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
    margin: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 30px;

    & > img {
      max-width: 100%;
      margin-bottom: 30px;
    }

    & > div {
      max-width: 100%;
    }
  }
`

export default Projects
