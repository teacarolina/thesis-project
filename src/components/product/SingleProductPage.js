import React, {useEffect, useState} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { collection, addDoc, doc, getDocs } from 'firebase/firestore/lite';
import db from '../../FirebaseConfig';
import { getAuth } from "firebase/auth";

function SingleProductPage() {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        
        const carts = async()=>{
            
            const data = await getDocs(cartCollectionRef);
            setCarts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        carts()
    }, [])

    console.log("carts", carts)

    const navigate = useNavigate();

    //Using useParams to get the value of the URL parameter
    const {id} = useParams();

    //Using state to save the specific product
    const [product, setProduct] = useState([]);

    //Using useEffect to fetch the specific products from the API 
    useEffect( () => {
        const fetchProduct = async()=> {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data);     
            setProduct(response.data);
        }
        fetchProduct();
    }, [])

    //to get the cart collection from the db
    const cartCollectionRef = collection(db, 'carts');
    const cartItemsCollectionRef = collection(db, 'cartItems');
  
    //function to add product to cart
    const addToCart = async () => {
        const authentication = getAuth();
        const user = authentication.currentUser;
        if(!user) {
            navigate("/login");
        } else {
            //????????????????????????????
            //this cart id where user id is?
            const thisCartId = carts[0].id;
            console.log(thisCartId)
            localStorage.setItem("Cart Id", thisCartId)
            const thisProductId = Number({id}.id);
            await addDoc(cartItemsCollectionRef, {productId: thisProductId, cartId: thisCartId});
    }}

    

    return (
        <>
        <Navbar/>
        <div className="min-w-screen min-h-screen bg-sky-50 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            {/* Explain + add alt image texts on all images */}
                            <img src={product.image}
                                 className="w-1/2 relative z-10" 
                                 alt=""/>
                            <div className="border-4 border-sky-50 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">{product.title}</h1>
                            <p className="text-sm">{product.description}</p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">$</span>
                                <span className="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                            </div>
                            <div className="inline-block align-bottom">
                                <button className="bg-sky-900 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold"
                                        onClick={addToCart}>
                                    {/* Add icon? */}
                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        <Footer/> 
        </>
    )
}

export default SingleProductPage;