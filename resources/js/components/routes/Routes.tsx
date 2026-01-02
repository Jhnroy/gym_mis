import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Route path = '/' element = {<> Hi test app</>}/>
        </Router>
    );
};


export default Routes;