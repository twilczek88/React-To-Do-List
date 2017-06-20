import React from 'react';
import Header from './Header/Header.jsx';
import ToDoList from './ToDoList/ToDoList.jsx';
import NewToDo from './NewToDo/NewToDo.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <Header/>
            <ToDoList/>
            <NewToDo/>
        </div>
    }
}
