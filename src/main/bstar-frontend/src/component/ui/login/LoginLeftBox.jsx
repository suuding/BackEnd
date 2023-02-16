import React from "react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import SocialLogin from "./SocialLogin";
import LoginField from "./LoginField";
import HorizonLine from "./HorizonLine";

function LoginLeftBox(){
    
    return(
        <Box 
            sx={{
                    height: '60vh',
                    backgroundColor: '#fafafa',
                    display: 'flex',
                    flexDirection: 'column', //여기서는 direction이 column으로 바뀌었으므로 
                    alignItems: 'center', //세로 중앙 정렬의 역할을 못한다.
                    borderRadius: '10px 0px 0px 10px',
                    boxShadow: 'rgba(0, 0, 0, 0.9) 23px 10px 15px -5px'
                }}
        >
        {/* 
            이렇게 쓰기도 함
            <Typography component="h1" variant="h5"> : 크기는 h4인 h1 태그가 생성됨 
        */}
        {/* 
            Typography는 text형태의 정보를 화면에 출력해주는 것
            h1, p tag...와 같은 역할로 사용가능 -> variant로 바꾸어 준다.
            여기서는 variant="h3" -> <h3></h3>으로 사용됨
        */}
            <Typography  
                variant="h3"
                style={{
                    marginTop: '13%',
                    marginBottom: 10,
                    color: '#424242'
                }}    
            >
                Login
            </Typography>
            <LoginField/>
            {/* Link는 a tag 같은 역할 */}
            <Link
                style={{
                    marginTop: 0,
                    color: 'skyblue'
                }}
                href="../../page/MainPage"
                underline="hover"
            >
                ID / PW 찾기
            </Link>
            <HorizonLine text="Social Login" />
            <SocialLogin/>
        </Box>
    );
}

export default LoginLeftBox;