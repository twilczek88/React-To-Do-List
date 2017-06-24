import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default class ToDoList extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            items: [],
            doneItems: [],
            isChecked: this.props.isChecked,
            count: 0
        }
    }

    componentWillReceiveProps( props ) {
        //copy the state to items array
        const items = this.state.items.slice();
        const doneItems = this.state.doneItems.slice();

        if( items.indexOf( props.newTitle ) == -1 ) {
            console.log('wykonałem pierwszą operację');
            items.push( props.newTitle );
            if(doneItems.indexOf(props.newTitle) != -1) {
                doneItems.splice( doneItems.indexOf( props.newTitle ), 1 );
                console.log(`wycięto ${props.newTitle}`);
            }
            this.setState({
                doneItems: doneItems,
                items: items,
                count: props.id + 1
            });
        } else if ( this.state.isChecked != props.isChecked ) {
            console.log('wykonałem drugą operację');
            doneItems.push( props.newTitle );
            if (doneItems.indexOf(props.newTitle) != -1) {
                items.splice( items.indexOf( props.newTitle ), 1 );
                console.log(`wycięto ${props.newTitle} w ${items.indexOf(props.newTitle)}`);
            }
            this.setState({
                items: items,
                doneItems: doneItems,
                count: props.id + 1
            });
        }


    }

    // if ( props.isChecked != this.state.isChecked ){
    //           doneItems.push( props.newTitle );


    render(){
        const itemArray = this.state.items.map( item => {
            return <ToDoItem
                key = { `${this.state.count}-${item}` }
                isChecked = { false }
                title = { item }
                onCheck = { this.props.onCheck }
            />
        });
        const doneItemArray = this.state.doneItems.map( item => {
            return <ToDoItem
                key = { `${this.state.count}-${item}` }
                isChecked = { true }
                title = { item }
                onCheck = { this.props.onCheck }
            />
        });

        //ToDoListMusiWykryć zmiany w propsach i zastosować je dla render
        return <div>
            <h1>I'm the main list</h1>
            <ul>
                { itemArray }
                <hr/>
                { doneItemArray }
            </ul>
        </div>
    }
}
