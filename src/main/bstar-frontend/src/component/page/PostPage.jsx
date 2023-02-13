import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import CommentBox from "../ui/CommentBox";
import { Button } from '@mui/material';
import { CountertopsSharp } from "@mui/icons-material";
import DetailList from "../list/DetailList"
import { Input } from "antd"
import axios from "axios";
import { useParams } from 'react-router-dom';

//화면의 중앙에 위치시킴
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
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

const CreateListDiv = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const { TextArea } = Input

function PostPage(props) {

    const navigate = useNavigate();

    const {postId} = useParams();
    const url = "http://localhost:8080/posts/"+postId;


    const [data, setData] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
            })
    }, []);

    if (data) {
        return (
            <Wrapper>
                <Container>
                    <label for="title">제목</label>
                    <h1
                        value={title} id="title"
                        autoSize={{minRows: 1, maxRows: 1}}>
                        {title}
                    </h1>
                    <label For="content">내용</label>
                    <p
                        value={content} id="content"
                        autoSize={{minRows: 1, maxRows: 1}}>
                        {content}
                    </p>

                    <Button
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
                        onClick={() => {
                            navigate("/posts/update/"+postId);
                        }}>글 수정
                    </Button>

                    <CommentBox></CommentBox>

                </Container>
            </Wrapper>
        );
    }

}

export default PostPage;