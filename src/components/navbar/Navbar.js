import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../../FirebaseConfig';

function Navbar() {

    //to get current logged in user
    const authentication = getAuth();

    //to set a state which contains the current logged in user
    const [user, setUser] = useState({});

    //firebase auth function to get the current logged in user
    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
    });

    //get the collection from db 
    const cartItemsCollectionRef = collection(db, 'cartItems');

    //function that get the cart items and saves them in local storage to display them on cart page
    const setCart = async () => {
        const data = await getDocs(cartItemsCollectionRef);
        const mapfunction = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        const cartItemIds = mapfunction.map(index => [index.productId]);        
        localStorage.setItem("Cart Item Ids", JSON.stringify(cartItemIds));
    }

    return (
        <>
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                            <Link to="/">Deal.se</Link></p>
                    </div>
                    <div className="flex md:hidden">
                        <button type="button" 
                                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" 
                                aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" 
                                 className="h-6 w-6 fill-current">
                            <path fillRule="evenodd" 
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="md:flex items-center">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <p className="my-1 text-sm text-gray-700 font-medium hover:text-sky-500 md:mx-4 md:my-0.5">
                            <Link to="/shop">Shop</Link></p>
                        {/* Dropdown Menu */}
                        <div className="relative inline-block text-left dropdown">
                            <span className="rounded-md ">
                                <button className="inline-flex justify-center w-full px-4 text-sm font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-sky-500 focus:outline-none active:text-gray-800" 
                                        type="button" 
                                        aria-haspopup="true" 
                                        aria-expanded="true" 
                                        aria-controls="headlessui-menu-items-117">
                                    <span>Categories</span>
                                    <svg className="w-5 h-5 ml-2 -mr-1" 
                                         viewBox="0 0 20 20" 
                                         fill="currentColor">
                                             <path fillRule="evenodd" 
                                                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                                   clipRule="evenodd">
                                             </path>
                                    </svg>
                                </button>
                            </span>
                            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-999">
                                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                    <div className="py-1">
                                        <p tabIndex="0" 
                                           className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:text-sky-500" 
                                           role="menuitem">
                                            <Link to={`/category/electronics`}>Electronics</Link>
                                        </p>
                                        <p tabIndex="1" 
                                           className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:text-sky-500" 
                                           role="menuitem">
                                            <Link to={`/category/jewelery`}>Jewelery</Link>
                                        </p>
                                        <p tabIndex="2" 
                                           className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:text-sky-500" 
                                           role="menuitem">
                                            <Link to={`/category/men's-clothing`}>Men's clothing</Link>
                                        </p>
                                        <p tabIndex="3" 
                                           className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:text-sky-500" 
                                           role="menuitem">
                                            <Link to={`/category/women's-clothing`}>Women's clothing</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Dropdown Menu */}
                        <p className="my-1 text-sm text-gray-700 font-medium hover:text-sky-500 md:mx-4 md:my-0.5">
                            <Link to="/about">About</Link></p>
                        <p className="my-1 text-sm text-gray-700 font-medium hover:text-sky-500 md:mx-4 md:my-0.5">
                            <Link to="/contact">Contact</Link></p>
                    </div>
                    {user === null ? 
                    <div className="flex justify-center md:block">
                        <p className="my-1 text-sm text-gray-700 font-medium hover:text-sky-500 md:mx-4 md:my-0">
                            <Link to="/login">
                                <svg className="h-5" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                <path strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        </p>
                    </div>
                    : <div className="flex justify-center md:block">
                        <p className="my-1 text-sm text-gray-700 font-medium hover:text-sky-500 md:mx-4 md:my-0">
                            <Link to="/my-page">
                                <svg className="h-5" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                <path strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        </p>
                     </div>
                }
                    <div className="flex justify-center md:block">
                        <p className="relative text-gray-700 hover:text-sky-500">
                            <Link to="/checkout"
                                  onClick={setCart}>
                            <svg className="h-5 w-5" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                            </svg>
                            <span className="absolute top-0 left-3 rounded-full bg-sky-900 text-white p-1 text-xs"></span>
                            <span className="animate-ping absolute top-0 left-3 rounded-full bg-sky-900 text-white p-1 text-xs"></span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </nav>  
        </>
    )
}

export default Navbar;