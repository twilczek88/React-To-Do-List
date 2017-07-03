import React from 'react';
import ReactDOM from 'react-dom';

import App from './ToDoComp.jsx'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>, document.querySelector('#app'));
});
