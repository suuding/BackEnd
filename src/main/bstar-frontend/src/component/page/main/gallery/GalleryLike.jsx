import React, {useState} from 'react';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './GalleryCss.css'

function GalleryLike(props){

    const [checked, setChecked] = useState(false);

    return(
        <Box
            sx={{
                marginTop: '3%',
                marginLeft: '5%'
            }}
        >
            {checked ?
                <FavoriteIcon
                className='redHeart'
                onClick={ () => {
                    setChecked(false);
                }}
                />
            :
                <FavoriteBorderIcon 
                    className='borderHeart'
                    onClick={ () => {
                        setChecked(true);
                    }}
                />
            }
        </Box>

    );

};

export default GalleryLike;