import React from 'react';
import {Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Group} from "@mui/icons-material";
import SidebarNested from "./SidebarNested";

function SidebarFriendItem({item, index, texts, nestedOpen, setNestedOpen}) {



    return (
        <>
            <ListItem key={item} sx={{padding: '0 5px'}}>
                <ListItemButton href={'/friend'}>
                    <ListItemIcon>
                        <Group style={{color: 'skyblue'}}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography style={{fontWeight: 'bold'}}>{texts[index]}</Typography>
                        }
                    />
                </ListItemButton>
                <Button onClick={() => {
                    setNestedOpen(!nestedOpen)
                }}>
                    {nestedOpen ? <ExpandLess/> : <ExpandMore/>}
                </Button>
            </ListItem>
            <SidebarNested nestedOpen={nestedOpen}/>
        </>
    );
}

export default SidebarFriendItem;