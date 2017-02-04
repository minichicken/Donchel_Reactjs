import React from 'react';
import { connect } from 'react-redux';
import { insert } from '../actions';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import update from 'react-addons-update';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

class Todo extends React.Component {
    render() {
        const todoListMap = (todo) => {
            return todo.map((todoItem, i) => {
                console.log(todoItem)
                return (
                        <TodoList
                            title={todoItem.title}
                            completed={todoItem.completed}
                            key={i}
                            number={i}
                        />
                );
            })
        }
        return (
            <div>
                { /* todo input component */ }
                <TodoInput/>
                { /* todo list component */ }
                {todoListMap(this.props.listData)}                
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    console.log(state.list.todo)
    return {
        listData: state.list.todo
    }
}

Todo = connect(mapStateToProps)(Todo);

export default Todo;