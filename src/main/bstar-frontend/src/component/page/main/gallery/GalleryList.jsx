import React from "react";
import styled from 'styled-components';

const Dot = styled.div`
    height: 10px;
    width: 10px;
    padding: 0;
    margin: 0.5px;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    display: inline-block;
    border: 1px solid #ccc;
    background-color: ${prop => prop.active ? '#fff' : 'transparent'};
    &: hover {
        color: #000! important;
        background-color: #fff;
    }
`;


const GalleryList=() => {

    //const {image, title} = currItem;

    return (
        <div>
            {/*<p>list</p>*/}
            <Dot></Dot>
        </div>
    );

};

export default GalleryList;