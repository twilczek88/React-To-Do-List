import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                title: this.props.item.title,
                isChecked: this.props.item.isChecked,
                id: this.props.item.id
            }
        }
    }

    handleCheckClick = (id) => {
        if (typeof this.props.onCheck === 'function') {
            this.props.onCheck(id);
        } else {
            console.error('bad input, no function parsed');
        }
    }

    handleRemoveClick = (id) => {
        if (typeof this.props.onRemove == 'function') {
            this.props.onRemove(id);
        } else {
            console.error('bad props! no function passed');
        }
    }

    render() {
        let style;
        let icon;
        if (this.props.item.isChecked) {
            style = {
                width: '1.5rem',
                height: '1.5rem'

                // backgroundColor: 'purple'
            }
            icon = <svg className='icon' width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg>
        } else {
            style = {
                width: '1.5rem',
                height: '1.5rem'
                // border: '1px solid purple'
            }
            icon = <svg className='icon' width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1312 256h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/></svg>
        }

        return <li className='clearfix'>
            <div className='checker' onClick={e => this.handleCheckClick(this.state.item.id)} style={style}>
                {icon}
            </div>
            <span>{this.state.item.title}</span>
            <div
                className = 'ls-button'
                onClick={e => this.handleRemoveClick(this.state.item.id)}>
                <svg className='icon' width="0" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>
                <span>remove</span>
            </div>
        </li>
    }
}
