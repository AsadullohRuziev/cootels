import React from 'react'
import styled from 'styled-components'

const Heading = ({title}) => {
  return (
    <H1>{title}</H1>
  )
}

export default Heading



const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
