import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
   
function LeftArrow(props){

    const {indexBack} = props;

    return (
        <Button
            onClick={ () => {
                indexBack();
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
    );
}

export default LeftArrow;