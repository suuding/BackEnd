import { styled } from '@mui/system';
import {Box, Typography, InputBase, ListItem, Tab, Tabs} from '@mui/material';

export const Search = styled(ListItem)({
    width: '90%',
    borderRadius: '20px',
    marginLeft: '15px',
    backgroundColor: 'rgba(0,0,0,0.06)',
});

export const SearchIconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const SearchInput = styled(InputBase)({
    display: 'inline-block',
    marginLeft: '10px',
    fontSize: '17px',
});

export const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: '40',
      width: '100%',
      backgroundColor: 'skyblue',
    },
});

export const StyledResultText = styled(Box)({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '20px',
})
  
export const StyledTab = styled(Tab)({
    fontSize: '18px',
    '&.Mui-selected': {
        fontWeight: 'bold',
        color: 'rgba(23, 36, 40, 0.8)',
    },
});

export function TabPanel(props) {
    const {children, value, index} = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}