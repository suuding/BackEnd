import { Box, Grid } from '@mui/material';
import React from 'react';
import FriendListItem from '../ui/FriendListItem';

function FriendList(props) {
    const {data, setSelect} = props;
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{xs:1}}>
                {data.map((item, index) => {
                    return(
                        <Grid item xs={4}>
                            <FriendListItem
                                item={item}
                                setSelect={setSelect}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default FriendList;