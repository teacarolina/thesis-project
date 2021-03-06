import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import db from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {

    //adding the function to a variable to be able to navigate to other pages
    const navigate = useNavigate();
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState("");

    //to get the cart collection from the db
    const cartCollectionRef = collection(db, 'carts');

    //function to create cart
    const createCart = async () => {
        const authentication = getAuth();
        const user = authentication.currentUser;
        const thisUserId = user.uid;
        await addDoc(cartCollectionRef, {userId: thisUserId});
    }

    //function to register a new user
    const registerUser = async () => {
        try {
        const authentication = getAuth();            
        const user = await createUserWithEmailAndPassword(
            authentication, 
            registerEmail, 
            registerPassword
            )
            createCart();
            navigate("/");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    }

    return (
        <>
          <div className="h-screen md:flex">
	        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-sky-900 to-sky-700 i justify-around items-center hidden">
		        <div>
			        <h1 className="text-white font-bold text-4xl font-sans">Deal.se</h1>
			        <p className="text-white mt-1">The most popular online website for shopping deals</p>
			        <button type="submit" 
                            className="block w-28 bg-white text-sky-900 mt-4 py-2 rounded-2xl font-bold mb-2">
                            <Link to="/about">Read More</Link>
                    </button>
		        </div>
	        </div>
	        <div className="flex md:w-1/2 justify-center pt-40 py-10 items-center bg-white grid grid-rows-2 grid-flow-col">
		        <form className="bg-white">
			        <h1 className="text-gray-800 font-bold text-2xl mb-1">Join our club</h1>
			        <p className="text-sm font-normal text-gray-600 mb-7">Welcome to the deals</p>
                    <p className="text-sm font-normal text-red-600 mb-7">{error}</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             fill="none"
							 viewBox="0 0 24 24" 
                             stroke="currentColor">
							<path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2"
								  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
                        {/* Input: Email Address */}
						<input className="pl-2 outline-none border-none"
                               type="email" 
                               name="" 
                               id="" 
                               placeholder="Email Address"
                                onChange={(event) => {
                                    setRegisterEmail(event.target.value);
                                }}
                            />
                    </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             viewBox="0 0 20 20"
							 fill="currentColor">
							<path fillRule="evenodd"
								  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								  clipRule="evenodd" />
						</svg>
                        {/* Input: Password */}
						<input className="pl-2 outline-none border-none" 
                               type="password" 
                               name="" 
                               id="" 
                               placeholder="Password"
                                onChange={(event) => {
                                    setRegisterPassword(event.target.value);
                                }}
                            />
                    </div>
						<span className="text-sm ml-2 hover:text-sky-500 cursor-pointer">
                            <Link to="/login">Already have an account ?</Link>
                        </span>
		        </form> 
                <div className="flex justify-center pb-16 items-center bg-white">
                <button type="submit" 
                            onClick={registerUser}
                            className="block w-full bg-sky-900 opacity-75 hover:opacity-100 text-white mt-4 py-2 rounded-2xl font-semibold mb-2">
                                Register
                </button>
                </div>
	        </div>
        </div>  
        </>
    )
}

export default Register;