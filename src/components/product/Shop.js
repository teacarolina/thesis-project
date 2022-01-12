import React, {useEffect, useState} from 'react';
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
            <div class="relative m-3 mt-10 flex flex-wrap mx-auto pl-20">
                <h2 className="text-4xl font-semibold text-black">All Products</h2>
            </div>
            <div className="relative m-3 mt-10 flex flex-wrap mx-auto pl-20">
                    <svg className="w-2 h-2 absolute top-0.5 left-40 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        {/* Implement sorting by ASC or DESC of the results? */}
                        <option>Order by</option>
                        <option>ASC</option>
                        <option>DESC</option>
                    </select>
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
                    />
                    )
                })}
            </div>      
        <Footer/>     
        </>
    )
}

export default Shop;