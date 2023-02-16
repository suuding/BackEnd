import React from "react";
import { Button } from '@mui/material';
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";

function ModifyGalleryDialog(props) {

    const {data, open, setOpen} = props;

    return(
        <Dialog open={open}>
            <DialogActions>
                <Button
                    style={{
                        float: 'right',
                        //margin: '0.5%',
                        padding: 0
                    }}
                    onClick ={ () => {
                        setOpen(false);
                    }}
                >
                    X
                </Button>
            </DialogActions>
            <DialogContent>
                <p>modify</p>
            </DialogContent>
        </Dialog>
    );
}

export default ModifyGalleryDialog;