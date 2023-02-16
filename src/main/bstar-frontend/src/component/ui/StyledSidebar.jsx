import { styled } from '@mui/system';
import { ListItem, InputBase, Collapse } from '@mui/material';

export const Search = styled(ListItem)({
    width: '90%',
    borderRadius: '20px',
    margin: '10px 0px 10px 15px',
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
    fontSize: '15px',
});

export const NestedBox = styled(Collapse)({
    overflowY : "auto",
    maxHeight: "57vh",
    "&::-webkit-scrollbar" :{
        width: 0,
    }
})

export const StateCircle = styled('div')({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#757ce8',
});

export const ImageCircle = styled('div')({
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#15456915',
    marginRight: '20px',
});