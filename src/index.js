import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '10px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <App/>
    </AlertProvider>,
    document.getElementById('root')
);
