import React from "react";
import { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    width: "31vw",
    height: "31vw",
};


function ProfileImage(props) {
    const navigate = useNavigate();


    const email = "1@gmail.com"; //임시로 설정

    const person = data.find((person) => {
        return person.email === email;
    });

    const profileImage = person.image;


    const [open, setOpen] = useState(false);
    const [mopen, setMOpen] = useState(false);
    const [inputs, setInputs] = useState([])
    const [Image, setImage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
    const handleClose = () => {
        setMOpen(false);
    };


    return (
        <div style={{
            alignItems: "center",
            placeItems: "center",
            display: "grid",
        }}>
            <Avatar
                src={{ profileImage }}
                style={{ margin: "0.5vw", width: "15vw", height: "15vw" }}
                onClick={() => {
                    setOpen(true);
                }}
            />


            <Dialog open={open}>
                <DialogTitle>Profile Image</DialogTitle>

                <DialogActions>
                    <Button variant="outlined" onClick={() => {
                        setMOpen(true);
                    }}> 크게 보기 </Button>
                    <Modal
                        open={mopen}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style }}>
                            <img src={Image}
                                 style={{ margin: "0.5vw", width: "30vw", height: "30vw" }}
                            ></img>
                        </Box>
                    </Modal>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            navigate("../setting");
                        }}
                    >
                        프로필 변경
                    </Button>

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