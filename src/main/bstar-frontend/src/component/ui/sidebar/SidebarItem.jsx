import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Edit, Settings} from "@mui/icons-material";

function SidebarItem({item, texts, index}) {
    return (
        <ListItem key={item} sx={{padding: '0 5px'}}>
            <ListItemButton href={'/' + item}>
                <ListItemIcon>
                    {
                        item === "setting" ?
                            <Settings style={{color: 'skyblue'}}/>
                            :
                            <Edit style={{color: 'skyblue'}}/>
                    }
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography style={{fontWeight: 'bold'}}>{texts[index]}</Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
}

export default SidebarItem;