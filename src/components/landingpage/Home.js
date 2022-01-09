import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ProductCard from '../product/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Navbar/>
            {/* Header section */}
            <div className="container mx-auto bg-sky-900 h-96 rounded-md flex items-center">
                <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
                    <h1 className="text-5xl font-bold mb-4">
                        All new trendy styles <br />
                        for everyday.
                    </h1>
                    <p className="text-lg inline-block sm:block">The main online store for the best deals.</p>
                </div>
            </div>        
            {/* Section with 3 boxes  */}   
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="h-5 w-5" 
                                 viewBox="0 0 20 20" 
                                 fill="currentColor">
                                <path fill-rule="evenodd" 
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                      clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-black">
                        Fast Customer Service
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-400">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="h-5 w-5" 
                                 viewBox="0 0 20 20" 
                                 fill="currentColor">
                                <path fill-rule="evenodd" 
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                      clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-black">
                        More for members 
                    </h5>
                    <p className="mt-2 mb-4 text-blueGray-400">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className="h-5 w-5" 
                                     viewBox="0 0 20 20" 
                                     fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-black">Daily Deals</h5>
                        <p className="mt-2 mb-4 text-blueGray-400">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </div>
            </div>
            <div class="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                <h2 className="text-4xl font-semibold text-black">Featured Products</h2>
            </div>
            <div class="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                {/*Temporary to see the design*/}
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        
            {/*INSTAGRAM FEED*/}
          
        <Footer/>
        </>
    )
}

export default Home;