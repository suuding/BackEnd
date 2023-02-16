import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

function LoginRightBox(){

    const navigate = useNavigate();

    return(
        <Box 
            sx={{
                height: '60vh',
                background: 'linear-gradient(to right, #C3E7FA, #91D8FA)',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '0px 10px 10px 0px',
                boxShadow: 'rgba(0, 0, 0, 0.9) 10px 10px 15px -5px'
            }}
        >
            <Typography 
                variant="h4"
                color="white"
                style={{
                    marginTop: '38%'
                }}  
            >
                함께 해요!
            </Typography>
            <Typography 
                // variant를 안주면 일반 글자크기 적용됨
                color="white"
                style={{
                    fontSize: '0.8rem',
                    marginTop: 20,
                    marginBottom: 10
                }}  
            >
                일상을 담고 싶다면?
            </Typography>
            <Button 
                type="submit" 
                variant="outlined" 
                sx={{
                    mt: 4,
                    pr: 6,
                    pl: 6,
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '10px',
                    "&.MuiButton-root:hover":{
                        backgroundColor: 'white',
                        color: 'skyblue',
                        borderColor: 'white'
                    }
                }}
                onClick={() => {navigate("../../page/SignUpPage")}}
            >
                회원가입
            </Button>
        </Box>
    );
}

export default LoginRightBox;