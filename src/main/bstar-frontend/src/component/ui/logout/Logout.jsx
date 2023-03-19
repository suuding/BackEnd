import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Logout(){

    const navigate = useNavigate();

    return(

        <Button 
            type="submit" 
            variant="outlined" 
            sx={{
                pr: 3,
                pl: 3,
                pt: 1,
                pb: 1,
                fontSize: '16px',
                color: 'white',
                border: '1px solid skyblue',
                borderRadius: '10px',
                backgroundColor: 'skyblue',
                "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                }
            }}
            onClick={() => {
                navigate("/");
            }}
        >
            로그아웃
        </Button>

    );
}

export default Logout;