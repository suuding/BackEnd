import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';
import {Box, Typography, Divider, OutlinedInput, FormControl, TableContainer,
    Table, TableHead, Button, TableRow, TableCell, Checkbox, TableBody, Paper,
    tableCellClasses, TextField} from '@mui/material';
import { Container } from '@mui/system';
import data from "../../data.json";

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
    margin: '5px 0'
})




function SettingPage(props) {

    const [email, setEmail] = useState("1@gmail.com");
    const [inputs, setInputs] = useState([])
    const {blogName, nickName, introduction, image, music, friends} = inputs;

    useEffect(() => {
        const user = data.find((person) => {
            return person.email === email;
        })

        setInputs({
            blogName: user.blogName,
            nickName: user.nickName,
            introduction: user.introduction,
            image: user.image,
            music: user.music,
            friends: user.friends,
        });
    }, [email])

    const onChangeInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onInputImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setInputs({
                ...inputs,
                image: reader.result
            });
        };
    }

    const onUploadImage = () => {

    }

    const onChangeData = () => {

    }

    const [selected, setSelected] = useState([]);

    const onSelectAllClick = (e) => {
        if (e.target.checked) {
            const newSelected = friends;
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    }

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
        //선택된 이웃 삭제

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
                            <TextField
                                name="introduction"
                                value={introduction}
                                multiline
                                maxRows={4}
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
                                                width: '180px',
                                                height: '180px',
                                                border: '1px solid rgba(0,0,0,0.25)',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    }
                                </div>
                                <label htmlFor="image-button">
                                    <Button
                                        component="span"
                                        variant="outlined"
                                        onClick={onUploadImage}
                                        sx={{margin: '0 20px'}}
                                    >
                                        등록
                                    </Button>
                                </label>
                            </Box>
                        </FormControl>
                        <FormControl sx={{marginTop: '20px'}}>
                            <label style={{color: 'rgba(0,0,0,0.80)', marginBottom: '10px'}}>프로필 음악</label>


                            <TextField
                                name="music"
                                value={music}
                                multiline
                                maxRows={2}
                                onChange={(e) => onChangeInputs(e)}
                            />
                            <div
                                style={{
                                    fontSize : '0.3vw',
                                    color : 'grey'
                                }}>

                                재생 할 유튜브의 video ID를 입력해주세요.
                                video ID는 유튜브 주소의 v= 뒤에 붙는 코드입니다.
                                <br/>
                                ex : https://www.youtube.com/watch?v=AE3ce8F868k 의 video ID =AE3ce8F868k
                            </div>


                        </FormControl>
                    </Box>
                    <Button variant="outlined" onClick={onChangeData}>수정</Button>
                </Box>
                <Box sx={{margin: '20px 0'}}>
                    <Typography variant="h6">이웃 관리</Typography>
                    <StyledDivider/>
                    <TableContainer component={Paper} sx={{margin: "30px 0", width: '70%'}}>
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
                                {friends && friends.map((friend, index) => {
                                    const newFriend = data.find((user) => {
                                        return friend === user.email;
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
                                            <StyledTableCell sx={{width: "30%"}}>
                                                <Checkbox checked={isItemSelected}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {newFriend.nickName} <span style={{color:'rgba(0,0,0,0.50)'}}> | {newFriend.blogName}</span>
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