import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

import Main from '../../views/Main';
import Login from '../../views/Login';
import Signup from '../../views/Signup';
import ClientDashboard from '../../views/clientDasboard/ClientDashboard';
import LandingPage from '../../views/LandingPage';

import ClientLayout from '../../views/layouts/clientLayout/ClientLyouts';

const Routes = () => {
    return (
        <Router>
            <Route path = '/' element = {<LandingPage/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
           
            <Route path = '/client-dashboard' element = {<ClientDashboard/>}/>

        </Router>
    );
};


export default Routes;