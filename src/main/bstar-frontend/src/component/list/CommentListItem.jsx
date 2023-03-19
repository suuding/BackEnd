import React from "react";
import styled from "styled-components";
import data from "../../data.json";

const Wrapper = styled.div`
    width: 27vw;
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }

`;

const ProfileId = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ContentText = styled.p`
    font-size: 0.8vw;
`;





function CommentListItem(props) {
    const { comment } = props;

    const person = data.find((person) => {
        return person.email === comment.email;
    });

    return (
        <div>
            <ProfileId>
                <img src={person.image}
                     style={{ margin: "0.05vw", width: "1vw", height: "1vw" }}
                ></img>
                <div> { comment.email } </div>
            </ProfileId>

            <Wrapper>
                <ContentText>{ comment.content }</ContentText>
            </Wrapper>
        </div>

    );
}

export default CommentListItem;