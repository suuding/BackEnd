import { Favorite } from '@mui/icons-material';
import { Card, CardActions, CardMedia, IconButton, Box } from '@mui/material';
import React, {useState} from 'react';

function FriendListItem(props) {
    const {item, onClick} = props;
    const [toggle, setToggle] = useState(false);

    return (
        <Box sx={{margin: '10px'}}  >
            <Card>
            <CardMedia 
                component="img"
                height="200"
                image={item.image[0]}
                onError={e => {e.currentTarget.style.visibility = 'hidden'}}
                onClick={onClick}
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