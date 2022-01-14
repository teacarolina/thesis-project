import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function Login() {

    //Explain and take away console log

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    const loginUser = async () => {
        try {
        const authentication = getAuth();            
        const user = await signInWithEmailAndPassword(
            authentication, 
            loginEmail, 
            loginPassword
            );
            console.log(user);
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
                  <h1 className="text-gray-800 font-bold text-2xl mb-1">Hi friend!</h1>
                  <p className="text-sm font-normal text-gray-600 mb-7">Welcome back</p>
                  {/* Page reload so error message not visable? Move register button? */}
                  <p className="text-sm font-normal text-red-600 mb-7">{error}</p>
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
                             type="email" 
                             name="" 
                             id="" 
                             placeholder="Email Address"
                             onChange={(event) => {
                                setLoginEmail(event.target.value);
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
                                setLoginPassword(event.target.value);
                            }} />
                  </div>
                  {/* Submit Form */}
                  <button type="submit" 
                          onClick={loginUser}
                          className="block w-full bg-sky-900 opacity-75 hover:opacity-100 text-white hover:text-white mt-4 py-2 rounded-2xl font-semibold mb-2">Login</button>
                      <span className="text-sm ml-2 hover:text-sky-500 cursor-pointer"><Link to="/register">No account yet ?</Link></span>
              </form>
          </div>
      </div>  
      </>
    )
}

export default Login;