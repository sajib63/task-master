import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../assets/icon.png'

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto  ">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
               <img src={img} className='w-10 h-10 mr-2' alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Task-Master
              </span>
            </Link>
           
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+8801893516526"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +8801893516526
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:sajib7315@gmail.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                sajib7315@gmail.mail
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
               Brahmanbaria, Chattragrap, Bangladesh
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3 text-2xl">
             <Link><FaLinkedin/></Link>
             <Link><FaGithub/></Link>
             <Link><FaFacebook/></Link>
             
            </div>
           
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2022 Sajib Ahmed. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;