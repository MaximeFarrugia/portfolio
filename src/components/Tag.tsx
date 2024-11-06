import styled from '@emotion/styled'

interface Props {
  className?: string
  name: string
}

const Tag = ({ className, name }: Props) => (
  <Wrapper className={className}>{name}</Wrapper>
)

const Wrapper = styled.div`
  font-size: 14px;
  border: 1px solid;
  border-radius: 5px;
  width: fit-content;
  padding: 2px 10px;
  color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};
`

export default Tag
