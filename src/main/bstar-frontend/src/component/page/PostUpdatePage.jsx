import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import TextInput from "../ui/TextInput";
import CommentBox from "../ui/CommentBox";
import { Button } from '@mui/material';
import { CountertopsSharp } from "@mui/icons-material";
import DetailList from "../list/DetailList"
import { Input } from "antd"
import axios from "axios";
import * as resize from "../ui/resize";
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

function PostUpdatePage(props) {

    const [data, setData] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [imageList, setImageList] = useState([]);
    const [contentList, setContentList] = useState([]);
    const [contentChange, setContentChange] = useState("");
    const [contents, setContents] = useState("");

    const {postId} = useParams();
    let formArray = new Array();

    const posturl = "http://localhost:8080/api/posts/"+postId;
    const pictureurl = "http://localhost:8080/api/pictures/"+postId;

    useEffect(() => {
        axios.get(posturl)
            .then((res) => {
                setTitle(res.data.title);
                setContent(res.data.content);
            })
        axios.get(pictureurl)
            .then((res) => {
                setData(res.data);
            })

    }, []);

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
            setContentList([...contentList, newContent]);
        }
    };

    const onChangeContent = (e) => {
        setContentChange(e.target.value);
    }

    function onUpdate() {

        for (let i=0; i<contentList.length; i++) {
            let formData = new Object();
            formData.postId = postId; //postid 넣기
            formData.pictureUrl = i+1;
            formData.pictureContent = contentList[i].content;

            formArray.push(formData);
        }

        let sjson = JSON.stringify(formArray);
        console.log(sjson);

        axios.put(posturl,
            JSON.stringify({
                title: title,
                content: content
            }),
            {
                headers:
                    {"Content-Type": 'application/json'}
            }).then((res) => {
            alert("글을 수정하였습니다");
            console.log(res.data);
            window.location.href = '/main';
        }).catch(error => {
            console.log("실패");
        });
        axios.put(pictureurl,
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

    function onDelete() {
        axios.delete(posturl)
            .then((res) => {
            alert("글을 삭제하였습니다");
            console.log(res.data);
            window.location.href = '/main';
        }).catch(error => {
            console.log("글 삭제에 실패하였습니다.");
        });
        axios.delete(pictureurl)
            .then((res) => {
                console.log(res.data);
            }).catch(error => {
            console.log("글 삭제에 실패하였습니다.");
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
                    <div>
                        {data && data.map(p => {
                            return (
                                <TextArea type="text" value={p.pictureContent} name="contentinput" onChange = {e => handleChange(e)}></TextArea>
                                //<button onClick={() => removeImage(image.id, content.id)}>삭제</button>
                            );
                        })}
                    </div>
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
                                    <TextArea type="text" id={image.id} name="contentinput" onBlur = {e => handleChange(image.id, e)} onChange = {(event) => onChangeContent(event)} autoSize={{ minRows: 3, maxRows: 4}}/>
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
                            "&.MuiButton-root:hover": {
                                color: 'skyblue',
                                borderColor: 'skyblue'
                            }
                        }}
                        onClick={onUpdate}>글 수정하기
                    </Button>

                    <Button
                        type="button"
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
                            "&.MuiButton-root:hover": {
                                color: 'skyblue',
                                borderColor: 'skyblue'
                            }
                        }}
                        onClick={onDelete}>삭제하기</Button>

                </WrapperBtn>
            </Wrapper>
        );
}

export default PostUpdatePage;