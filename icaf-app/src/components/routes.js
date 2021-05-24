import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();

const Routes = () => (
    <Router history={hist}>

    </Router>
);

export default Routes;