import React from "react";
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";

function GalleryDialog(props){

    const { setIndex, index, data, open, setOpen } = props;

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
            <DialogContent style={{padding: 0, paddingBottom: '5%'}}>
                <DialogActions style={{padding: 0}}>
                    <Button
                        onClick={ () => {
                            setIndex(index-1);
                        }}
                        sx={{
                            height: '50vh',
                            float: 'left',
                            pr: 0,
                            pl: 0,
                            color: 'white',
                            "&.MuiButton-root:hover":{
                                color: 'skyblue',
                                borderColor: 'skyblue'
                            }
                        }}
                    >
                        <ArrowBackIosIcon/>
                    </Button>
                    <Button
                        onClick={ () => {
                            //let likeCnt = [...like];
                            //likeCnt[index] ++;
                            //setLike(likeCnt);
                        }}
                    >
                        <img
                            src={data.image[index]}
                            alt={''}
                            style={{
                                //width: '60%'
                                width: 'auto',
                                height: '60vh',
                                //maxWidth: '58%',
                                //minHeight: '50vh'
                            }}
                        />
                    </Button>
                    <Button
                        onClick={ () => {
                            setIndex(index+1);
                        }}
                        sx={{
                            height: '50vh',
                            float: 'right',
                            pr: 0,
                            pl: 0,
                            color: 'white',
                            "&.MuiButton-root:hover":{
                                color: 'skyblue',
                                borderColor: 'skyblue'
                            }
                        }}
                    >
                        <ArrowForwardIosIcon/>
                    </Button>
                    <p>
                        {/*like[index]*/}
                    </p>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );

};

export default GalleryDialog;