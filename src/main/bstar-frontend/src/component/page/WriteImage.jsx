import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const { TextArea } = Input

const Images = ({ imageList, getImageList, contentList, SetContentList}) => {

    const removeImage = (id) => {
        let newList = imageList.filter((image) => image.id !== id);
        getImageList(newList);
        return;
    };

    const handleChange = (e) => {
        const list = [...contentList];
        list[e.target.id] = e.target.value;
        SetContentList(list);
        console.log(contentList);
    };

    return imageList.map((image, index) => {
        return(
            <div key={image.id}>
                <Wrapper>
                    <img alt={image.id} src={image.url}/>
                    <TextArea type="text" id={image.id} onChange = {e => handleChange(e)} autoSize={{ minRows: 3, maxRows: 4}}/>
                    <button onClick={() => removeImage(image.id)}>삭제</button>
                </Wrapper>
            </div>
        );
    });

}

export default Images;