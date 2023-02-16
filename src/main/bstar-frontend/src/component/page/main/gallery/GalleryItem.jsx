import React,  {useState} from "react";
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GalleryDialog from "./GalleryDialog";
import GalleryLike from "./GalleryLike";

const GalleryItem = (props) => {

    const { setIndex, index, data, imgs } = props;
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                height: '50vh',
                border: '1px solid skyblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                //margin: 0
            }}
        >
                
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
            
            <Box>
            {/* JSON 객체 배열에서 객체 액세스 하는 방법으로 src변경 */}
                <img 
                    src={data.image[index]} 
                    alt={''}
                    style={{
                        width: 'auto',
                        height: '40vh',
                        maxWidth: '100%',
                        marginTop: '5%',
                        cursor: 'pointer'
                    }}
                    onClick={ () => {
                        setOpen(true);
                    }}
                />
                <GalleryLike/>
            </Box>
         
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
            <GalleryDialog 
                data={data}
                index={index}
                setIndex={setIndex}
                open={open}
                setOpen={setOpen}
            />
        </Box>
    );
};

export default GalleryItem;