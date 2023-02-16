import React, {useState, useEffect} from 'react';
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemButton, 
    ListItemText, Button, Typography } from '@mui/material';
import {SearchRounded, ExpandLess, ExpandMore, Group, Settings, Edit, AccountCircle} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import data from "../../data.json";
import {useStore, useSideState} from "../ui/CustomHooks";
import { Search, SearchIconWrapper, SearchInput, NestedBox, StateCircle, ImageCircle } from "../ui/StyledSidebar";

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

    const [keyword, setKeyword] = useStore("");
    const [state, setState] = useSideState();
    const [nestedOpen, setNestedOpen] = useState(false);
    const [mousePositionX, setMousePositionX] = useState();
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [word, setWord] = useState("");

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
                    <ListItem key='header'>
                        <Typography 
                            variant="h4" 
                            onClick={() => navigate("..")} 
                            sx={{margin: '10px 10px', cursor: 'pointer'}} 
                        >
                            Bstar
                        </Typography>
                        <Typography 
                            variant="body" 
                            onClick={() => {navigate("/main"); setToggle(false);}} 
                            sx={{margin: '10px 10px 10px 100px', cursor: 'pointer', color: 'rgba(23, 36, 40, 0.8)'}}
                        >
                            home
                        </Typography>
                    </ListItem>
                    <Search key='search'>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <SearchInput 
                            value={word}
                            placeholder='검색'
                            onChange={(e) => {
                                setKeyword(e.target.value);
                                setWord(e.target.value);
                            }}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13){
                                    if(keyword === ""){
                                        alert('검색어를 입력해 주세요.');
                                    }
                                    else{
                                        setWord("");
                                        setToggle(false);
                                        setState(state + 1 % 10);
                                        navigate('/search');
                                    }
                                }
                            }}
                        />    
                    </Search>   
                    {items.map((item, index) => {
                        if(item === 'friends'){
                             return(
                                <>
                                    <ListItem key={item} sx={{padding: '0 5px'}}>
                                        <ListItemButton href={'/friend'}>
                                            <ListItemIcon>
                                                <Group style={{ color: 'skyblue' }}/>
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/> 
                                        </ListItemButton>
                                        <Button onClick={()=> {setNestedOpen(!nestedOpen)}}>
                                            {nestedOpen? <ExpandLess /> : <ExpandMore />}
                                        </Button>
                                    </ListItem>
                                    <NestedBox 
                                        in={nestedOpen} 
                                        timeout="auto" 
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {data.map((friend, index) => {
                                                return(
                                                    <ListItem key={friend.email} sx={{ padding: '0 15px 0 25px'}}>
                                                        <ListItemButton href={'/' + friend.blogName}>
                                                            {
                                                                friend.image? 
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
                                                                        display:'inline-block', 
                                                                        verticalAlign: '-10px'
                                                                    }}
                                                                />
                                                            }
                                                            <ListItemText primary={friend.nickName} sx={{marginLeft: '30px'}}/>
                                                            {friend.newState && <StateCircle/>}
                                                        </ListItemButton>
                                                    </ListItem>
                                                );  
                                            })}
                                        </List>
                                    </NestedBox>
                                </>
                             );
                        }
                        else{
                            return(
                                <ListItem key={item} sx={{padding: '0 5px'}}>
                                    <ListItemButton href={'/' + item}>
                                        <ListItemIcon>
                                            {
                                                item === "setting"? 
                                                <Settings style={{ color: 'skyblue' }} /> 
                                                : 
                                                <Edit style={{ color: 'skyblue' }} />
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        }
                    })}
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidebar;