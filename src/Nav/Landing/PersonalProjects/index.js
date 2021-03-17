import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import { translate as t } from '../../../Common/Helpers/i18n'
import projects from './projects'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'
import TagComponent from '../../../Common/Components/Tag'

const PersonalProjects = ({ className }) => (
  <Wrapper className={className}>
    <Left>
      <p>{t('Projets personnels')}</p>
    </Left>
    <Right>
      {projects.map(project => (
        <PersonalProjectsClass key={project.project}>
          <LinkFadingArrow link={project.link || '#'}>
            {project.project}
          </LinkFadingArrow>
          <Description>
            <p>{t(project.desc)}</p>
          </Description>
          <Tags>
            {project.tags.map(tag => (
              <Tag key={tag} name={tag} />
            ))}
          </Tags>
        </PersonalProjectsClass>
      ))}
    </Right>
  </Wrapper>
)

PersonalProjects.propTypes = {
  className: string,
}

PersonalProjects.defaultProps = {
  className: '',
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: ${props => props.theme.primary};

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

const PersonalProjectsClass = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

const Description = styled.div`
  font-size: 14px;
  color: ${props => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};

  & > p {
    margin: 20px 0;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled(TagComponent)`
  margin-bottom: 20px;
  margin-right: 7px;
`

export default PersonalProjects
