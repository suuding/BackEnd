import { Favorite } from '@mui/icons-material';
import { Card, CardActions, CardMedia, IconButton, Box } from '@mui/material';
import React, {useState} from 'react';
import PostDialog from './friend/PostDialog';

function FriendListItem(props) {
    const {item, setSelect} = props;

    const [toggle, setToggle] = useState(false);

    return (
        <Box sx={{margin: '10px'}}  >
            <Card>
                <CardMedia
                    component="img"
                    height="200"
                    image={item.image[0]}
                    onError={e => {e.currentTarget.style.visibility = 'hidden'}}
                    onClick={() => setSelect(item.id)}
                />
                <CardActions>
                    <IconButton>
                        <Favorite
                            onClick={() => setToggle(prev => !prev)}
                            style={{ color: toggle? 'red': 'grey' }}
                        />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>

    );
}

export default FriendListItem;