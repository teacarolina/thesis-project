import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function AboutUs() {
    return (
        <>
        <Navbar/> 
            <Header
            text1="Our journey to find"
            text2="the best deals"
            text3="Deal.se strive to be the best online store for deals."
            />       
            <section className="relative pt-12 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." 
                             className="max-w-full rounded-lg shadow-lg mb-7" 
                             src="https://cdn.pixabay.com/photo/2019/02/21/11/18/shopping-4011117_1280.jpg"/>
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white mt-8">
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         className="h-5 w-5" 
                                         viewBox="0 0 20 20" 
                                         fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-3xl font-semibold">A growing company</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                The online store wants to be your best friend when looking
                                for your next deal. Every day we offer new amazing deals
                                and discounts.
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="shadow-lg text-xs font-semibold inline-block py-1 px-1 uppercase rounded-full text-black bg-white mr-3">
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                 className="h-5 w-5" 
                                                 viewBox="0 0 20 20" 
                                                 fill="currentColor">
                                                <path fillRule="evenodd" 
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                                      clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-blueGray-500">
                                            Latest deals for great prices
                                        </h4>
                                    </div>
                                </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="shadow-lg text-xs font-semibold inline-block py-1 px-1 uppercase rounded-full text-black bg-white mr-3">
                                                <span className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                        className="h-5 w-5" 
                                                        viewBox="0 0 20 20" 
                                                        fill="currentColor">
                                                        <path fillRule="evenodd" 
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                                            clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Amazing member deals</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="shadow-lg text-xs font-semibold inline-block py-1 px-1 uppercase rounded-full text-black bg-white mr-3">
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                className="h-5 w-5" 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor">
                                                <path fillRule="evenodd" 
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                                    clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                    <div>
                                        <h4 className="text-blueGray-500">Aiming to be the number one store for deals</h4>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>  
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Meet our fantastic deal team
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500_1280.jpg" alt=""/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Nicholas Jones</p>
                <p class="text-base text-white font-normal">CTO</p>
            </div>
        </div>
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2017/06/01/00/44/smiling-2362136_1280.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Kaitlyn Long</p>
                <p class="text-base text-white font-normal">Customer Service Manager</p>
            </div>
        </div>
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2021/03/10/16/39/woman-6084994_1280.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Rosemary Webb</p>
                <p class="text-base text-white font-normal">Founder & CEO</p>
            </div>
        </div>
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2015/09/12/11/39/employees-936804_1280.jpg    " alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Tommy Carter</p>
                <p class="text-base text-white font-normal">Finance Manager</p>
            </div>
        </div>
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Bradley Turner</p>
                <p class="text-base text-white font-normal">Sales Manager</p>
            </div>
        </div>
        <div class="w-full bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg" alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">Isabelle Ward</p>
                <p class="text-base text-white font-normal">Marketing Manager</p>
            </div>
        </div>
    </div>
</section>
        <Footer/>
        </>
    )
}

export default AboutUs;