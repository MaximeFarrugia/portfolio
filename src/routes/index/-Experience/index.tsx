import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import experiences from './experiences'
import LinkFadingArrow from '../../../components/LinkFadingArrow'
import Section from '../-Section'

interface Props {
  className?: string
}

const Experience = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Section className={className} name={t('index.exp.title')}>
      {experiences.map((exp) => (
        <ExperienceClass key={exp.company}>
          <Column>
            <LinkFadingArrow link={exp.link}>{exp.company}</LinkFadingArrow>
            <p>{t(exp.job)}</p>
          </Column>
          <Dates>
            {exp.dates.map((date) => (
              <p
                key={`${exp.company}-${t(date.start)}-${date.yearStart}-${t(date.end)}-${date.yearEnd}`}
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
    </Section>
  )
}

const ExperienceClass = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  & > p {
    margin: 0;
    color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
  }
`

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  font-size: 14px;
  color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
  align-items: flex-end;

  & > p {
    margin: 0;
  }
`

export default Experience
