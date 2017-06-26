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

    onCheck = ( id ) => {
        const items = this.state.items.slice();
        let index;
        items.forEach((el, i) => {
            if( items[i].id === id ) {
                index = i;
            }
        });
        items[index].isChecked = !items[index].isChecked;
        this.setState({
            items: items
        })
    }

    onRemove = ( id ) => {
        const items = this.state.items.slice();
        let index;
        items.forEach((el, i) => {
            if( items[i].id === id ) {
                index = i;
            }
        });
        items.splice(index, 1);
        this.setState({
            items: items
        })
    }

    render(){
        return <div>
            <Header/>
            <ToDoList
                items = { this.state.items }
                onCheck = { this.onCheck }
                onRemove = { this.onRemove }
            />
        <NewToDo
                onAddNew = { this.onAddNew }
            />
        </div>
    }
}
