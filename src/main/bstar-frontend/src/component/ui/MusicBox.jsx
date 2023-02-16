import React, { useState } from "react";
// import "./music/004 아이유 - 너의 의미 (Feat. 김창완).mp3";
// import "../ui/music/004 아이유 - 너의 의미 (Feat. 김창완).mp3"

import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
import { keyframes } from "styled-components";
import music1 from "./music/G-Dragon - R.O.D. (feat. Lydia Paek).mp3";
import music3 from "./music/004 아이유 - 너의 의미 (Feat. 김창완).mp3";
import { Grid } from "@mui/material";
import { Box } from '@mui/material';

const WhatMusic = styled.div`
  text-align: center;
  font-size: 1vw;
  width: 30%;
  margin: 0px;
  display: inline-block;
`;

const Select = styled.select`
  display: inline-block;
  font-size: 15px;
  width: 60%;
  margin: 3px;
`;

const MUSICS = [
  {
    path: "",
    name: "",
  },
  {
    path: music1,
    name: "G-Dragon  -  R.O.D (feat. Lydia Paek)",
  },
  {
    path: music3,
    name: "아이유  -  너의 의미 (Feat. 김창완)",
  }
];

const Container = styled.div`
  margin: 100px 0 0 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const FlowBox = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const FlowWrap = styled.div`
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`;

const Flow = styled.div`
  font-size: clamp(15px, 10vw, 8rem);
  animation: ${flowing} 8s linear infinite;
  span {
    display: inline-block;
    font-weight: 600;
    padding: 0 20px;
  }
`;

function MusicBox(props) {
  const [musics, setMusic] = useState("");
  const handleMusic = (e) => {
    setMusic(e.currentTarget.value);
  };

  return (
    <div  style={{
      border:"1px solid skyblue",
      margin:"0.5vw",
    }}
    >
   
         <Grid sx = {{margin: "1vw", height: "2vw", width: "22vw"}}>
        
        <WhatMusic>now playing - </WhatMusic>

        <Select onChange={handleMusic} value={musics}>
          {MUSICS.map((option, index) => (
            <option key={index} value={option.path}>
              <span>♬ {option.name}</span>
            </option>
          ))}
        </Select>
      </Grid >
      <Grid sx = {{margin: "0.5vw", height: "2vw", width: "22vw"}}>
        
         <ReactAudioPlayer
        src={musics}
        type="audio/mp3"
        volume={0.1}
        autoPlay
        controls
        style={{ margin: "0 1vw", height: "2vw", width: "20vw" }}
      ></ReactAudioPlayer> 
 
 </Grid >
      

    </div>
  );
}

export default MusicBox;
