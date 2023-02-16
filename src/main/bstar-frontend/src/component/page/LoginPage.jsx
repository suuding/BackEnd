import React from "react";
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import LoginLeftBox from "../ui/login/LoginLeftBox";
import LoginRightBox from "../ui/login/LoginRightBox";


//import { CssBaseline } from "@mui/material-ui/core";


function LoginPage(props) {
    

    return (
        
        /*
            Container는 가장 기본적인 layout요소로 
            좌우간격, contents를 가로로 중앙에 배치할 때 사용한다.
            fluid -> maxWidth="원하는 값"으로 지정
            fixed -> fixed를 넣으면 된다. 
            여기서 Container는 가로 방향의 중앙정렬을 위해 사용
        */
        <Container
            maxWidth='md'
        >
            {/* 
                Box는 <Box></Box> 안에 들어가는 tag들에 대한 css를 적용시켜주는 역할
                css를 적용하기 위해서는 sx={{}}안에 작성해야함
                여기서 Box는 화면에서의 세로 방향의 중앙정렬을 적용시기키 위해 사용
            */}
            <Box
                sx={{ 
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center', // 세로 중앙정렬
                }}
            >
                {/* 
                    Grid는 Component들을 나란히 배치하고자 할때 사용한다. 
                    크게 감싸는 Grid와 감싸지는 Grid가 있다. -> 이걸 반드시 지켜야 함
                */}
                {/* 감싸는 Grid -> <Grid container> 
                    여기서 spacing은 item들 사이의 여백 -> 0부터 10까지로 숫자가 커질 수록 여백이 증가
                    spacing={0}의 경우에는 여백을 주지 않겠다는 의미 */}
                <Grid container spacing={0}> 
                    {/* 감싸지는 Grid -> <Grid item>
                        xs는 breakpoint로 화면 크기와 관련 된 것
                        xs={12} sm={6}은 영역을 12개로 분할했을 때 6개만큼의 크기를 차지하겠다는 의미*/}
                    <Grid item xs={12} sm={6}>
                        <LoginLeftBox/>
                    </Grid>
                    <Grid item xs={12} sm={6}> {/*12로 나누었을 때 6만큼을 쓴다는 의미*/}
                        <LoginRightBox/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        
    );
}

export default LoginPage;