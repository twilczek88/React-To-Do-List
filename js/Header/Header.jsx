import React from 'react';
import Menu from './Menu.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuShown: false
        }
    }

    handleHamburgerClick = () => {
        this.setState({
            isMenuShown: !this.state.isMenuShown
        })
    }

    render() {
        if (this.state.isMenuShown) {
            return <header>
                <div
                    className='button hamburger'
                    onClick={this.handleHamburgerClick}
                />
            <Menu
                onRemoveAll = {this.props.onRemoveAll}
                showNew = {this.props.showNew}
                hideMenu = {this.handleHamburgerClick}/>
            </header>
        } else {
            return <header>
                <div
                    className='button hamburger'
                    onClick={this.handleHamburgerClick}
                />
            </header>
        }
    }
}
