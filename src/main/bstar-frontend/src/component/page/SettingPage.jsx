import React, {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';
import {Box, Typography, OutlinedInput, FormControl, TableContainer,
    Table, TableHead, Button, TableRow, Divider, TableCell, TextField, Checkbox, TableBody, Paper, tableCellClasses} from '@mui/material';
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

const StyledDivider = styled(Divider)({
    width: '70%',
    border: '2px solid skyblue',
    margin: '5px 0',
})

const StyledLabel = styled('label')({
    color: 'rgba(0,0,0,0.80)',
    marginBottom: '10px',
})

function SettingPage(props) {
    const [info, setInfo] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [friendInputs, setFriendInputs] = useState([]);
    const [friends, setFriends] = useState([]);
    const {blogName, nickName, introduction, image, music} = inputs;
    const {friendList} = friendInputs;

    useEffect(() => {
        axios.get('/setting/info')
            .then(response => setInfo(response.data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get('/setting/friends')
        .then(response => {
            console.log(response.data)
            setFriends(response.data)
            })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        setInputs({
            blogName: info.blogName,
            nickName: info.nickName,
            introduction: info.introduction,
            image: info.image,
            music: info.music
        });
    }, [info]);

     useEffect(() => {
        setFriendInputs({
            friendList: friends.friendList
        });
    }, [friends]);

    const onChangeInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onInputImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setInputs({
                ...inputs,
                image: reader.result
            });
        };
    }

    const onChangeData = () => {
//         e.preventDefault();
//         const params = new URLSearchParams();
//
//         params.append('blogName', blogName);
//         params.append('nickName', nickName);
//         params.append('introduction', introduction);
//
//         axios.put('/setting/info', params);
        axios.put('/setting/info', {
            blogName: blogName,
            nickName: nickName,
            introduction: introduction
        })
            .then(function (response) {
                alert("수정되었습니다.");
            }).catch(function (error) {
            alert(error);
        }).then(function() {
            // 항상 실행
        });
    }

    const [selected, setSelected] = useState([]);
    const [friendEmail, setFriendEmail] = useState([]);
    const onSelectAllClick = (e) => {
        if (e.target.checked) {
            friendList.map((friend)=> {
                friendEmail.push(friend.friendEmail);
            })
            const newSelected = friendEmail;
            setSelected(newSelected);
            return;
        }
        setSelected([]);
        setFriendEmail([]);

    }

    const onSelectClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
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
        //선택된 이웃 삭제
        axios.put('/setting/friends', {
            friendEmail: selected
        })
            .then(function (response) {
                alert("삭제되었습니다.");
                window.location.href = '/setting';
            }).catch(function (error) {
            alert(error);
        }).then(function() {
            // 항상 실행
        });
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
                    <StyledDivider/>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '300px',
                            margin: '40px 0',
                        }}
                    >
                        <FormControl sx={{marginBottom: '20px'}}>
                            <label
                                style={{
                                    color: 'rgba(0,0,0,0.80)',
                                    marginBottom: '10px'
                                }}
                            >블로그 명</label>
                            <OutlinedInput
                                name="blogName"
                                value={blogName}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <StyledLabel>별명</StyledLabel>
                            <OutlinedInput
                                name="nickName"
                                value={nickName}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <StyledLabel>프로필 소개글</StyledLabel>
                            <TextField
                                name="introduction"
                                value={introduction}
                                multiline
                                maxRows={4}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                        <FormControl sx={{margin: '20px 0'}}>
                            <StyledLabel>프로필 사진</StyledLabel>
                            <Box sx={{marginTop: '10px', display: 'flex'}}>
                                <input
                                    name="image"
                                    accept="image/*"
                                    type="file"
                                    onChange={onInputImage}
                                    id="image-button"
                                    style={{display: 'none'}}
                                />
                                <div>
                                    {image?
                                        <img
                                            src={image}
                                            alt="profileImage"
                                            width= '160px'
                                            height= '160px'
                                        />
                                        :
                                        <Box
                                            sx={{
                                                width: '160px',
                                                height: '160px',
                                                border: '1px solid rgba(0,0,0,0.25)',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    }
                                </div>
                                <label htmlFor="image-button">
                                    <Button component="span" variant="outlined" sx={{margin: '0 10px'}}>등록</Button>
                                </label>
                            </Box>
                        </FormControl>
                        <FormControl sx={{marginTop: '20px'}}>
                            <StyledLabel>프로필 음악</StyledLabel>
                            <OutlinedInput
                                name="music"
                                value={music}
                                onChange={onChangeInputs}
                            />
                        </FormControl>
                    </Box>
                    <Button variant="outlined" onClick={onChangeData}>수정</Button>
                </Box>
                <Box sx={{margin: '20px 0'}}>
                    <Typography variant="h6">이웃 관리</Typography>
                    <StyledDivider/>
                    <TableContainer
                        component={Paper}
                        sx={{
                            margin: "30px 0",
                            width: '300px'
                        }}
                    >
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

                           {friendList && friendList.map((friend) => {
                                const friendName = friend.friendName;
                                const friendEmail = friend.friendEmail;

                                const isItemSelected = isSelected(friendEmail);
                                return(
                                    <TableRow
                                        key={friend}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        onClick={() => onSelectClick(friendEmail)}
                                        selected={isItemSelected}
                                    >
                                        <StyledTableCell>
                                            <Checkbox checked={isItemSelected}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {friendName}
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