import React from 'react';
import Header from './Header/Header.jsx';
import ToDoList from './ToDoList/ToDoList.jsx';
import NewToDo from './NewToDo/NewToDo.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        };
    }

    onAddNew = ( item ) => {
        const items = this.state.items.slice();
        items.push( item );
        this.setState({
            items: items
        });
    }

    onCheck = ( index ) => {
        const items = this.state.items.slice();
        items[index].isChecked = !items[index].isChecked;
        this.setState({
            items: items
        });
    }

    render(){
        return <div>
            <Header/>
            <ToDoList
                items = { this.state.items }
                onCheck = { this.onCheck }
            />
            <NewToDo
                onAddNew = { this.onAddNew }
            />
        </div>
    }
}
