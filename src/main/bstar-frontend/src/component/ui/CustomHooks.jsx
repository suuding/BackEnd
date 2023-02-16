import {useState} from "react";

//사이드바, 검색 페이지 입력 연동을 위해 사용 - SearchPage, Sidebar
export const store = {
    state: "",
    setState(value){
        this.state = value
        this.setters.forEach(setter => setter(this.state))
    },
    setters: []
}

store.setState = store.setState.bind(store);

export function useStore(){
    const [keyword, setKeyword] = useState(store.state);
    if(!store.setters.includes(setKeyword)){
        store.setters.push(setKeyword)
    }
    return [keyword, store.setState]
}

//사이드바 상태 전달 - SearchPage, Sidebar
export const sideState = {
    state: 0,
    setState(value){
        this.state = value
        this.setters.forEach(setter => setter(this.state))
    },
    setters: []
}

sideState.setState = sideState.setState.bind(sideState);

export function useSideState(){
    const [state, setState] = useState(sideState.state);
    if(!sideState.setters.includes(setState)){
        sideState.setters.push(setState)
    }
    return [state, sideState.setState]
}

//검색 페이지에서 해당 글 보여주기 - SearchPage, ContentGrid
export const visible = {
    state: false,
    setState(value){
        this.state = value
        this.setters.forEach(setter => setter(this.state))
    },
    setters: []
}

visible.setState = visible.setState.bind(visible);

export function useVisible(){
    const [state, setState] = useState(visible.state);
    if(!visible.setters.includes(setState)){
        visible.setters.push(setState)
    }
    return [state, visible.setState]
}