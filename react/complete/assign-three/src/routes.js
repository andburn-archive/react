import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

const routes = () => (
    <Switch>
        <Route path="/users" component={Users} />
        <Route path="/courses/:id/:title" component={Course} />
        <Route path="/courses" component={Courses} />          
        <Redirect exact from="/" to="/courses" />
        <Route render={() => <h1>Page not found</h1>} />
    </Switch>
);

export default routes;