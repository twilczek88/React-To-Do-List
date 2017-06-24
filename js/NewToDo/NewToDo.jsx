import React from 'react';

export default class NewToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    handleAddClick = ( title ) => {
        if( typeof this.props.onAddNew === 'function' ) {
            this.props.onAddNew( title )
        } else {
            console.error('not a function');
        }
    }

    handleInputChange = ( e ) => {
        this.setState({
            title: e.target.value
        });
    }

    render(){
        return <li>
            <input
                type = 'text'
                value = { this.state.title }
                onChange = { this.handleInputChange }
            />
            <button
                onClick = { e => this.handleAddClick( this.state.title )}
            >
                Add
            </button>
        </li>
    }
}
