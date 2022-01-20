import React, {useEffect, useState} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ProductCard from '../product/ProductCard';
import axios from 'axios';
import Header from '../header/Header';

function Home() {

    //Using state to save the featured products
    const [featuredProducts, setFeaturedProducts] = useState([]);

    //Using useEffect to fetch 3 products from the API 
    useEffect( () => {
        const fetchProducts = async()=> {
            const response = await axios.get('https://fakestoreapi.com/products?limit=3');
            setFeaturedProducts(response.data);
        }
        fetchProducts();
    }, []);


    return (
        <>
        <Navbar/>
            <Header
            text1="All new top deals for"
            text2="everyday life."
            text3="The online store with the best deals."/>    
            {/* Section with 3 boxes  */}   
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="h-5 w-5" 
                                 viewBox="0 0 20 20" 
                                 fill="currentColor">
                                <path fillRule="evenodd" 
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                      clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-black">
                        Fast Customer Service
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-400">
                        We offer a great customer service experience thanks to our deal
                        team that is available for you.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="h-5 w-5" 
                                 viewBox="0 0 20 20" 
                                 fill="currentColor">
                                <path fillRule="evenodd" 
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                                      clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-black">
                        More for members 
                    </h5>
                    <p className="mt-2 mb-4 text-blueGray-400">
                        As a member in our deal club you will get more for your money
                        and the latest deals directly to your inbox.
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
                            Every day is a new day to find good deals. We update our deals
                            on a daily basis. Never miss a good deal!
                        </p>
                    </div>
            </div>
            <div class="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                <h2 className="text-4xl font-semibold text-black">Featured Products</h2>
            </div>
            <div class="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                {/* Using map to map through the products to set the ProductCards */}
                {featuredProducts.map((product) => {
                    return (<ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                    )
                })}
            </div>
        
            {/*INSTAGRAM FEED*/}
          
        <Footer/>
        </>
    )
}

export default Home;