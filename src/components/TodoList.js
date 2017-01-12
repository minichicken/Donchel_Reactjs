import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.todoItem.title}
                <button>Delete</button>
            </div>
        );
    }
}

export default TodoList;