import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const Nav = styled.nav`
  display: flex;
  overflow: auto;
  height: 27vw;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
function CommentList(props) {
    const { comments } = props;

    return (
        <Nav>
            <Wrapper>
                {comments?.map((comment, index) => {
                    return <CommentListItem key={comment.email} comment={comment} />
                })}
            </Wrapper>
        </Nav>

    );
}

export default CommentList;