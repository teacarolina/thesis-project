import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import db from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore/lite';

function Register() {

    //Explain + add password security and email validation + check if same email is registered
    //Add more fields for address? Street, zip, city?
    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const usersCollectionRef = collection(db, 'users');

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, address: newAddress, email: newEmail, password: newPassword});
    };

    return (
        <>
          <div className="h-screen md:flex">
	        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-sky-900 to-sky-700 i justify-around items-center hidden">
		        <div>
			        <h1 className="text-white font-bold text-4xl font-sans">Deal.se</h1>
			        <p className="text-white mt-1">The most popular online website for shopping deals</p>
                    {/* Add link to about page? Or home page? */}
			        <button type="submit" 
                            className="block w-28 bg-white text-sky-900 mt-4 py-2 rounded-2xl font-bold mb-2">
                                Read More
                    </button>
		        </div>
	        </div>
	        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		        <form className="bg-white">
			        <h1 className="text-gray-800 font-bold text-2xl mb-1">Join our club</h1>
			        <p className="text-sm font-normal text-gray-600 mb-7">Welcome to the deals</p>
			        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				        <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             viewBox="0 0 20 20"
					         fill="currentColor">
					        <path fill-rule="evenodd" 
                                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						         clip-rule="evenodd" />
				        </svg>
                        {/* Input: Full Name */}
                        <input className="pl-2 outline-none border-none" 
                               type="text" 
                               name="" 
                               id="" 
                               placeholder="Full name"
                               onChange={(event) => {
                                   setNewName(event.target.value);
                               }} />
                    </div>
				    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        {/* Change Icon? */}
					    <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             fill="none"
						     viewBox="0 0 24 24" 
                             stroke="currentColor">
						    <path stroke-linecap="round" 
                                  stroke-linejoin="round" 
                                  stroke-width="2"
							      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
                        {/* Input: Address */}
					    <input className="pl-2 outline-none border-none" 
                               type="text" 
                               name="" 
                               id="" 
                               placeholder="Address"
                               onChange={(event) => {
                                setNewAddress(event.target.value);
                            }} />
                    </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             fill="none"
							 viewBox="0 0 24 24" 
                             stroke="currentColor">
							<path stroke-linecap="round" 
                                  stroke-linejoin="round" 
                                  stroke-width="2"
								  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
                        {/* Input: Email Address */}
						<input className="pl-2 outline-none border-none"
                               type="text" 
                               name="" 
                               id="" 
                               placeholder="Email Address"
                               onChange={(event) => {
                                setNewEmail(event.target.value);
                            }} />
                    </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-5 w-5 text-gray-400" 
                             viewBox="0 0 20 20"
							 fill="currentColor">
							<path fill-rule="evenodd"
								  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								  clip-rule="evenodd" />
						</svg>
                        {/* Input: Password */}
						<input className="pl-2 outline-none border-none" 
                               type="password" 
                               name="" 
                               id="" 
                               placeholder="Password"
                               onChange={(event) => {
                                setNewPassword(event.target.value);
                            }} />
                    </div>
					<button type="submit" 
                            onClick={createUser}
                            className="block w-full bg-sky-900 opacity-75 hover:opacity-100 text-white mt-4 py-2 rounded-2xl font-semibold mb-2">Register</button>
						<span className="text-sm ml-2 hover:text-sky-500 cursor-pointer">
                            <Link to="/login">Already have an account ?</Link>
                        </span>
		        </form> 
	        </div>
        </div>  
        </>
    )
}

export default Register;