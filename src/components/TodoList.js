import React from 'react';
import { connect } from 'react-redux'
import { remove, modify, checked } from '../actions'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            open: false
        }
        //   
        this.onTodoRemove = this.onTodoRemove.bind(this);
        this.onTodoCheck = this.onTodoCheck.bind(this);
        this.onTodoModify = this.onTodoModify.bind(this);
        this.onModalTodoModify = this.onModalTodoModify.bind(this);
        
        // modal 
        this.onTitleChange = this.onTitleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }

    onTodoRemove() {
        console.log('oh', this.state.completed);
        this.props.onRemoveTodo(this.props.number);
    }

    onTodoCheck(event, checked) {
        this.props.onCheckedTodo(this.props.number);
    }

    onModalTodoModify() {
        this.setState({
            title: this.props.title,
            open: true
        })
    }

    onTodoModify() {
        this.props.onModifyTodo(this.state.title, this.props.number);
    }
    
    onTitleChange(event, value) {
        this.setState({
            title: value
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Modify" leftIcon={<b></b>}  onTouchTap={this.onModalTodoModify}/>
                <MenuItem primaryText="Remove" leftIcon={<Delete />} onTouchTap={this.onTodoRemove}/>
            </IconMenu>
        ); 
       
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Edit"
                onClick={this.onTodoModify}
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
           <div>
                <ListItem
                    leftCheckbox={<Checkbox onCheck={this.onTodoCheck} defaultChecked={this.props.completed}/>}
                    rightIconButton={rightIconMenu}
                    primaryText={this.props.title}
                />
                <Dialog
                    title="Title Modification !"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField
                        hintText="Please input Title..."
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        fullWidth={true}
                    />
                </Dialog>

            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onRemoveTodo: (index) => dispatch(remove(index)),
        onCheckedTodo: (index) => dispatch(checked(index)),
        onModifyTodo: (title, index) => dispatch(modify(title, index))
    }
}

TodoList = connect(undefined, mapDispatchToProps)(TodoList);


export default TodoList;