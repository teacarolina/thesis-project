import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ProductCard from './ProductCard';
import axios from 'axios';

function Shop() {

    //Using state to save all products
    const [allProducts, setAllProducts] = useState([]);

    //Using useEffect to fetch all products from the API 
    useEffect( () => {
        const fetchProducts = async()=> {
            const response = await axios.get('https://fakestoreapi.com/products');
            setAllProducts(response.data);
        }
        fetchProducts();
    }, []);

    return (
        <>
        <Navbar/>
            <div className="bg-sky-900">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                        <h2 className="text-4xl tracking-tight text-gray-100">
                            <span className="block text-5xl font-bold">All Products</span>
                            <span className="block text-lg">Browse through all of our deals</span>
                        </h2>
                        <p className="text-gray-300 mt-5">
                            We strive to offer good priced high quality products in collaboration with our suppliers.
                            Our goal together with our suppliers is to take ownership of enviromental liabilities and for our employees working conditions.
                        </p>
                    </div>
                    <div className="lg:relative lg:mt-16">
                        <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" 
                             src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg" 
                             alt="Woman with shopping bag"/>
                    </div>
                </div>
            </div>
            <div className="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                {/* Using map to map through the products to set the ProductCards */}
                {allProducts.map((product) => {
                    return (<ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        rating={product.rating.rate}
                    />
                    )
                })}
            </div>      
        <Footer/>     
        </>
    )
}

export default Shop;