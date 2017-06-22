import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default class ToDoList extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            items: [],
            doneItems: [],
            count: 0
        }
    }

    componentWillReceiveProps( title ){
        const items = this.state.items.slice();
        items.push( <ToDoItem
            key = {`${title.newListItemTitle}-${this.state.count}`}
            title={title.newListItemTitle}/> );
        this.setState({
            items: items,
            count: this.state.count+1
        });
    }

    render(){
        const itemArray = this.state.items.slice();
        const doneItemArray = this.state.doneItems.slice();
        return <div>
            <h1>I'm the main list</h1>
            <ul>
                { itemArray }
            </ul>
        </div>
    }
}
