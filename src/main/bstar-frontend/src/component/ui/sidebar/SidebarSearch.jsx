import React, {useState} from 'react';
import {Search, SearchIconWrapper, SearchInput} from "../StyledSidebar";
import {SearchRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSideState, useStore} from "../CustomHooks";

function SidebarSearch({setToggle}) {
    const [keyword, setKeyword] = useStore("");
    const [word, setWord] = useState("");
    const [state, setState] = useSideState();
    const navigate = useNavigate();

    return (
        <Search key='search'>
            <SearchIconWrapper>
                <SearchRounded/>
            </SearchIconWrapper>
            <SearchInput
                value={word}
                placeholder='검색'
                onChange={(e) => {
                    setKeyword(e.target.value);
                    setWord(e.target.value);
                }}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        if (keyword === "") {
                            alert('검색어를 입력해 주세요.');
                        } else {
                            setWord("");
                            setToggle(false);
                            setState(state + 1 % 10);
                            navigate('/search');
                        }
                    }
                }}
            />
        </Search>
    );
}

export default SidebarSearch;