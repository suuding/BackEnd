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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Commentdata = styled.div`   //작성된 댓글 스크롤바 보이지않게 하기
    padding: 1px;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`
const ContentText = styled.p`
    font-size: 14px;
`;

const { TextArea } = Input

function CommentBox(props) {
    const { Id, data } = props;

    const navigate = useNavigate();

    const postcomment = data.find((item) => {  //postid에 대응하는 코멘트 id 찾기
        return item.post_id === Id;
    });

    console.log(props);

    const [comment, setComment] = useState("");

    return(

        <Wrapper>
            <Box>
                <CommentLabel>댓글</CommentLabel>
                <Commentdata>
                    <CommentList comments={postcomment.comments}></CommentList>
                </Commentdata>

                <ContentText>
                    <TextArea
                        value={comment}
                        onChange={(event) => {setComment(event.target.value)}}
                        autoSize={{minRows: 1, maxRows: 4}}
                    />
                </ContentText>

                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ //css 적용
                        mt: 3,
                        pr: 2,
                        pl: 2,
                        color: 'white',
                        border: '1px solid skyblue',
                        borderRadius: '8px',
                        backgroundColor: 'skyblue',
                        float: 'right',
                        // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                        // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                        "&.MuiButton-root:hover":{
                            color: 'skyblue',
                            borderColor: 'skyblue'
                        }
                    }}
                    onClick={() => {
                        navigate("");
                    }}>작성</Button>

            </Box>
        </Wrapper>
    );
}

export default CommentBox;