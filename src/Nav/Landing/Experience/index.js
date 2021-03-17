import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import { translate as t } from '../../../Common/Helpers/i18n'
import experiences from './experiences'
import LinkFadingArrow from '../../../Common/Components/LinkFadingArrow'

const Experience = ({ className }) => (
  <Wrapper className={className}>
    <Left>
      <p>{t('Expérience')}</p>
    </Left>
    <Right>
      {experiences.map(exp => (
        <ExperienceClass key={exp.company}>
          <Column>
            <LinkFadingArrow link={exp.link || '#'}>
              {exp.company}
            </LinkFadingArrow>
            <p>{t(exp.job)}</p>
          </Column>
          <Dates>
            {exp.dates.map(date => (
              <p
                key={`${exp.company}-${date.start}-${date.yearStart}-${date.end}-${date.yearEnd}`}
              >
                {t(date.start)}
                {date.yearStart !== date.yearEnd && ` ${date.yearStart} `}
                {' - '}
                {t(date.end)}
                {date.yearEnd && ` ${date.yearEnd}`}
              </p>
            ))}
          </Dates>
        </ExperienceClass>
      ))}
    </Right>
  </Wrapper>
)

Experience.propTypes = {
  className: string,
}

Experience.defaultProps = {
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

const ExperienceClass = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  & > p {
    margin: 0;
    color: ${props => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
  }
`

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  font-size: 14px;
  color: ${props => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
  align-items: flex-end;

  & > p {
    margin: 0;
  }
`

export default Experience
