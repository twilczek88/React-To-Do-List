import React from 'react';
import Header from './Header/Header.jsx';
import ToDoList from './ToDoList/ToDoList.jsx';
import NewToDo from './NewToDo/NewToDo.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isAddNewShown: false,
            id: 0
        };
    }

    onAddNew = (item) => {
        if (item.title != '') {
            const items = this.state.items.slice();
            items.push(item);
            this.setState({
                items: items,
                isAddNewShown: !this.state.isAddNewShown,
                id: this.state.id + 1
            });
        }
    }

    onCheck = (id) => {
        const items = this.state.items.slice();
        let index;
        items.forEach((el, i) => {
            if (items[i].id === id) {
                index = i;
            }
        });
        items[index].isChecked = !items[index].isChecked;
        this.setState({items: items})
    }

    onRemove = (id) => {
        const items = this.state.items.slice();
        let index;
        items.forEach((el, i) => {
            if (items[i].id === id) {
                index = i;
            }
        });
        items.splice(index, 1);
        this.setState({items: items})
    }

    removeAll = () => {
        const items = this.state.items.filter(el => {
            return el.isChecked === false;
        });
        this.setState({items: items});
    }

    showNew = () => {
        this.setState({
            isAddNewShown: !this.state.isAddNewShown
        });
    }

    render() {
        if (this.state.isAddNewShown) {
            return <div className = 'clearfix'>
                <Header showNew={this.showNew} onRemoveAll={this.removeAll}/>
                <div className='wrapper'>
                    <ToDoList items={this.state.items} onCheck={this.onCheck} onRemove={this.onRemove}/>
                    <NewToDo onAddNew={this.onAddNew} removeAll={this.removeAll} id={this.state.id}/>
                </div>
            </div>
        } else {
            return <div className = 'clearfix'>
                <Header showNew={this.showNew} onRemoveAll={this.removeAll}/>
                <div className='wrapper'>
                    <ToDoList items={this.state.items} onCheck={this.onCheck} onRemove={this.onRemove}/>
                </div>
            </div>
        }
    }
}
