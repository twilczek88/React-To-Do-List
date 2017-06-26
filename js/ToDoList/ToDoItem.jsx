import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props){
        super( props );
        this.state = {
            item: {
                title: this.props.item.title,
                isChecked: this.props.item.isChecked,
                count: this.props.item.count
            }
        }
    }

    handleCheckClick = ( index ) => {
        if( typeof this.props.onCheck === 'function' ) {
            this.props.onCheck( index )
        } else {
            console.error( 'bad input, no function parsed' );
        }
    }

    render(){
        return <li style={{display: 'flex'}}>
            <div
                onClick={e => this.handleCheckClick( this.state.item.count )}
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'purple'
                }}/>
            <span>{ this.state.item.title }</span>
        </li>
    }
}
