import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.completed}/>
                {this.props.title}
                <button>Delete</button>
            </div>
        );
    }
}

export default TodoList;