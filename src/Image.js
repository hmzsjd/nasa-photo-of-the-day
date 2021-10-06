import React from 'react'


export default function returnImage(props) {
    const { image } = props;

    return (
        <img src={image.url} alt="nasa of the day"></img>
    )

}