import React from 'react';

export default class NewToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                title: '',
                isChecked: false,
                id: this.props.id
            }
        }
    }

    handleAddClick = (item) => {
        if (typeof this.props.onAddNew === 'function') {
            this.props.onAddNew(item);
            const id = this.state.item.id + 1;
            this.setState({
                item: {
                    title: '',
                    isChecked: this.state.item.isChecked,
                    id: id
                }
            });
        } else {
            console.error('not a function');
        }
    }

    handleInputChange = (e) => {
        this.setState({
            item: {
                title: e.target.value,
                isChecked: false,
                id: this.state.item.id
            }
        });
    }

    render() {
        return <div className='newInput clearfix'>
            <input type='text' value={this.state.item.title} onChange={this.handleInputChange}/>
            <div className = 'ls-button' onClick= { e => this.handleAddClick( this.state.item )}>
                add
            </div>
        </div>
    }
}
