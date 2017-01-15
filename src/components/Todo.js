import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import update from 'react-addons-update';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {title: "코딩 하기", completed: true},
                {title: "운동 하기", completed: false},
                {title: "밥먹기", completed: true}
            ]
        }

        this.handleTodoInsert = this.handleTodoInsert.bind(this);     
        this.handleTodoRemove = this.handleTodoRemove.bind(this);  
        this.handleTodoCheck = this.handleTodoCheck.bind(this);
    }

    handleTodoInsert(newTodoItem) {
        this.setState({
            todo : update(
                this.state.todo,
                {
                    $push: [newTodoItem]
                }
            )
        });
    } 

    handleTodoRemove(index) {
        this.setState({
            todo : update(
                this.state.todo,
                {
                    $splice: [[index, 1]]
                }
            )
        });
    }

    handleTodoCheck(index) {
        this.setState({
            todo : update(
                this.state.todo,
                {
                    [index] : {
                        completed: {$set : !this.state.todo[index].completed}
                    }
                }
            )
        });
        
    }
    render() {
        const todoListMap = (todo) => {
            return todo.map((todoItem, i) => {
                return (
                        <TodoList title={todoItem.title} 
                                completed={todoItem.completed} 
                                key={i}
                                number={i}
                                todoRemove={this.handleTodoRemove}
                                todoCheck={this.handleTodoCheck}/>
                );
            })
        }

        return (
            <div>
                { /* todo input component */ }
                <TodoInput todoInsert={this.handleTodoInsert}/>
                { /* todo list component */ }
                <List>
                    {todoListMap(this.state.todo)}
                </List>
                
            </div>
        );
    }
}

export default Todo;