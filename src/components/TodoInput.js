import React from 'react';
import TodoList from './TodoList';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {title: "item1"},
                {title: "item2"},
                {title: "item3"}
            ]
        }

    }
    // this.addHandleClick = this.addHandleClick.bind(this);
    // addHandleClick() {
    // }

    render() {
        const TodoListMap = (todo) => {
            return todo.map((todoItem, i) => {
                return (<TodoList todoItem={todoItem} key={i}/>);
            })
        }
        return (
            <div>
                <input type="text"/>
                <button onClick="">Add</button>
                 <div>
                    {TodoListMap(this.state.todo)}
                </div>
            </div>
        );
    }
}

export default TodoInput;