import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import data from "../../../data.json";
import {AccountCircle} from "@mui/icons-material";
import {NestedBox, StateCircle} from "../StyledSidebar";

function SidebarNested({nestedOpen}) {

    return (
        <NestedBox
            in={nestedOpen}
            timeout="auto"
            unmountOnExit
        >
            <List component="div" disablePadding>
                {data.map((friend, index) => {
                    return (
                        <ListItem
                            key={friend.email}
                            sx={{padding: '0 15px 0 25px'}}
                        >
                            <ListItemButton href={'/' + friend.blogName}>
                                {
                                    friend.image ?
                                        <img
                                            src={friend.image}
                                            alt=""
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                verticalAlign: '-10px'
                                            }}
                                        />
                                        :
                                        <AccountCircle
                                            style={{
                                                color: 'grey',
                                                width: '30px',
                                                height: '30px',
                                                display: 'inline-block',
                                                verticalAlign: '-10px'
                                            }}
                                        />
                                }
                                <ListItemText
                                    primary={friend.nickName}
                                    sx={{marginLeft: '30px'}}
                                />
                                {friend.newState && <StateCircle/>}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </NestedBox>
    );
}

export default SidebarNested;