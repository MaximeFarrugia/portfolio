import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

interface Props {
  className?: string
  name: string
}

const Section = ({ className, name, children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper className={className}>
      <Left>
        <p>{name}</p>
      </Left>
      <Right>{children}</Right>
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: ${(props) => props.theme.primary};

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
  color: ${(props) => props.theme.secondary};
`

const Right = styled.div`
  max-width: 700px;
  width: 100%;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1200px) {
    max-width: 600px;
    margin-left: auto;
  }
`
