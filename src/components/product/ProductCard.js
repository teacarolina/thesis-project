import React from 'react';
import { Link } from 'react-router-dom';

//Using props to be able to use the Product Card in various places
function ProductCard({ id, title, price, image, rating }) {

    return (
        <>
          <div className="relative max-w-[340px] min-w-[340px] max-h-[280px] min-h-[280px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img className="h-40 rounded-2xl w-full object-cover" 
                   src={image}/>
            </div>
            <div className="mt-4 pl-2 mb-2">
            <div className="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Rating {rating}/5
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