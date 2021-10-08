import React from 'react'
import Image from './Image';


export default function dateReturn(props) {
    // const { title } = props;

    function dropDownMaker() {
        const dropDown = React.createElement("select");
        const dateItem = React.createElement("option");


        return dropDown;

    }

    return (
        Array.from(dropDownMaker())
    )












}