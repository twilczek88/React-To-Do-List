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
            mobile: false,
            id: 0
        };
    }

    componentWillMount() {
        const mobile = window.matchMedia( 'screen and (max-width: 640px)' );

        (() => {
            if (mobile.matches) {
                console.log('matches!');
                this.setState({
                    mobile: true
                });
            } else {
                console.log('doesn\'t match!');
                this.setState({
                    mobile: false
                });
            }
        })();
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
        const header = <h1>
            React to-do list
        </h1>

    if (this.state.isAddNewShown) {
            return <div className = 'wrapper clearfix'>
                {header}
                <Header showNew={this.showNew} onRemoveAll={this.removeAll}/>
                <div className='container'>
                    <NewToDo onAddNew={this.onAddNew} removeAll={this.removeAll} id={this.state.id}/>
                    <ToDoList items={this.state.items} onCheck={this.onCheck} onRemove={this.onRemove}/>
                </div>
            </div>
        } else {
            return <div className = 'wrapper clearfix'>
                {header}
                <Header showNew={this.showNew} onRemoveAll={this.removeAll}/>
                <div className='container'>
                    <ToDoList items={this.state.items} onCheck={this.onCheck} onRemove={this.onRemove}/>
                </div>
            </div>
        }
    }
}
