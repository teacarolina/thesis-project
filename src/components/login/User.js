import React, {useState} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
//check all of these imports and remove non used
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

function User() {

    const [newDisplayName, setNewDisplayName] = useState("");

    //to get current logged in user
    const authentication = getAuth();

    //to set a state which contains the current logged in user
    const [user, setUser] = useState({});

    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
      //display name and phonenumber to add to input fields when editing customer?
      console.log(currentUser);
    });

    //log out function, signOut is from firebase auth 
    const logout = async () => {
      const authentication = getAuth(); 
      await signOut(authentication);
      //add redirect to function so when logging out you are sent to login page or home?
    }

    //add update window? refresh?
    //update display name of current user, updateProfile is from firebase auth
    const updateDisplayName = async () => {
        const authentication = getAuth(); 
        const thisUser = authentication.currentUser;
        await updateProfile(thisUser, {
            displayName: newDisplayName
            });
      }
    

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
                        <div className="text-sm font-medium ml-3">My Page</div>
                    </div>
                    <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                        Find information about your recent orders.
                    </div>
                </div>
                <div className="col-span-1 bg-white lg:block hidden">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">My Orders</h1>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Order Id</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    12345
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    12-01-21
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    1200 SEK
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>        
            </div>
                <div className="col-span-1 bg-sky-900 lg:block hidden">
                    <h1 className="py-6 border-b-2 text-xl text-white px-8">My Information</h1>
                        <ul className="py-6 border-b space-y-6 px-8"> 
                            <div className="col-span-1 self-center">
                            {/* Dropdown Menu */}
                                <div className="relative inline-block text-left dropdown">
                                    <span className="rounded-md ">
                                        <button className="inline-flex justify-center w-full px-4 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md hover:text-sky-500 focus:outline-none active:text-gray-800" 
                                                type="button" 
                                                aria-haspopup="true" 
                                                aria-expanded="true" 
                                                aria-controls="headlessui-menu-items-117">
                                            <span>Customer Name</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                 className="h-6 w-6" 
                                                 fill="none"
                                                 viewBox="0 0 24 24" 
                                                 stroke="currentColor">
                                            <path strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                    </span>
                                    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-999">
                                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                            <div className="py-1">
                                                <p tabIndex="0" 
                                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" 
                                                role="menuitem">
                                                {/* Input: Email Address */}
                                                    <input className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder="Customer Name"
                                                            onChange={(event) => {
                                                                setNewDisplayName(event.target.value);
                                                            }}     
                                                            />
                                                </p>
                                                <button type="submit" 
                                                        onClick={updateDisplayName}
                                                        className="text-md ml-4 px-5 py-0.5 rounded-md bg-gray-800 text-white font-semibold cursor-pointer hover:bg-gray-700">
                                                            EDIT
                                                </button>                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Dropdown Menu */}
                                <br/>
                                <span className="text-white text-md font-semi-bold">
                                    {user?.displayName}
                                </span>
                            </div>
                            <div className="col-span-1 self-center">
                                <span className="text-white text-sm font-bold">
                                    Email Address
                                </span><br/>
                                <span className="text-white text-md font-semi-bold">
                                    {user?.email}
                                </span>
                            </div>            
                        </ul>
                    <span className="text-gray-400 text-sm inline-block pt-2">Below you can delete your user</span>
                    <div className="flex justify-center">
                        <button className="flex justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className="h-6 w-6" 
                                 fill="none" 
                                 viewBox="0 0 24 24" 
                                 stroke="currentColor">
                                <path strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth="2" 
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span className="ml-2 mt-5px">Delete</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="flex justify-center px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                                onClick={logout}>
                            <span className="ml-2 mt-5px">Log Out</span>
                        </button>
                    </div>
                </div>
            </div>  
        <Footer/>
        </>
    )
}

export default User;