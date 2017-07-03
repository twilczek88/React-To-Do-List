import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    showNewItemMenu = () => {
        if (typeof this.props.showNew === 'function') {
            this.props.showNew();
            this.props.hideMenu();

        } else {
            console.error('no function parsed');
        }
    }

    onRemoveAllClick = () => {
        if(typeof this.props.onRemoveAll === 'function') {
            this.props.onRemoveAll();
            this.props.hideMenu();
        } else {
            console.error('no function parsed');
        }
    }

    render() {
        return <ul>
            <li><div onClick={this.showNewItemMenu}>Add new item</div></li>
            <li><div  onClick={this.onRemoveAllClick}>Remove all completed items</div></li>
        </ul>
    }
}
