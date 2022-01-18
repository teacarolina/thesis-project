import { collection, addDoc } from 'firebase/firestore/lite';
import React from 'react';
import { Link } from 'react-router-dom';
import db from '../../FirebaseConfig';

//Using props to be able to use the Product Card in various places
function ProductCard({ id, title, price, image }) {

    //add to firebase without authentication for other tables such as cart
    //const [newName, setNewName] = useState("");
    //const [newAddress, setNewAddress] = useState("");
    //const [newEmail, setNewEmail] = useState("");
    //const [newPassword, setNewPassword] = useState("");

    //const usersCollectionRef = collection(db, 'users');

    /*const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, address: newAddress, email: newEmail, password: newPassword});
    };*/

    const cartCollectionRef = collection(db, 'carts');

    //how to get the product id to the function?
    const addToCart = async (id) => {
      console.log(cartCollectionRef)
      await addDoc(cartCollectionRef, {productId: 100});
    }

    return (
        <>
          <div className="relative max-w-[340px] min-w-[340px] max-h-[280px] min-h-[280px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img className="h-40 rounded-2xl w-full object-cover" 
                   src={image}/>
              <button className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
                      onClick={addToCart}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6 group-hover:opacity-50 opacity-70" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="black">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </button>
            </div>
            
            <div className="mt-4 pl-2 mb-2">
            <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Rating
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    ${price}
                  </div>
                </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 hover:text-sky-700 mb-0">
                  {/* Adding the id to the link to be able to specify the product for Single Product Page */}
                  <Link to={`/product/${id}`}>{title}</Link>
                </p>
              </div>
            </div>
          </div>  
          
        </>
    )
}

export default ProductCard;