import React, {useState, useEffect} from 'react';
import { Drawer, Box, List  } from '@mui/material';
import SidebarHeader from "../ui/sidebar/SidebarHeader";
import SidebarSearch from "../ui/sidebar/SidebarSearch";
import SidebarFriendItem from "../ui/sidebar/SidebarFriendItem";
import SidebarItem from "../ui/sidebar/SidebarItem";
import Logout from '../ui/logout/Logout';

function Sidebar(){

    const items = [
        'write',
        'friends',
        'setting',
    ];

    const texts = [
        '글쓰기',
        '이웃',
        '설정',
    ];

    const [nestedOpen, setNestedOpen] = useState(false);
    const [mousePositionX, setMousePositionX] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setMousePositionX(e.clientX);
            const clientX = mousePositionX;
            if(clientX >= 0 && clientX <= 10){
                setToggle(true);
            }
            else if(clientX > 300){
                setToggle(false);
            }
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    })


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Drawer
                anchor="left"
                open={toggle}
                PaperProps={{sx: {width: '300px'}}}
            >
                <List>
                    <SidebarHeader setToggle={setToggle}/>
                    <SidebarSearch setToggle={setToggle}/>

                    {items.map((item, index) => {
                        if(item === 'friends'){
                            return(
                                <SidebarFriendItem
                                    item={item}
                                    index={index}
                                    texts={texts}
                                    nestedOpen={nestedOpen}
                                    setNestedOpen={setNestedOpen}
                                />
                            );
                        }
                        else{
                            return(
                                <SidebarItem
                                    item={item}
                                    index={index}
                                    texts={texts}
                                />
                            );
                        }
                    })}
                </List>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '3%',
                        right: '3%'
                    }}
                >
                    <Logout/>
                </div>

            </Drawer>
        </Box>
    );
}

export default Sidebar;