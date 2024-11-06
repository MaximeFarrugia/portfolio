import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import skills from './skills'
import Section from '../-Section'

interface Props {
  className?: string
}

const Skills = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <Section className={className} name={t('index.skills.title')}>
      <Row>
        {Object.entries(skills).map(([key, value]) => (
          <Column key={key}>
            <Category>{t(`index.skills.header.${key}`)}</Category>
            {value.map((skill) => (
              <Skill key={`${key}-${skill}`}>{skill}</Skill>
            ))}
          </Column>
        ))}
      </Row>
    </Section>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Category = styled.span`
  text-transform: uppercase;
  font-weight: 700;
`

const Skill = styled.span`
  font-size: 14px;
  color: ${(props) => (props.theme.name === 'dark' ? '#afafbf' : '#444452')};
`

export default Skills
