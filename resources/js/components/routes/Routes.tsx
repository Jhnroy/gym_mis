import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

import Main from '../../views/Main';
import Login from '../../views/Login';
import ClientDashboard from '../../views/clientDasboard/ClientDashboard';

import ClientLayout from '../../views/layouts/clientLayout/ClientLyouts';

const Routes = () => {
    return (
        <Router>
            <Route path = '/' element = {<Main/>}/>
            <Route path = '/login' element = {<Login/>}/>
           
            <Route path = '/client-dashboard' element = {<ClientDashboard/>}/>

        </Router>
    );
};


export default Routes;