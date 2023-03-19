import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
   
function RightArrow(props){

    const {indexForward} = props;

    return (
        <Button
            onClick={ () => {
                indexForward();
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
            <ArrowForwardIosIcon/>
        </Button>
    );
}

export default RightArrow;