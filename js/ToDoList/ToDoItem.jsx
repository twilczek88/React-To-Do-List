import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props){
        super( props );
        this.state = {
            isChecked: this.props.isChecked,
        }
    }

    handleCheckClick = ( title ) => {
        if( typeof this.props.onCheck === 'function' ) {
            this.props.onCheck( title )
        } else {
            console.error( 'bad input, no function parsed' );
        }
    }

    render(){
        return <li>
            <div
                onClick={e => this.handleCheckClick( this.props.title )}
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'purple'
                }}/>
            <span>{ this.props.title }</span>
        </li>
    }
}
