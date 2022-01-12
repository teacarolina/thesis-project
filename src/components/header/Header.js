import React from 'react';

function Header({ text1, text2, text3 }) {
    return (
        <>
         <div className="container mx-auto bg-sky-900 h-96 rounded-md flex items-center">
            <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
                <h1 className="text-5xl font-bold mb-4">
                    {text1} <br/>
                    {text2}
                </h1>
                <p className="text-lg inline-block sm:block">{text3}</p>
            </div>
        </div>   
        </>
    )
}

export default Header;