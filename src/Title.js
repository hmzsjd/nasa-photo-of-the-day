import React from 'react'


export default function returnTitle(props) {
    const { title } = props;

    return (
        <h2>{title.title}</h2>
    )

}