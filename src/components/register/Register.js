import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import db from '../../FirebaseConfig';
//import { collection, addDoc } from 'firebase/firestore/lite';
//import auth from '../../FirebaseConfig';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function Register() {

    const navigate = useNavigate();

    //Explain + add password security and email validation + check if same email is registered
    
    //add to firebase without authentication for other tables such as cart
    //const [newName, setNewName] = useState("");
    //const [newAddress, setNewAddress] = useState("");
    //const [newEmail, setNewEmail] = useState("");
    //const [newPassword, setNewPassword] = useState("");

    //const usersCollectionRef = collection(db, 'users');

    /*const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, address: newAddress, email: newEmail, password: newPassword});
    };*/
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState("");
    //for login
    //const [loginEmail, setLoginEmail] = useState("");
    //const [loginPassword, setLoginPassword] = useState("");
    //lägg till event på input field på login

    //to get current logged in user
    //const authentication = getAuth();
    //this is written in return {authentication.currentUser.email}

    //to set a state which contains the current logged in user
    //const [user, setUser] = useState({});
    //onAuthStateChanged(authentication, (currentUser) => {
      //  setUser(currentUser);
    //});
    //this is written in return {user.email} or {user?.email}
    //? sets it to if user exists write it out otherwise don't to avoid errors

    //log out function, signOut is from firebase auth 
    //const logout = async () => {
      //  const authentication = getAuth(); 
        //await signOut(authentication);
    //}
    //<button onClick={logout}>Logga ut</button> 
    //this is added to a button 

    const registerUser = async () => {
        try {
        const authentication = getAuth();            
        const user = await createUserWithEmailAndPassword(
            authentication, 
            registerEmail, 
            registerPassword
            )
            console.log(user);
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
	        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		        <form className="bg-white">
			        <h1 className="text-gray-800 font-bold text-2xl mb-1">Join our club</h1>
			        <p className="text-sm font-normal text-gray-600 mb-7">Welcome to the deals</p>
                    {/* Page reload so error message not visable? Move register button? */}
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
                               //onChange={(event) => {
                                //setNewEmail(event.target.value);
                            //}} 
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
                               //onChange={(event) => {
                                //setNewPassword(event.target.value);
                            //}}
                                onChange={(event) => {
                                    setRegisterPassword(event.target.value);
                                }}
                            />
                    </div>
					<button type="submit" 
                            //onClick={createUser}
                            onClick={registerUser}
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