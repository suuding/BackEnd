import React from 'react';
import {Box, Typography, Grid} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function SearchListUserItem(props) {
    const {user, onClick} = props;

    return (
        <Box sx={{margin: '10px 0'}}>
            <Grid 
                container 
                wrap="nowrap" 
                spacing={1} 
                onClick={onClick} 
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