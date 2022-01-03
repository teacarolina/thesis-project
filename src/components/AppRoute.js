import React from 'react';
import Home from './landingpage/Home';

import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

export default function AppRoute() {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
        </> 
    )
}