import React from 'react';
import { Link } from 'react-router-dom';

function Error() {

  return (
        <>
            <div className="bg-sky-900 h-screen pt-20">
            <div className="w-full max-w-sm mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                    <svg className="text-red-600 w-16 h-16 mx-auto my-6"
                         xmlns="http://www.w3.org/2000/svg" 
                         fill="none" 
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                            Payment Failed!
                        </h3>
                        <p className="text-gray-600 my-2">
                            Something went wrong during <br/> your purchase.</p>
                        <p>We couldn't process your payment.</p>
                        <div className="py-10 text-center">
                            <button type="submit" 
                                    className="md:w-34 bg-sky-900 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold">
                                <Link to={'/checkout'}>TRY AGAIN</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;