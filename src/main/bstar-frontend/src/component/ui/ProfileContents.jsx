import React, { useState } from "react";

import { styled } from "@mui/material/styles";

import data from "../../data.json";
import { textAlign } from "@mui/system";

function ProfileContents(props) {
  const email = "1@gmail.com"; //임시로 설정

  const person = data.find((person) => {
    return person.email === email;
  });

  const [inputs, setInputs] = useState({
    blogName: person.blogName,
    nickName: person.nickName,
    introduction: person.introduction,
    image: person.image,
    music: person.music,
    friends: person.friends,
  });

  return (
    <div style={{
        alignItems : "center",
        placeItems : "center",
        display : "grid",
    }}>
      <div
        style={{
          textAlign: "center",
          fontSize : "2vw",
          margin : "0.5vw",
          border:"1px solid skyblue",
        }}
      >
        {inputs.nickName}
      </div>

      <div
        style={{
            alignItems : "center",
          textAlign: "center",
          justifyContent : "center",
          display : "flex",
          fontSize : "1vw",
          margin : "0.5vw",
          width:"80%",
          height:"8vw",
          border:"1px solid skyblue",
        }}
      >
        {inputs.introduction}
      </div>
    </div>
  );
}

export default ProfileContents;
