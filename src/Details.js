import React from 'react'


export default function returnDetails(props) {
    const { details } = props;

    return (
      <div className='detailsContainer'>
      <h3>Author: {details.copyright}</h3>
      <p>Date: {details.date}</p>
      <h4>Description</h4>
      <p>{details.explanation}</p>
         
       
    
      
    {/* <button onClick={close}>Close</button> */}
    </div>
    )
    
}