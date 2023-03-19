import React, {useState} from 'react';
import { Dialog, DialogActions, Button, DialogContent, Box } from '@mui/material';
import HiddenContentBox from '../main/HiddenContentBox';
import img from '../../page/main/images'; 
import CommentBox from '../CommentBox';
import postData from "../../../postData.json";
import { useEffect } from 'react';

function PostDialog({open, setOpen, select, setSelect}) {

    const [data, setData] = useState(img[0]); //초기 data

    useEffect(() => {
        if(open === true && select !== -1){
            setData(img[select - 1]);
        }
    }, [open])
    
    return (
        <Dialog 
            open={open}
            onClose={() => setOpen(false)}
            maxWidth='md'    
            fullWidth={true}
            style={{ maxHeight: "100%" }}
        >
                <DialogContent>
                    <Box sx={{display:'flex'}}>
                        <HiddenContentBox data={data} sx={{display:'inline-block'}}/>
                        <CommentBox Id={data.id} data={postData} sx={{display:'inline-block'}}/>
                    </Box>
                    <Box>

                    </Box>
                </DialogContent>
        </Dialog>
    );  
}
export default PostDialog;