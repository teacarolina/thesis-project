import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, doc, getDocs, query, where, deleteDoc } from 'firebase/firestore/lite';
import db from '../../FirebaseConfig';

function Success() {

    //to get current logged in user
    const authentication = getAuth();

    //to set a state which contains the current logged in user
    const [user, setUser] = useState({});
    const [cartData, setCartData] = useState([])

    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
      //display name and phonenumber to add to input fields when editing customer?
      //console.log(currentUser.uid);
    });

    //const [cartId, setCartId] = useState("");
    const cartCollectionRef = collection(db, 'carts');
    const cartItemsCollectionRef = collection(db, 'cartItems');

    useEffect(()=>{
        
        const getCartItemIds = async () => {
            const cartId = localStorage.getItem("Cart Id")
            console.log(cartId)
            const data = await getDocs(query(cartItemsCollectionRef, where("cartId", "==", cartId)));
            //console.log(data)
            const cartData = data.docs.map((doc) => (doc.id))
            console.log(cartData)
            cartData.map(id => {
                deleteDoc(doc(cartItemsCollectionRef, id))
                console.log(id)
            })
            //setCartData(cartData)
            //return console.log(cartData)
        }
        
        getCartItemIds()

        /* const deleteCartItems = async () => {
            const cartItemCollection = cartData.map(id => {
                deleteDoc(doc(cartItemsCollectionRef, id))
                console.log(id)
            })
            localStorage.removeItem("Cart Item Ids")
        }

        deleteCartItems(); */

        const deleteCart = async () => {
            const cartId = localStorage.getItem("Cart Id")
            deleteDoc(doc(cartCollectionRef, cartId))
        }

        deleteCart();
    }, [])

  return (
        <>
            <div className="bg-sky-900 h-screen pt-20">
            <div className="w-full max-w-sm mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                    <svg viewBox="0 0 24 24" 
                         className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                            Payment Successful!
                        </h3>
                        <p className="text-gray-600 my-2">
                            Thank you for your purchase <br/> and for using Stripe.</p>
                        <p>You can now chase more deals!</p>
                        <div className="py-10 text-center">
                            <button type="submit" 
                                    className="md:w-34 bg-sky-900 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold">
                                <Link to={'/'}>GO BACK</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success;