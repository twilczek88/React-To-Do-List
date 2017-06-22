import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    handleCheckClick = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        console.log(this.state.isChecked? `${this.props.title} checked!` : `${this.props.title} unchecked!`);
    }

    render(){
        return <li>
            <div
                onClick={this.handleCheckClick}
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'purple'
                }}/>
            <span>{this.props.title}</span>
        </li>
    }
}
