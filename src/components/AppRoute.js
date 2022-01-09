import React from 'react';
import Home from './landingpage/Home';
import AboutUs from './company/AboutUs';
import ContactForm from './contact/ContactForm';
import Policy from './company/Policy';
import Login from './login/Login';
import Register from './register/Register';

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
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contact' element={<ContactForm/>}/>
                <Route path='/policy' element={<Policy/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </Router>
        </> 
    )
}