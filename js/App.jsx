import React from 'react';
import Header from './Header/Header.jsx';
import ToDoList from './ToDoList/ToDoList.jsx';
import NewToDo from './NewToDo/NewToDo.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            newTitle: '',
            isChecked: false
        };
    }

    onAddNew = ( title ) => {
        this.setState({
            isChecked : false,
            newTitle: title,
            id: this.state.id + 1
        });
    }

    onCheck = ( title ) => {
        this.setState({
            id: this.state.id + 1,
            isChecked: !this.state.isChecked,
            newTitle: title
        });
    }

    render(){
        return <div>
            <Header/>
            <ToDoList
                id = { this.state.id }
                newTitle = { this.state.newTitle }
                isChecked = { this.state.isChecked }
                onCheck = { this.onCheck }
            />
            <NewToDo
                onAddNew = { this.onAddNew }
            />
        </div>
    }
}
