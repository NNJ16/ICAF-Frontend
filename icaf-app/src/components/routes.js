import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import SubmitWorkshop from "../views/workshop/SubmitWorkShop";
import SubmitResearch from "../views/researches/SubmitResearch";
import Registration from "../views/registration/Registration";
import RegisterForm from "../views/RegisterForm";
import LoginForm from "../views/LoginForm";
import MyResearches from "../views/researches/MyResearches";
import MyWorkshops from "../views/workshop/MyWorkshops";
import Workshops from "../views/workshop/Workshops";
import SubmitRegistration from "../views/registration/SubmitRegistration";

const hist = createBrowserHistory();

const Routes = () => (
    <Router history={hist}>
        <Route exact path="/" component={LoginForm}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/register" component={RegisterForm}/>
        <Route exact path="/profile/workshop/:id" component={MyWorkshops}/>
        <Route exact path="/profile/research/:id" component={MyResearches}/>
        <Route exact path="/workshop/submit" component={SubmitWorkshop}/>
        <Route exact path="/workshops" component={Workshops}/>
        <Route exact path="/research/submit" component={SubmitResearch}/>
        <Route exact path="/conference/registration" component={Registration}/>
        <Route exact path="/conference/register" component={SubmitRegistration}/>
    </Router>
);

export default Routes;