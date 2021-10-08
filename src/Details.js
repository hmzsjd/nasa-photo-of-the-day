import React from 'react'

import styled from 'styled-components';


const StyledDivDetail = styled.div`
  color: darkorange;
  font-family: monospace;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 75%;

  #desc {
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.5rem;
  }

  #details {
    font-size: 1rem;

  }

  #date {
    font-size: 1.5rem;
  }
  

`


export default function returnDetails(props) {
    const { details } = props;

    return (
      <StyledDivDetail>
      <h3>Author: {details.copyright}</h3>
      <p id="date">Date: {details.date}</p>
      <p id="desc">Description</p>
      <p id="details">{details.explanation}</p>
         
      </StyledDivDetail>
    

    
    )
    
}