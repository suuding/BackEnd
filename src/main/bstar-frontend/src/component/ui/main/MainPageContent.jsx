import React from 'react';
import Sidebar from '../../page/Sidebar';
import {Box} from '@mui/material';
import ContentGrid from './ContentGrid';
import './MainPageContent.css';


function MainPageContent(props) {
    return ( //로그아웃 버튼 만들기
        <Box
            className="box"
            sx={{
                width: '172%',
                height: '90vh',
                border: '1px solid skyblue',
                padding: '3%',
                paddingBottom: '1%',
                marginTop: props.style
            }}
        >
            <Sidebar/>
            <ContentGrid></ContentGrid>
        </Box>
    );
}

export default MainPageContent;