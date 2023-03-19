import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import TextInput from "../ui/TextInput";
import CommentBox from "../ui/CommentBox";
import { Button } from '@mui/material';
import { CountertopsSharp, ReadMoreRounded } from "@mui/icons-material";
import DetailList from "../list/DetailList"
import { Input } from "antd"
import { Button as Button2 } from "antd"
import imageCompression from 'browser-image-compression'
import * as resize from "../ui/resize.js"
import axios from "axios";
import Sidebar from "./Sidebar.jsx";
import Images from "./WriteImage";
import { width } from "@mui/system";

//화면의 중앙에 위치시킴

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  height : flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid skyblue;
  background-color: skyblue;
  display: grid;
`;

const WrapperInside = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const WrapperBtn = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;

`;


const Container = styled.div`
    width: 200vw;
    border: 1px solid black;
    background-color: white;
    max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const { TextArea } = Input

function WritePage(props) {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [imageList, setImageList] = useState([]);
    const [contentList, setContentList] = useState([]);
    const [contentChange, setContentChange] = useState("");
    const [contents, setContents] = useState([]);

    let formArray = new Array();
    let contentArray = new Array();

    const getImageList = (newImageList) => {
        setImageList(newImageList);
    };

    const getContentList = (newContentList) => {
        setContentList(newContentList);
    }

    const uploadFile = async (e) => {
        let fileArr = e.target.files;
        let imageListLength = imageList.length;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length; //최대 10개
        if(imageListLength + filesLength > 10) {
            alert('이미지는 10장을 초과할 수 없습니다.');
            return;
        }


        console.log("arrray: ", contentArray);

        //프리뷰
        for (let i=0; i<filesLength; i++){
            let newImage = await resize.handleResize(fileArr[i]);
            setImageList((imageList) => [...imageList, newImage]);

        }
        e.target.value = '';

        console.log(imageList);
        console.log(contentList);
    };

    const removeImage = (id) => {
        let newList = imageList.filter((image) => image.id !== id);
        alert(id);
        let newContentList = contentList.filter((content) => content.id != id );
        getImageList(newList);
        getContentList(newContentList);
        return;
    };


    const handleChange = (index, e) => {
        if(e.target.name === "contentinput") {

            let newContent = new Object();
            newContent.id=index;
            newContent.content=contentChange;
            console.log(newContent); //{id: , content: }
            setContentList([newContent, ...contentList]);
        }
    };


    const onChangeContent = (index, e) => {
        setContentChange(e.target.value);
        let newContentList = contentList.filter((content) => content.id != index );
        getContentList(newContentList);
    }

    function onWrite() {

        console.log(imageList);
        console.log(contentList);

        for (let i=0; i<contentList.length; i++) {
            let formData = new Object();
            formData.postId = 1; //postid 넣기
            formData.pictureUrl = i+1;
            /*  if (i==contentList.length-1)
                  formData.pictureContent = contents;
              else*/
            formData.pictureContent = contentList[i];

            formArray.push(formData);
        }

        let sjson = JSON.stringify(formArray);
        console.log(sjson);

        axios.post('/api/posts',
            JSON.stringify({
                title: title,
                content: content,
            }),
            {
                headers:
                    {"Content-Type": 'application/json'}
            }).then((res) => {
            alert("글을 등록하였습니다");
            console.log(res.data);
            window.location.href = '/main';
        }).catch(error => {
            console.log("실패");
        });
        axios.post('/api/pictures',
            sjson,
            {
                headers:
                    {"Content-Type": 'application/json'}
            }).then((res) => {
            console.log(res.data);
        }).catch(error => {
            console.log("실패");
        });
    }

    return (
        <Wrapper>
            <Sidebar/>
            <Container
                style={{
                    padding: "2vw",
                    alignItems: "center",
                    placeItems: "center",
                    display: "grid",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        color: "skyblue",
                        textAlign: "center",
                    }}
                >
                    Title
                </h1>
                <TextArea
                    style={{
                        width: "70%",
                    }}
                    type="text" value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    autoSize={{minRows: 1, maxRows: 1}}/>

                <input
                    type="file"
                    id="upload-file"
                    accept="image/*"
                    multiple
                    onChange={uploadFile}/>

                { imageList.map((image) => {
                    return(
                        <div key={image.id}
                             style = {{border : "1px solid skyblue", padding : "1px 1px 10px 1px", width : "90%"}}>
                            <WrapperInside>
                                <img alt={image.id} src={image.url} style = {{width : "50%", padding : "0.5vw 0.5vw 0vw 0.5vw"}}/>
                                <TextArea type="text" id={image.id} name="contentinput" onBlur={(event) => handleChange(image.id, event) }onChange = {(event) => onChangeContent(image.id, event)} autoSize={{ minRows: 10, maxRows: 10}}style = {{width : "50%", padding : "0.5vw 0.5vw 0vw 0.5vw"}}/>
                            </WrapperInside>
                            <Button2 onClick={() => removeImage(image.id, content.id)}>삭제</Button2>
                        </div>
                    );
                })}
            </Container>

            <Container
                style={{
                    padding: "2vw",
                    alignItems: "center",
                    placeItems: "center",
                    display: "grid",
                    textAlign: "center",
                }}
            ></Container>

            <WrapperBtn>
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ //css 적용
                        mt: 3,
                        pr: 11,
                        pl: 11,
                        color: 'white',
                        border: '1px solid skyblue',
                        borderRadius: '10px',
                        backgroundColor: 'skyblue',
                        // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                        // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                        "&.MuiButton-root:hover":{
                            color: 'skyblue',
                            borderColor: 'skyblue'
                        }
                    }}
                    onClick={onWrite}>글 올리기</Button>
            </WrapperBtn>
        </Wrapper>

    );
}

export default WritePage;
