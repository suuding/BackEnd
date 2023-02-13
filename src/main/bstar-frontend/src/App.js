import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from '../src/component/page/LoginPage';
import WritePage from './component/page/WritePage';
import MainPage from './component/page/MainPage';
import SearchPage from './component/page/SearchPage';
import SettingPage from './component/page/SettingPage';
import FriendPage from './component/page/FriendPage';
import FirstPage from './component/page/FirstPage';
import PostPage from './component/page/PostPage';
import PostUpdatePage from './component/page/PostUpdatePage';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import CommentBox from "./component/ui/CommentBox";
import styled from "styled-components";
import {Input} from "antd";

function App() {

    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<FirstPage/>}/>
            <Route path="main" element={<MainPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="write" element={<WritePage/>}/>
            <Route path="setting" element={<SettingPage/>}/>
            <Route path="friend" element={<FriendPage/>}/>
            <Route path="/posts/:postId" element={<PostPage/>}/>
            <Route path="/posts/update/:postId" element={<PostUpdatePage/>}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
