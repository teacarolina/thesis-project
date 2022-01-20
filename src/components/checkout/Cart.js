import React, {useEffect, useState} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { collection, addDoc, doc, getDocs } from 'firebase/firestore/lite';
import db from '../../FirebaseConfig';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

function Cart() {

    //stripe 
    const stripePromise = loadStripe('pk_test_51KJdEPEfTfK4wgSIKX6K2bJ4nhkbxSjXciiyWJCJJrQ71IkzHmOPEP0SvtpfeCQP87XsSrhxzYgGXj7DOXav4Shm00QmCtVtsK');

    const createCheckoutSession = async (event) => {
        
        const stripe = await stripePromise;
        //error "have to have quantity"?
        //test data to try stripe connection
        const quantity = 3; 
        const name = "hej";
                                                                           
        const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name, price:cartSum, quantity:quantity});
    
        const sessionId = response.data.id;
    
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
    
        if (result.error) {
          console.log(result.error.message);
        }
    };

    const [cartItems, setCartItems] = useState([])

    const [cartSum, setCartSum] = useState("");


    //to get the cart items collection from the db
    /* const cartItemsCollectionRef = collection(db, 'cartItems');

    useEffect(() => {
        
        //???????????????
        const cart = async()=>{
            
            const data = await getDocs(cartItemsCollectionRef);
            setCartItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        cart();
        console.log(cartItems)
        
    }, []) */

    //Using state to save the specific product
    const [products, setProducts] = useState([]);

    //testing for now
    const ids = [[1],[2],[3]]

    //Using useEffect to fetch the specific products from the API 
    /* useEffect( () => {
        //hämtar inte alltid alla id??
        const fetchProducts = async()=> {
            ids.map(async(id) => {
                const details = await axios.get(`https://fakestoreapi.com/products/${id}`);
                console.log(details)
                //const test = [details]
                //console.log(test)
                //setProducts([...products, details])
                
            })
            //console.log(response.data);     
            //await setProducts(response.data);
            //const reply = await Promise.all(response)
            //console.log(reply)
            
        }
        fetchProducts();
    }, []) */
    
    useEffect(async () => {
        const promises = ids.map(id => {
            return axios.get(`https://fakestoreapi.com/products/${id}`)
        })
        const result = await Promise.all(promises)
        setProducts(result)
        //console.log(result[0].data.price)
        /* for(const i of result) {
            //console.log(i.data.price);
            const sum = i.data.price
            console.log(sum)
        } */
        /* result.forEach(function(element) { 
            console.log(element.data.price);
            var x =+ element.data.price;
            console.log(x);
        }) */
        const sum = result.map(element => element.data.price);
        console.log(sum);
        const totalPrice = sum.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        })
        console.log(totalPrice);
        setCartSum(totalPrice);
    }, [])

    return (
        <>
        <Navbar/>
          <div className="h-screen grid grid-cols-3">
            <div className="lg:col-span-2 col-span-3 bg-sky-50 space-y-8 px-12">
                <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                    <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                        <div className="text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="w-6 sm:w-5 h-6 sm:h-5" 
                                 fill="none" 
                                 viewBox="0 0 24 24" 
                                 stroke="currentColor">
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium ml-3">Checkout</div>
                    </div>
                    <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                        Controll the items in your cart and procced to payment.
                    </div>
                </div>
                <div className="col-span-1 bg-white lg:block hidden">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Your Cart</h1>
                        <ul className="py-6 border-b space-y-6 px-8">
                            <li className="grid grid-cols-6 gap-2 border-b-1">
                                {products.map((product) => {
                                    return (<>
                                <div className="col-span-1 self-center">
                                    <img src={product.data.image} 
                                         alt="Product"   
                                         className="rounded w-1/2"/>
                                </div>
                                <div className="flex flex-col col-span-3 pt-2">
                                    <span className="text-gray-600 text-md font-semi-bold">{product.data.title}</span>
                                </div>
                                <div className="col-span-2 pt-3">
                                    <div className="flex items-center space-x-2 text-sm justify-between">
                                        <div className="w-10 h-8">
                                            <div className="relative flex flex-row w-full h-8">
                                                <input type="number" 
                                                       min="1" 
                                                       max="10" 
                                                       className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                            </div>
                                        </div>
                                        <span className="text-green-400 font-semibold inline-block">${product.data.price}</span>
                                        <button>
                                            <svg className="w-4 h-4" 
                                                 fill="none" 
                                                 stroke="currentColor" 
                                                 viewBox="0 0 24 24" 
                                                 xmlns="http://www.w3.org/2000/svg">
                                                     <path strokeLinecap="round" 
                                                           strokeLinejoin="round" 
                                                           strokeWidth="2" 
                                                           d="M6 18L18 6M6 6l12 12">
                                                     </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                </>
                                )
                            })}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 bg-sky-900 lg:block hidden">
                    <h1 className="py-6 border-b-2 text-xl text-white px-8">Order Information</h1>
                        <ul className="py-6 border-b space-y-6 px-8"> 
                            <div className="col-span-1 self-center">
                                <span className="text-white text-sm font-bold">Return Policy</span><br/>
                                <span className="text-white text-md font-semi-bold">Our policy lasts 30 days</span>
                            </div>         
                        </ul>
                    <div className="px-8 border-b">
                        <div className="flex justify-between py-4 text-white">
                            <span>Subtotal</span>
                            <span className="font-semibold text-white">$ {cartSum}</span>
                        </div>
                        <div className="flex justify-between py-4 text-white">
                            <span>Shipping</span>
                            <span className="font-semibold text-white">Free</span>
                        </div>
                    </div>
                    <div className="font-semibold text-xl px-8 flex justify-between py-8 text-white">
                        <span>Total</span>
                        <span>$ {cartSum}</span>
                    </div>
                    <span className="text-gray-400 text-sm inline-block pt-2">Payment is processed with Stripe</span>
                    <div className="flex justify-center">
                            <button className="flex justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                                    role="link"
                                    onClick={createCheckoutSession}>
                                <svg aria-hidden="true" 
                                    data-prefix="far" 
                                    data-icon="credit-card" 
                                    className="w-8" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 576 512">
                                        <path fill="currentColor" 
                                            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/>
                                </svg>
                                <span className="ml-2 mt-5px">Checkout</span>
                            </button>
                    </div>
                </div>
            </div>  
        <Footer/>
        </>
    )
}

export default Cart;