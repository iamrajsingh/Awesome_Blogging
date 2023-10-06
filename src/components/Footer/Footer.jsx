import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-10 bg-footer-color ">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex w-full justify-between flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex h-full flex-col">
              <div className="mb-2 inline-flex items-center">
                <Logo width="100px" className="text-brown text-3xl"/>
              </div>
              <p className="text-base font-medium text-slate-700 text-left mt-2 font-montserrat">
              At Awesome Blog, we're on a mission to bring you the most awe-inspiring and thought-provoking content from across the web. Whether you're seeking inspiration, looking for practical advice, or simply want to feed your curiosity, you've come to the right place.
              </p>
            </div>
          </div>
          <div className="relative flex justify-end w-full p-6 md:pr-[64px] max-sm:justify-center md:w-1/2 lg:w-1/6">
            <div className="h-full ">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-3/12 lg:w-1/6">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-3/12 lg:w-1/6">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-3/12 lg:w-1/6">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="flex w-full relative justify-start align-bottom mt-7 mb-0">
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
