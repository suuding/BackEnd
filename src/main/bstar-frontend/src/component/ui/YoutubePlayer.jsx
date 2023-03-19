import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import data from "../../data.json";
import { Grid } from "@mui/material";



//youtube 노래 설정은 setting page가서 설명 읽어보고 프론트에서는 data.json에 music 바꾸면 됩니당.


function YoutubePlayer() {
  const email = "1@gmail.com"; //임시로 설정

  const person = data.find((person) => {
    return person.email === email;
  });

  const VID = person.music;                 //사용자가 설정페이지에서 저장한 music 가져오기

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
    YouTube.playVideo();
  };

  return (
      <div
      >
        <Grid sx={{ margin: "0.5vw", height: "2vw", width: "22vw" }}>
          <div
              style={{
                textAlign: "center",
                alignItems: "center",

                fontSize: "0.9vw",
                width: "70%",
                margin: "0.3vw",
                display: "inline-block",
              }}
          >
            내가 좋아하는 노래 들으려면 클릭 🎵
          </div>

          <YouTube                                              //npm react-youtube 필요. 위에 VID를 videoID에 넣어서 그 영상 틀게해줌
              style={{
                display: "inline-block",
                margin: "0.5vw",
              }}
              videoId={VID}
              opts={{
                width: "13vw",
                height: "13vw",
                playerVars: {
                  loop: 1,    //반복재생
                  muted: 0,   //음소거
                  autoplay: 1, //자동재생
                  rel: 0, //관련 동영상 표시하지 않음
                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
              }}
              onReady={onPlayerReady}
          ></YouTube>

          <div
              style={{
                textAlign: "center",
                alignItems: "center",

                fontSize: "0.9vw",
                width: "10%",
                margin: "0px",
                display: "inline-block",
              }}
          >
            🎵
          </div>

        </Grid>


      </div>
  );
}

//CEEqRLJpTI4
//2g811Eo7K8U

export default YoutubePlayer;
