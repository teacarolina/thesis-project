import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import emailjs from 'emailjs-com';

function ContactForm() {

    //Using state to set message if email is sent 
    const [message, setMessage] = useState("");

    //Using state to set error if email is not sent
    const [error, setError] = useState("");

    //Function to send email with contact form input using EmailJS
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, process.env.REACT_APP_USERID)
          .then(() => {
              //Reset form
              e.target.reset();
              setMessage("Your message was sent! 📧");
          }, (error) => {
              setError(error.text);
          });
      }

    return (
        <>
        <Navbar/>
            <Header
            text1="Our devoted team"
            text2="at your service."
            text3="Reach out to our deal team."/>   
            {/* Section with 3 boxes */}   
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <svg fill="none" 
                             stroke="currentColor" 
                             strokeLinecap="round" 
                             strokeLinejoin="round" 
                             strokeWidth="1.5" 
                             viewBox="0 0 24 24" 
                             className="w-8 h-8 text-black">
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="1.5" 
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="1.5" 
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-black">
                        Location
                    </h6>
                    <p className="mt-2 mb-4 text-sm text-blueGray-400">
                        Sunset Industrial Park, Brooklyn,
                        NY, USA
                    </p>
                </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <svg fill="currentColor" 
                                 stroke="currentColor" 
                                 strokeLinecap="round" 
                                 strokeLinejoin="round" 
                                 strokeWidth="1.5" 
                                 viewBox="0 0 24 24" 
                                 className="w-8 h-8 text-black">
                                <path strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth="1.5" 
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-black">
                            Phone 
                        </h5>
                        <p className="mt-2 mb-4 text-sm text-blueGray-400">
                            +1 123 456 7890
                        </p>
                    </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <svg fill="none" 
                                     stroke="currentColor" 
                                     strokeLinecap="round" 
                                     strokeLinejoin="round" 
                                     strokeWidth="1.5" 
                                     viewBox="0 0 24 24" 
                                     className="w-8 h-8 text-black">
                                    <path strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          strokeWidth="1.5" 
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-black">
                                Email
                            </h5>
                            <p className="mt-2 mb-4 text-sm text-blueGray-400">
                                info@deal.se
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-top justify-center pb-8 bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                            <div className="mt-8 overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-6 mr-2 bg-sky-900 dark:bg-gray-800 sm:rounded-lg">
                                        <h1 className="text-4xl sm:text-5xl text-white dark:text-white font-extrabold tracking-tight">
                                            Contact Us
                                        </h1>
                                        <p className="text-normal text-lg sm:text-2xl font-medium text-white dark:text-gray-400 mt-2">
                                            Fill in the form to start a conversation <br/> or reach us by phone and email
                                        </p>
                                        <div className="flex items-center mt-8 text-white dark:text-gray-400">
                                            <div className="ml-4 text-md tracking-wide font-semibold">
                                                <b>Customer Service<br/>Opening hours</b><br/> Weekdays 9am-5pm <br/> Weekends 10am-4pm
                                            </div>
                                        </div>    
                                    </div>
                                    <form className="p-6 flex flex-col justify-center"
                                        onSubmit={sendEmail}>
                                        {/* Input: Full Name */}
                                        <div className="flex flex-col">
                                            <label for="name" 
                                                   className="hidden">Full Name</label>
                                            <input type="name" 
                                                   name="name" 
                                                   id="name" 
                                                   placeholder="Full Name" 
                                                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                        </div>
                                        {/* Input: Email */}
                                        <div className="flex flex-col mt-2">
                                            <label for="email" 
                                                   className="hidden">Email</label>
                                            <input type="email" 
                                                   name="email" 
                                                   id="email" 
                                                   placeholder="Email" 
                                                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                        </div>
                                        {/* Input: Message */}
                                        <div className="flex flex-col mt-2">
                                            <label for="message" 
                                                   className="hidden">Message</label>
                                            <input type="text" 
                                                   name="message" 
                                                   id="message" 
                                                   placeholder="Message" 
                                                   className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                        </div>
                                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                            {message}
                                        </div>
                                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                            {error}
                                        </div>
                                        {/* Submit Form */}
                                        <button type="submit" 
                                                className="md:w-32 bg-sky-900 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>    
        <Footer/>
        </>
    )
}

export default ContactForm;