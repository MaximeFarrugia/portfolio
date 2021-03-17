import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const Tag = ({ className, name }) => (
  <Wrapper className={className}>{name}</Wrapper>
)

Tag.propTypes = {
  className: string,
  name: string.isRequired,
}

Tag.defaultProps = {
  className: '',
}

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
