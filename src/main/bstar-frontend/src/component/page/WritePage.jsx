import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import TextInput from "../ui/TextInput";
import CommentBox from "../ui/CommentBox";
import { Button } from '@mui/material';
import { CountertopsSharp, ReadMoreRounded } from "@mui/icons-material";
import DetailList from "../list/DetailList"
import { Input } from "antd"
import imageCompression from 'browser-image-compression'
import * as resize from "../ui/resize.js"
import axios from "axios";
import Sidebar from "./Sidebar";


//화면의 중앙에 위치시킴
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
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
`;


const Container = styled.div`
  width: 100%;
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
    const [contentList, SetContentList] = useState([]);
    const [contents, setContents] = useState("");

    const getImageList = (newImageList) => {
        setImageList(newImageList);
    };

    const uploadFile = async (e) => {
        let fileArr = e.target.files;
        let imageListLength = imageList.length;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length; //최대 10개
        if(imageListLength + filesLength > 10) {
            alert('이미지는 10장을 초과할 수 없습니다.');
            return;
        }

        //프리뷰
        for (let i=0; i<filesLength; i++){
            let newImage = await resize.handleResize(fileArr[i]);
            setImageList((imageList) => [...imageList, newImage]);
        }
        e.target.value = '';

        SetContentList([...contentList, contents]);

        setContents("");
    };

    const removeImage = (id) => {
        let newList = imageList.filter((image) => image.id !== id);
        getImageList(newList);
        return;
    };

    const handleChange = (e) => {
        setContents(e.target.value);
    };


    const onAddWrite = () => {
    }

    let formArray = new Array();
    function onWrite() {
        //console.log(contents); //contents 에는 마지막 말이 잘 들어감
        //SetContentList([...contentList, contents]); //왜인지는 모르겠지만 contents가 안들어감..
        console.log(imageList);
        console.log(contentList);

        for (let i=0; i<contentList.length; i++) {
            let formData = new Object();
            formData.postId = 1; //postid 넣기
            formData.pictureUrl = i+1;
            if (i==contentList.length-1)
                formData.pictureContent = contents;
            else
                formData.pictureContent = contentList[i+1];

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
            <Container>
                <TextArea
                    type="text" value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    autoSize={{minRows: 1, maxRows: 1}}/>
                <TextArea
                    type="text" value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                    autoSize={{minRows: 3, maxRows: 3}}/>

                <input
                    type="file"
                    id="upload-file"
                    accept="image/*"
                    multiple
                    onChange={uploadFile}/>
                { imageList.map((image, index) => {
                    return(
                        <div key={image.id}>
                            <Wrapper>
                                <img alt={image.id} src={image.url}/>
                                <TextArea type="text" id={image.id} onChange = {e => handleChange(e)} autoSize={{ minRows: 3, maxRows: 4}}/>
                                <button onClick={() => removeImage(image.id)}>삭제</button>
                            </Wrapper>
                        </div>
                    );
                })}
            </Container>


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