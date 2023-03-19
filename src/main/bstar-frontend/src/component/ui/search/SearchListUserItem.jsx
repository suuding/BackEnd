import React from 'react';
import {Box, Typography, Grid} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

function SearchListUserItem(props) {
    const {user} = props;
    const navigate = useNavigate();

    return (
        <Box sx={{margin: '10px 0'}}>
            <Grid
                container
                wrap="nowrap"
                spacing={1}
                onClick={() => navigate('/main')} //해당 사용자 홈으로 이동
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Grid item xs zeroMinWidth>
                    <Typography variant="h6">{user.blogName}</Typography>
                    <Typography variant="body2" noWrap sx={{margin: '5px 0'}}>
                        {user.introduction}
                    </Typography>
                    <Box sx={{margin: '10px 0'}}>
                        {user.image?
                            <img
                                src={user.image}
                                alt=""
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    verticalAlign: '-10px'
                                }}
                            />
                            :
                            <AccountCircle
                                style={{
                                    color: 'grey',
                                    width: '30px',
                                    height: '30px',
                                    display:'inline-block',
                                    verticalAlign: '-10px'
                                }}
                            />
                        }
                        <Typography
                            variant="body1"
                            sx={{
                                display:'inline-block',
                                marginLeft: '10px'
                            }}
                        >
                            {user.nickName}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchListUserItem;