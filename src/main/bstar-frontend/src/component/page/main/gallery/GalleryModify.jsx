import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModifyGalleryDialog from "./ModifyGalleryDialog";

function GalleryModify(props){

    const {data} = props;
    const [open, setOpen] = useState(false);

    return(
        <div>
            <MoreVertIcon
                style={{
                    float: 'right',
                    color: 'skyblue',
                    cursor: 'pointer'
                }}
                onClick={ () => {
                    setOpen(true);
                }}
            />
            <ModifyGalleryDialog 
                data={data} 
                open={open} 
                setOpen={setOpen}   
            />
        </div>
    );
}

export default GalleryModify;