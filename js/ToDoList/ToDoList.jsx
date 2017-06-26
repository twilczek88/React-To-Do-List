import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default class ToDoList extends React.Component {
    constructor( props ){
        super( props );
        // this.state = {
        //     items: this.props.items
        // }
    }



    render(){
        const items = this.props.items.slice()
        const toDoItems = items.filter(el => {
            return el.isChecked == false;
        }).map(el => {
            return <ToDoItem
                key = { el.count }
                item = { el }
                onAddNew = { this.props.onAddNew }
                onCheck = { this.props.onCheck }
            />
        });

        const doneItems = items.filter(el => {
            return el.isChecked == true;
        }).map(el => {
            return <ToDoItem
                key = { el.count }
                item = { el }
                onAddNew = { this.props.onAddNew }
                onCheck = { this.props.onCheck }
            />
        });


        return <div>
            <h1>I'm the main list</h1>
            <ul>
                { toDoItems }
                <hr/>
                { doneItems }
            </ul>
        </div>
    }
}
