import React from "react";
import { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Button from "@mui/material/Button";
import data from "../../data.json";




function ProfileImage(props) {

  const email = "1@gmail.com"; //임시로 설정

  const person = data.find((person) => {
    return person.email === email;
  });

  const profileImage = person.image;


   const [open, setOpen] = useState(false);
   const [inputs, setInputs] = useState([])
    const [Image, setImage] = useState(
     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );



  return (
    <div style={{
      alignItems : "center",
      placeItems : "center",
      display : "grid",
  }}>
      <Avatar
        src={{profileImage}}
        style={{ margin: "0.5vw", width: "15vw", height: "15vw" }}
        onClick={() => {
          setOpen(true);
        }}
      />


      <Dialog open={open}>
        <DialogTitle>Profile Image</DialogTitle>

        <DialogActions>
          <Button variant="outlined"> 크게 보기 </Button>

          
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default ProfileImage;
