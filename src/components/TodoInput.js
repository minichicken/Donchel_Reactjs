import React from 'react';
import TodoList from './TodoList';
import AutoComplete from 'material-ui/AutoComplete';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: []
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(value) {
        this.setState({
            title: [
                value
            ],
        })
        console.log(this.state.title[0] )
    }

    handleSubmit(e) {
        const newTodoItem = {
            title: this.state.title[0],
            completed : false
        }
        // 부모 컴포넌트에서 받은 프롭스 메소드를 사용.
        this.props.todoInsert(newTodoItem);
        // insert 후 
        this.setState({
            title: []
        });
    }


    render() {
        return (
            <div>   
                    <AutoComplete
                        hintText="Please input Title..."
                        dataSource={this.state.title}
                        onUpdateInput={this.handleTitleChange}
                    />
                    <button type="button" onClick={this.handleSubmit}>Add</button>
            </div>
        );
    }
}

export default TodoInput;