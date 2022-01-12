import React from 'react';
import Home from './landingpage/Home';
import AboutUs from './company/AboutUs';
import ContactForm from './contact/ContactForm';
import Policy from './company/Policy';
import Login from './login/Login';
import Register from './register/Register';
import Category from './product/Category';
import Cart from './checkout/Cart';
import User from './login/User';
import Shop from './product/Shop';
import SingleProductPage from './product/SingleProductPage';

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
                <Route path='/category/:name' element={<Category/>}/>
                <Route path='/checkout' element={<Cart/>}/>
                <Route path='/my-page' element={<User/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/product/:id' element={<SingleProductPage/>}/>
            </Routes>
        </Router>
        </> 
    )
}