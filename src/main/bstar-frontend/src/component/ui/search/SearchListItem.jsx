import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import data from "../../../data.json";

function SearchListItem(props) {
    const {item, onClick} = props;

    let content = "";
    item.desc.map((desc) => {
        content += desc + " ";
    })

    const person = data.find((person) => {
        return person.email === item.email;
    });

    return (
        <Box sx={{padding: '10px 0'}}>
            <Grid 
                container 
                wrap="nowrap" 
                spacing={2} 
                onClick={onClick} 
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Grid item>
                    <img 
                        src= {item.image[0]} 
                        alt="" 
                        width= '160px' 
                        height= '160px'
                    />
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Typography variant="h6" sx={{margin: '10px 0'}}>{item.title}</Typography>
                    <Typography noWrap>{content}</Typography>
                    <Box sx={{margin: '10px 0'}}>
                        {person.image? 
                            <img 
                                src={person.image} 
                                alt="" 
                                style={{
                                    width: '30px', 
                                    height: '30px', 
                                    borderRadius: '50%', 
                                    verticalAlign: '-10px'
                                }}
                            />
                            :<AccountCircle 
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
                            {person.nickName}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>    
    );
}

export default SearchListItem;