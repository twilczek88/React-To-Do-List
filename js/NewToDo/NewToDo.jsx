import React from 'react';

export default class NewToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                count: -1,
                title: '',
                isChecked: false
            }
        }
    }

    handleAddClick = ( item ) => {
        if( typeof this.props.onAddNew === 'function' ) {
            this.props.onAddNew( item )
            let count = this.state.item.count++;
            this.setState({
                count: count
            });
        } else {
            console.error('not a function');
        }
    }

    handleInputChange = ( e ) => {
        this.setState({
            item: {
                title: e.target.value,
                count: this.state.item.count,
                isChecked: false
            }
        });
    }

    render(){
        return <li>
            <input
                type = 'text'
                value = { this.state.item.title }
                onChange = { this.handleInputChange }
            />
            <button
                onClick = { e => this.handleAddClick( this.state.item )}
            >
                Add
            </button>
        </li>
    }
}
