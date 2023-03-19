import React from 'react';
import { ListItem, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";

function SidebarHeader({setToggle}) {
    const navigate = useNavigate();

    return (
        <ListItem key='header'>
            <Typography
                variant="h4"
                onClick={() => navigate("..")}
                sx={{margin: '10px 10px', cursor: 'pointer'}}
            >
                Bstar
            </Typography>
            <Typography
                variant="body"
                onClick={() => {
                    navigate("/main");
                    setToggle(false);
                }}
                sx={{margin: '10px 10px 10px 100px', cursor: 'pointer', color: 'rgba(23, 36, 40, 0.8)'}}
            >
                home
            </Typography>
        </ListItem>
    );
}

export default SidebarHeader;