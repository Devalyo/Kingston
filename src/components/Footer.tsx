// import { Link } from 'react-router';
import logo from '../assets/logoFooter.svg';
import github from '../assets/Github.svg';
import instagram from '../assets/Instagram.svg';
import youtube from '../assets/Youtube.svg';
import Visa from '../assets/Visa.svg';
import Mastercard from '../assets/Mastercard.svg';
import Amex from '../assets/Amex.svg';

function Footer() {
    return (
        <footer className="text-gray-600 font-[Inter]">
          <div className="w-full mx-auto py-16 text-center md:text-left flex flex-col md:flex-row md:justify-between bg-offWhite-200 md:px-65">
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-900">Join Our Newsletter</h2>
                <p className="mt-2 text-gray-500">We love to surprise our subscribers with occasional gifts.</p>
            </div>
    
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-96 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200 border-neutral-100"
              />
              <button className="bg-neutral-900 text-white px-7 py-3 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
    
            <div className="mx-60 px-6 py-25 flex md:flex-row flex-col gap-30 justify-between">
                <div className='flex flex-col justify-start gap-3 max-w-65'>
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Ecommerce Logo" className="w-10 h-10" />
                        <h3 className="text-lg text-gray-900 font-[Manrope] font-[900]">Kingston</h3>
                    </div>
                    <p className="mt-2 text-gray-500">DevCut is a YouTube channel for practical project-based learning.</p>
                    <div className="flex gap-4 mt-4">
                        <img src={github}></img>
                        <img src={instagram}></img>
                        <img src={youtube}></img>
                    </div>
                </div>
        
                <div className='flex gap-20'> 

                    <div>
                    <h3 className="text-neutral-300 mb-15">SUPPORT</h3>
                    <ul className="mt-4 space-y-2 flex flex-col gap-3">
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Terms of use</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                    </div>
            
                    {/* Company */}
                    <div>
                    <h3 className="text-neutral-300 mb-15">COMPANY</h3>
                    <ul className="mt-4 space-y-2 flex flex-col gap-3">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                    </div>
            
                    {/* Shop */}
                    <div>
                    <h3 className="text-neutral-300 mb-15">SHOP</h3>

                    <ul className="mt-4 space-y-2 flex flex-col gap-3">
                        <li><a href="#" className="hover:underline">My Account</a></li>
                        <li><a href="#" className="hover:underline">Checkout</a></li>
                        <li><a href="#" className="hover:underline">Cart</a></li>
                    </ul>
                    </div>
                </div>
          <div>
                <h3 className="text-neutral-300 mb-15">ACCEPTED PAYMENTS</h3>
                <div className="flex gap-4 saturate-0">
                    <img src={Mastercard} alt="Mastercard" className="h-6" />
                    <img src={Amex} alt="Amex" className="h-6" />
                    <img src={Visa} alt="Visa" className="h-6" />
                </div>
          </div>
            
          </div>
    
            <hr className="border-gray-100" />
            <p className="text-gray-500 text-sm py-10 text-center">© 2023 DevCut. All rights reserved.</p>
        </footer>
      );
    };
    

export default Footer;