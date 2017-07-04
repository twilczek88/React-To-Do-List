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
                    onClick={this.handleHamburgerClick}>
                    <svg width="2rem" height="2rem" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
                </div>
            <Menu
                onRemoveAll = {this.props.onRemoveAll}
                showNew = {this.props.showNew}
                hideMenu = {this.handleHamburgerClick}/>
            </header>
        } else {
            return <header>
                <div
                    className='button hamburger'
                    onClick={this.handleHamburgerClick}>
                    <svg width="2rem" height="2rem" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
                </div>
            </header>
        }
    }
}
