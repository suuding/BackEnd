import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import { Box, Select, FormControl, MenuItem, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import { SearchRounded } from '@mui/icons-material';
import SearchList from '../list/SearchList';
import data from "../../data.json"
import { useStore, useSideState } from "../ui/CustomHooks";
import { Search, SearchIconWrapper, SearchInput, StyledTabs, StyledResultText,
    StyledTab, TabPanel } from "../ui/StyledSearchPage.jsx";
import PostDialog from '../ui/friend/PostDialog';
import posts from "./main/images";

function SearchPage(props) {

    const [keyword, setKeyword] = useStore(); //입력 중인 검색어
    const [word, setWord] = useState(); //enter 후 입력된 검색어
    const [state, setState] = useSideState(); //사이드 바 상태
    const [tabState, setTabState] = useState(0); //제목, 사용자 탭 상태
    const [toggleState, setToggleState] = useState("블로그 내부 검색"); //블로그 내부 검색, 전체 검색 상태

    const [page, setPage] = useState(1); //현재 페이지
    const pageLimit = 5; //한 페이지에 나타날 검색 결과 개수
    const offset = (page - 1) * pageLimit;
    const [postCount, setPostCount] = useState(0); //검색 결과 개수 받아오기
    //const [visible, setVisible] = useVisible(false);
    const [resultTitleInner, setResultTitleInner] = useState([]); //제목 블로그 내부 검색 결과
    const [resultTitleTotal, setResultTitleTotal] = useState([]); //제목 전체 검색 결과
    const [resultUser, setResultUser] = useState([]); //사용자 검색 결과

    const email = "1@gmail.com"; //임시로 설정
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(-1);

    useEffect(() => {
        if(select !== -1){
            setOpen(true);
        }
    }, [select])

    useEffect(() => {
        setWord(keyword);
        setTabState(0);
        setToggleState("블로그 내부 검색");
        getSearchResult();
    }, [state])

    useEffect(() => {
        setPage(1);
        getSearchResult();
        window.scrollTo(0, 0);
    }, [tabState, word, toggleState])

    const getSearchResult = () => {
        if(tabState === 1)
            getResultUser();
        else{
            if(toggleState === "블로그 내부 검색")
                getResultTitleInner();
            else
                getResultTitleTotal();
        }
    }

    //블로그 내부 검색
    const getResultTitleInner = () => {
        let newResult = [];
        posts && posts.map((post, index) => {
            if(post.title.includes(word) && email === post.email){
                return newResult = newResult.concat(post);
            }
        })
        setResultTitleInner(newResult);
        setPostCount(newResult.length);
    }

    //전체 검색
    const getResultTitleTotal = () => {
        let newResult = [];
        posts && posts.map((post, index) => {
            if(post.title.includes(word)){
                return newResult = newResult.concat(post);
            }
        })
        setResultTitleTotal(newResult);
        setPostCount(newResult.length);
    }

    //사용자 검색
    const getResultUser = () => {
        let newResult = [];
        data && data.map((person, index) => {
            if(person.nickName.includes(word)){
                return newResult = newResult.concat(person);
            }
        })
        setResultUser(newResult);
        setPostCount(newResult.length);
    }

    const onSelectResult = () => {
        if(tabState === 1)
            return resultUser;
        else{
            if(toggleState === "블로그 내부 검색")
                return resultTitleInner;
            else
                return resultTitleTotal;
        }
    }

    const onChangePage = (e) => {
        const nextPage = e.target.textContent;
        const count = Math.floor((postCount-1) / pageLimit + 1);
        if(nextPage >= 1 && nextPage <= count)
            setPage(nextPage);
    }

    const onScroll = () => {
        window.scrollTo(1000, 0);
    }

    return (
        <Box>
            <Sidebar/>
            <Container
                maxWidth='md'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                <Box sx={{width: '50%', margin: '30px'}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <SearchInput
                            placeholder='검색어를 입력하세요.'
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13){
                                    if(keyword === ""){
                                        alert('검색어를 입력해 주세요.');
                                    }
                                    else{
                                        setWord(keyword);
                                        setState(state + 1 % 10);
                                    }
                                }
                            }}
                        />
                    </Search>
                </Box>
                {(state !== 0)?
                    <Box
                        sx={{
                            width: '100%',
                            height: '80vh',
                            typography: 'body1',
                            marginTop:'10px'
                        }}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <StyledTabs
                                value={tabState}
                                onChange={(e, newValue) => setTabState(newValue)}
                            >
                                <StyledTab label="제목" />
                                <StyledTab label="사용자" />
                            </StyledTabs>
                        </Box>
                        <TabPanel value={tabState} index={0}>
                            <Box>
                                <Box sx={{display: 'inline-block'}}>
                                    <FormControl>
                                        <Select
                                            value={toggleState}
                                            onChange={(e) => {setToggleState(e.target.value)}}
                                            displayEmpty
                                            sx={{fontSize: '14px', height: '30px'}}
                                        >
                                            <MenuItem value="블로그 내부 검색">블로그 내부 검색</MenuItem>
                                            <MenuItem value="전체 검색">전체 검색</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                {(toggleState === "블로그 내부 검색")?
                                    <StyledResultText>'{word}' 에 대한 블로그 내부 검색 결과 {postCount}건</StyledResultText>
                                    : <StyledResultText>'{word}' 에 대한 전체 검색 결과 {postCount}건</StyledResultText>}
                            </Box>
                        </TabPanel>
                        <TabPanel value={tabState} index={1}>'{word}' 에 대한 사용자 검색 결과 {postCount}건</TabPanel>
                        <Box
                            sx={{
                                width: '100%',
                                margin: '10px 0',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <SearchList
                                list={onSelectResult()} //검색 결과인 게시글 목록
                                offset={offset}
                                pageLimit={pageLimit}
                                tabState={tabState}
                                setSelect={setSelect}
                            />
                            <Pagination // 페이지 수 나타냄
                                count={Math.floor((postCount - 1) / pageLimit + 1)}
                                onChange={(e) => onChangePage(e)}
                                color="primary"
                                variant="outlined"
                                sx={{margin: '20px'}}
                            />
                        </Box>
                        <PostDialog
                            open={open}
                            setOpen={setOpen}
                            select={select}
                            setSelect={setSelect}
                        />
                    </Box>: <Box></Box>}
            </Container>
        </Box>
    );
}

export default SearchPage;