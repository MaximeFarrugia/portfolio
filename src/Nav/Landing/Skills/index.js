import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import { translate as t } from '../../../Common/Helpers/i18n'

const Skills = ({ className }) => (
  <Wrapper className={className}>
    <Left>
      <p>{t('Compétences')}</p>
    </Left>
    <Right>
      <Table>
        <thead>
          <tr>
            <td>{t('Langages')}</td>
            <td>Frameworks</td>
            <td>{t('Outils')}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Javascript</td>
            <td>React</td>
            <td>Bash</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>GraphQL</td>
            <td>Git & Github</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Prisma</td>
            <td>Chrome DevTools</td>
          </tr>
          <tr>
            <td>C / C++</td>
            <td>Node</td>
            <td>Postman</td>
          </tr>
        </tbody>
      </Table>
    </Right>
  </Wrapper>
)

Skills.propTypes = {
  className: string,
}

Skills.defaultProps = {
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
  padding-top: 14px;

  @media (max-width: 1200px) {
    max-width: 600px;
    margin-left: auto;
  }
`

const Table = styled.table`
  width: inherit;

  & td {
    padding: 0;
  }

  & > thead td {
    text-transform: uppercase;
    font-weight: 700;
  }

  & > tbody td {
    font-size: 14px;
    color: ${props => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
  }

  @media (max-width: 640px) {
    &,
    & td,
    & tr {
      display: block;
      text-align: left;
    }

    & td {
      margin-left: 40px;
      list-style: square;
      display: list-item;
      padding-left: 0;
    }

    & thead {
      display: none;
    }
  }
`

export default Skills
