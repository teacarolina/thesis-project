import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { firstLetterToUppercase } from '../../helper';
import Header from '../header/Header';

function Category() {

    //Using useParams to get the value of the URL parameter
    const {name} = useParams();

    //Using replace function to change the URL parameter to the correct category name
    const category = {name}.name.replace('-', ' ');

    //Using state to save the category products
    const [categoryProduct, setCategoryProduct] = useState([]);

    //Using useEffect to fetch the products from the specific category the API 
    useEffect( () => {
        const fetchProducts = async()=> {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            console.log(response.data);     
            setCategoryProduct(response.data);
        }
        fetchProducts();
    }, [categoryProduct])

    return (
        <>
        <Navbar/>
            {/* Using helper function */}
            <Header
                text1={firstLetterToUppercase(category)}
                text3="Looking for your next deal? Then you are at the right place."
            />
                <div className="relative m-3 mt-10 flex flex-wrap mx-auto justify-center">
                    {/* Using map to map through the products to set the ProductCards */}
                    {categoryProduct.map((product) => {
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

export default Category;