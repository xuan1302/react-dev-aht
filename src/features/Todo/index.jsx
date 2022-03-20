import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import TodoList from './components/TodoList';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TotoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>

            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
            </Switch>
        </div>
    );
}

export default TotoFeature;