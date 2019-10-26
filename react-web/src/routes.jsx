import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Search from './pages/Search';

const Routes = () => {
    return (
        <Switch>
            <Routes
                exact
                path="/"
                component={ Search }
            />
            <Route
                exact
                path="/teste"
                component={ () => (<div>teste</div>)} 
            /> 
        </Switch>
    );
};

export default Routes;