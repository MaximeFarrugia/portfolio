import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import { translate as t } from '../../../Common/Helpers/i18n'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'

const Projects = ({ className }) => (
  <Wrapper className={className}>
    <Left>
      <p>{t('Projets réalisés')}</p>
    </Left>
    <Right>
      {projects.map(project => (
        <ProjectClass key={project.project}>
          <img src={project.image} alt={project.name} />
          <div>
            <LinkFadingArrow link={project.link || '#'}>
              {project.project}
            </LinkFadingArrow>
            <p>{t(project.desc)}</p>
          </div>
        </ProjectClass>
      ))}
    </Right>
  </Wrapper>
)

Projects.propTypes = {
  className: string,
}

Projects.defaultProps = {
  className: '',
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: ${props => props.theme.primary};

  & a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    padding: 100px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 500px) {
    padding: 50px;
  }
`

const Left = styled.div`
  text-transform: uppercase;
  text-align: right;
  font-weight: 700;
  color: ${props => props.theme.secondary};
`

const Right = styled.div`
  max-width: 700px;
  width: 100%;
  margin-left: 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 600px;
    margin-left: auto;
  }
`

const ProjectClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;

  & > img {
    max-width: calc(100% - 240px);
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 10px 10px
      ${props => (props.theme.name === 'dark' ? '#4C566A' : '#D8DEE9')};
  }

  & > div {
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }

  & > div > p {
    font-size: 14px;
    margin-bottom: 0;
    color: ${props => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
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
