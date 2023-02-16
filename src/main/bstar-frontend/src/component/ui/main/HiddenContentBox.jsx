import React from "react";
import { Box } from '@mui/material';
import Gallery from "../../page/main/gallery/Gallery";

function HiddenContentBox(props) {

    const {data} = props;

    return(
        <Box
            sx={{
                width: '56%',
                height: '86vh',
                border: '1px solid skyblue'
            }}
        >
            
            <Gallery data={data}/>
            
            
            
        </Box>
        
    );
}

export default HiddenContentBox;