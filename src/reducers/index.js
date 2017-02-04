import { INSERT, REMOVE, MODIFY, CHECKED, SET_TITLE } from '../actions';

import { combineReducers } from 'redux';

const listInitialState = {
    todo: [
        {title: "코딩 하기", completed: true},
        {title: "운동 하기", completed: true},
        {title: "밥먹기", completed: false}
    ],
    title: '',
    onChange: (index) => {
        return 
    }
};


const list = (state = listInitialState, action) => {

    // 추가 메소드 정의
    let insertItem = (todos, item) => {
        return todos.concat(item)
    }

    // 삭제 메소드 정의
    let removeItem = (todos, index) => {
        return todos
            .slice(0,index)
            .concat(todos.slice(index+1))
    }

    // 수정 메소드 정의
    let modifyItem = (todos, action) => {
            return todos.map((item, currentIndex) => {
                if(currentIndex == action.itemIndex) item.title = action.itemTitle
                return item
        });
    }

    // 체크 메소드 정의
    let chekedItem = (todos, itemIndex) => {
        // 비동기 문제,,?
        // todos[index].completed = !todos[index].completed 
        
        // 밑으로 해결?
        return todos.map((item, currentIndex) => {
            if(currentIndex == itemIndex) item.completed = true
            return item
        });
    }

    switch(action.type) {
        case INSERT:
            console.log(state.title);
            const newTodoItem = {
                title: state.title,
                completed: false
            }
            return Object.assign({}, state, {
                todo: insertItem(state.todo, newTodoItem)
            });
        case REMOVE:
            return Object.assign({}, state, {
                todo: removeItem(state.todo, action.itemIndex)
            });
        case MODIFY:
            return Object.assign({}, state, {
                todo: modifyItem(state.todo, action)
            });
        case CHECKED:
            return Object.assign({}, state, {
                todo: chekedItem(state.todo, action.itemIndex)
            });
        case SET_TITLE:
            return Object.assign({}, state, {
                title: action.title
            });
        default: 
            return state;
    }
};

const todoApp = combineReducers({
    list
});

export default todoApp;