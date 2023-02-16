import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function LoginField(){

    const navigate = useNavigate();
    
    return(
        <div
            style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: '3%'
            }}
        >
            {/*
                TextField는 input component이다.
                type으로 어떤 input을 받을지 결정할 수 있음 
            */}
            <div
                style={{
                    textAlign: 'center',
                    width: '70%',
                    //height: '50%'
                    //marginRight: '3%'
                }}
            >
                <TextField 
                    label="ID" //labeling 가능
                    type="text" //일반 text입력
                    name="type" 
                    required //반드시 입력해야하는 것
                    //autoFocus //자동으로 초점이 맞춰지게 함
                    //margin="normal"
                    style={{
                        width: '90%',
                        backgroundColor: 'white'
                    }}
                />
                <TextField 
                    label="PW" 
                    type = "password" //비밀번호 입력
                    name="password" 
                    required 
                    //margin="normal"
                    style={{
                        width: '90%',
                        marginTop: 5,
                        backgroundColor: 'white'
                    }}
                />
            </div>
            <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    pr: 3,
                    pl: 3,
                    margin:0,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                        color: 'skyblue',
                        borderColor: 'skyblue'
                    }
                }}
                onClick={() => {
                    navigate("/main");
                }}
            >
                로<br/>그<br/>인
            </Button>
        </div>
    );
}

export default LoginField;