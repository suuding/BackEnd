import React, {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';
import {Box, Typography, Divider, OutlinedInput, FormControl, TableContainer, 
    Table, TableHead, Button, TableRow, TableCell, Checkbox, TableBody, Paper, tableCellClasses} from '@mui/material';
import { Container } from '@mui/system';
import data from "../../data.json";
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
        fontSize: 16,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
      },
}))

const friendList = [
    "2@gmail.com",
    "3@gmail.com",
    "4@gmail.com",
];


function SettingPage(props) {
    const [info, setInfo] = useState([]);
    const [email, setEmail] = useState();
    const [inputs, setInputs] = useState([]);
    const {blogName, nickName, introduction, image, music, friends} = inputs;

    useEffect(() => {
        axios.get('/setting/info')
            .then(response => setInfo(response.data))
            .catch(error => console.log(error, info))
    }, []);

    useEffect(() => {
        setEmail(info.email);
        setInputs({
            blogName: info.title,
            nickName: info.nickname,
            introduction: info.intro,
            image: info.image,
            music: info.music,
            friends: friendList, //받아온 friends를 넣어줌
        });
        console.log(email);
    }, [info])

    const onChangeInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onInputImage = (e) => {
        const file = e.target.files;
        console.log(file);
        setInputs({
            ...inputs,
            image: file
        });
    }
    
    const onUploadImage = (e) => {
        //등록 버튼을 누르면 image 등록
    }

    const onChangeData = () => {
        //수정 버튼을 누르면 데이터가 수정됨
        //inputs을 전송
    }

    const [selected, setSelected] = useState([]);

    //이웃 정보 전체 선택
    const onSelectAllClick = (e) => {
        if (e.target.checked) {
            const newSelected = friends;
            setSelected(newSelected);
            return;
          }
          setSelected([]);
    }

    //이웃 정보 개별 선택
    const onSelectClick = (email) => {
        const selectedIndex = selected.indexOf(email);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, email);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    }

    const isSelected = (nickName) => selected.indexOf(nickName) !== -1;
    
    const onRemoveData = () => {
        //삭제 버튼을 누르면 선택한 이웃 정보가 삭제됨
        //selected 배열에 삭제를 위해 선택된 이웃 아이디가 담김
    }

    return (
        <Box>
            <Sidebar/>
            <Container maxWidth='md'>
                <Box 
                    sx={{
                        margin: '30px 0'
                    }}
                >
                    <Typography variant="h6">프로필 정보</Typography>
                    <Divider sx={{width: '40%', border: '2px solid skyblue', margin: '5px 0'}} />
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '200px',
                            margin: '40px 0',
                        }}
                    >
                        <FormControl sx={{marginBottom: '20px'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>블로그 명</label>
                            <OutlinedInput
                                name="blogName"
                                value={blogName}
                                onChange={(e) => onChangeInputs(e)}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>별명</label>
                            <OutlinedInput
                                name="nickName"
                                value={nickName}
                                onChange={(e) => onChangeInputs(e)}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>프로필 소개글</label>
                            <OutlinedInput
                                name="introduction"
                                value={introduction}
                                onChange={(e) => onChangeInputs(e)}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)'}}>프로필 사진</label>
                            <Box sx={{marginTop: '10px', display: 'flex'}}>
                                <input
                                    name="image"
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => onInputImage(e)}
                                    id="image-button"
                                    style={{display: 'none'}}
                                />
                                <div>
                                    {image? (<img src={URL.createObjectURL(image[0])} alt="profileImage" width= '160px' height= '160px'/>)
                                    : (<Box sx={{width: '160px', height: '160px', border: '1px solid rgba(0,0,0,0.25)', borderRadius: '5px'}}></Box>)}
                                </div>
                                <label htmlFor="image-button">
                                    <Button component="span" variant="outlined" onClick={() => onUploadImage()} sx={{margin: '0 10px'}}>등록</Button>
                                </label>
                            </Box>
                        </FormControl>
                        <FormControl sx={{marginTop: '20px'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>프로필 음악</label>
                            <OutlinedInput
                                name="music"
                                value={music}
                                onChange={(e) => onChangeInputs(e)}
                            />
                        </FormControl>
                    </Box> 
                    <Button variant="outlined" onClick={onChangeData}>수정</Button>
                </Box>
                <Box sx={{margin: '20px 0'}}>
                    <Typography variant="h6">이웃 관리</Typography>
                    <Divider sx={{width: '40%', border: '2px solid skyblue', margin: '5px 0'}} />
                    <TableContainer component={Paper} sx={{margin: "30px 0", width: '40%'}}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        <Checkbox onChange={onSelectAllClick}/>
                                    </StyledTableCell>
                                    <StyledTableCell>이웃</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {friends && friends.map((friend) => {
                                    const newFriend = data.find((p) => { //아이디 주인의 친구를 찾기
                                        return friend === p.email;
                                    });
                                    const isItemSelected = isSelected(newFriend.email);
                                    return(
                                        <TableRow
                                            key={newFriend.nickName}
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            onClick={() => onSelectClick(newFriend.email)}
                                            selected={isItemSelected}
                                        >
                                            <StyledTableCell>
                                                <Checkbox checked={isItemSelected}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {newFriend.nickName}
                                            </StyledTableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button variant="outlined" onClick={onRemoveData}>삭제</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default SettingPage;