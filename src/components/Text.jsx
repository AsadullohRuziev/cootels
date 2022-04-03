import React from 'react'
import styled from 'styled-components'

const Text = ({title}) => {
  return (
    <P>{title}</P>
  )
}

export default Text


const P = styled.p`
color: #848FAC;
font-weight: 400;
font-size: 18px;
line-height: 150%;
width: 485px;
height: 81px;
font-family: 'Inter';
margin-top: -24px;
position: relative;
`