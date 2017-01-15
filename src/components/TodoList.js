import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleTodoRemove = this.handleTodoRemove.bind(this);
        this.handleTodoCheck = this.handleTodoCheck.bind(this);
        this.handleTodoEdit = this.handleTodoEdit.bind(this);
    }

    handleTodoRemove() {
        this.props.todoRemove(this.props.number);
    }

    handleTodoCheck() {
        this.props.todoCheck(this.props.number)
    }

    handleTodoEdit() {
        alert('Edit');
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
                <MenuItem primaryText="Paragraph" leftIcon={<b></b>} />
                <MenuItem primaryText="Remove" leftIcon={<Delete />} onTouchTap={this.handleTodoRemove}/>
            </IconMenu>
        );
        
        return (
            <div>
                    <ListItem
                        leftCheckbox={<Checkbox checked={this.props.completed} onCheck={this.handleTodoCheck} />}
                        rightIconButton={rightIconMenu}
                        primaryText={this.props.title}
                    />

                    <Divider inset={true} />
                    {/*<input type="checkbox" onChange={this.handleTodoCheck}/>*/}
                    {/*this.props.title*/}
                    {/*<button onClick={this.handleTodoRemove}>Delete</button><button onClick={this.handleTodoEdit}> Edit</button>*/}
            </div>
        );
    }
}

export default TodoList;