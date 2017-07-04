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
            icon = <div><svg width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg></div>
        } else {
            style = {
                width: '1.5rem',
                height: '1.5rem'
                // border: '1px solid purple'
            }
            icon = <div><svg width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1312 256h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zm288 160v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/></svg></div>
        }

        return <li style={{
            display: 'flex'
        }}>
            <div onClick={e => this.handleCheckClick(this.state.item.id)} style={style}>
                {icon}
            </div>
            <span>{this.state.item.title}</span>
            <button onClick={e => this.handleRemoveClick(this.state.item.id)}>
                remove
            </button>
        </li>
    }
}
