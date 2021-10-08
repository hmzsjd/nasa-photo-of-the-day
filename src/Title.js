import React from 'react'

import styled from 'styled-components';

const StyledHeader  = styled.h1`
  color: darkorange;
  font-family: monospace;
  font-size: 2rem;

`




export default function returnTitle(props) {
    const { title } = props;

    return (
        <StyledHeader>{title.title}</StyledHeader>
    )

}