import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import {Box, Button, Typography, Divider} from '@mui/material';
import { Container } from '@mui/system';
import FriendList from '../list/FriendList';
import postData from "../../postData.json";
import PostDialog from '../ui/friend/PostDialog';
import img from "./main/images";
import { styled } from '@mui/system';

import { useNavigate } from "react-router-dom";

const StyledDivider = styled(Divider)({
    width: '70%',
    border: '2px solid skyblue',
    margin: '5px 0'
})

function FriendPage(props) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(-1);

    useEffect(() => {
        if(select !== -1){
            setOpen(true);
        }
    }, [select])

    return (
        <Box>
            <Sidebar/>
            <Container
                maxWidth='md'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                <Box sx={{width: '100%', margin: '30px'}}>
                    <Typography variant="h6">이웃 소식</Typography>
                    <StyledDivider sx={{width: '100%'}}/>
                    <Box
                        sx={{
                            width: '100%',
                            margin: '10px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <FriendList
                            data={img} //검색 결과인 친구들의 새 글 목록
                            setSelect={setSelect}
                        />
                    </Box>
                    <PostDialog
                        open={open}
                        setOpen={setOpen}
                        select={select}
                        setSelect={setSelect}
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default FriendPage;
