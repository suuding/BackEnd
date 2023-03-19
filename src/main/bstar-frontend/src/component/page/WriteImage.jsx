import React, { useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";




const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const { TextArea } = Input

const Images = ({ imageList, getImageList, contentList, setContentList}) => {
    const removeImage = (id) => {
        let newList = imageList.filter((image) => image.id !== id);
        getImageList(newList);
        return;
    };

    const handleChange = (e) => {
        const list = [...contentList];
        list[e.target.id] = e.target.value;
        setContentList(list);
    };

    return imageList.map((image, index) => {
        return(
            <div key={image.id}
                 style = {{border : "1px solid skyblue", padding : "1px 1px 10px 1px", width : "90%"}}>
                <Wrapper>
                    <img alt={image.id} src={image.url} style = {{width : "50%", padding : "0.5vw 0.5vw 0vw 0.5vw"}}/>
                    <TextArea type="text" id={image.id} onChange = {e => handleChange(e)} autoSize={{ minRows: 10, maxRows: 10}}style = {{width : "50%", padding : "0.5vw 0.5vw 0vw 0.5vw"}}/>

                </Wrapper>
                <Button onClick={() => removeImage(image.id)}>삭제</Button>
            </div>
        );
    });


}

export default Images;