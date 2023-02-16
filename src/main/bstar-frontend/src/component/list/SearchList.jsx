import {Box, Divider} from '@mui/material';
import React from 'react';
import SearchListItem from '../ui/search/SearchListItem';
import SearchListUserItem from '../ui/search/SearchListUserItem';

function SearchList(props) {
    const {list, onClickItem, offset, pageLimit, tabState} = props;

    return (
        <Box sx={{width: '95%'}}>
            <Divider/>  
            {list.slice(offset, offset + pageLimit).map((item, index) => {
                return(
                    <>
                        <Divider/>
                        {tabState === 0?
                            <SearchListItem 
                                key={item.id}
                                item={item}
                                onClick={() => {onClickItem(item)}}
                            />:
                            <SearchListUserItem 
                                key={item.email}
                                user={item}
                                onClick={() => {onClickItem(item)}}
                            />
                        }    
                        <Divider/>  
                    </>  
                );
            })}
            <Divider/>  
        </Box>
    );
}

export default SearchList;