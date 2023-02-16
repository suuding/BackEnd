import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "./TextInput";
import postdata from "../../postData.json";
import { Box } from '@mui/material'
import { Button } from '@mui/material';
import { Input } from "antd"

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Commentdata = styled.div`   //작성된 댓글 스크롤바 보이지않게 하기
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`


const { TextArea } = Input

function CommentBox(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const postcomment = postdata.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");
    
    return(
        
    <Wrapper>
    <Box>
        <CommentLabel>댓글</CommentLabel>
        <Commentdata>
            <CommentList comments={postcomment.comments}></CommentList>
        </Commentdata>
        
        
        <TextArea 
            value={comment}
            onChange={(event) => {setComment(event.target.value)}}
            autoSize={{minRows: 2, maxRows: 2}}
        />

        <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '8px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {
                    navigate("");
                }}>댓글 작성하기</Button>
    </Box>
    </Wrapper>
);
}

export default CommentBox;


