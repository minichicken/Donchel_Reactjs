import React from 'react';
import TodoList from './TodoList';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {title: "코딩 하기", completed: true},
                {title: "운동 하기", completed: false},
                {title: "밥먹기", completed: true}
            ]
        }

        this.addHandleClick = this.addHandleClick.bind(this);
        
    }
    // this.addHandleClick = this.addHandleClick.bind(this);
    // addHandleClick() {
    // }
    addHandleClick() {

    }

    render() {
        const todoListMap = (todo) => {
            return todo.map((todoItem, i) => {
                return (<TodoList title={todoItem.title} completed={todoItem.completed} key={i}/>);
            })
        }
        
        return (
            <div>
                <input type="text" />
                <button onClick="">Add</button>
                 <div>
                    {todoListMap(this.state.todo)}
                </div>
            </div>
        );
    }
}

export default TodoInput;