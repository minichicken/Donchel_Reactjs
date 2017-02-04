import React from 'react';
import { connect } from 'react-redux'
import { insert, setTitle } from '../actions'

import TodoList from './TodoList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onKeySubmit = this.onKeySubmit.bind(this);
    }

    onTitleChange(event, newValue) {
        console.log(newValue)
        this.setState({
            title: newValue
        });
        // action -> reducer 전송 
        this.props.onUpdateTitle(newValue);
    }

    onClickSubmit(e) {
        this.props.onInsertTitle()
         this.setState({
            title: ''
        });
    }

    onKeySubmit(e) {
        console.log(e.keyCode)
        if(e.keyCode == 13) {
            this.props.onInsertTitle()
        }   
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <div>   
                <TextField
                    hintText="Please input Title..."
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <RaisedButton 
                    label="Add" 
                    primary={true}
                    onClick={this.onClickSubmit}
                />
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTitle: (value) => dispatch(setTitle(value)),
        onInsertTitle: () => dispatch(insert())
    };
}

TodoInput = connect(undefined, mapDispatchToProps)(TodoInput);

export default TodoInput;