import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <footer className="bg-red-800 text-white py-10 px-5 mt-10" data-aos="fade-up">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo / Brand */}
                <div className="text-3xl font-bold">
                    Quick <span className="font-serif">Bite</span>
                </div>

                {/* made by */}
                <div className=" text-md md:text-xl font-bold">
                    Made with &#10084;
                    by <span className="font-serif">RANA HUZAIFA</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 text-xl">
                    <a href="https://www.facebook.com/share/1BDt43hqgW/"><FaFacebook className="hover:text-gray-300 transition-all text-blue-400" /></a>
                    <a href="https://www.instagram.com/huzaifa_rajput_126?igsh=ZXhjMWhuMDJ0MWdv"><FaInstagram className="hover:text-gray-300 transition-all text-pink-500" /></a>
                    <a href="www.linkedin.com/in/raj-huzaifa"><FaLinkedin className="hover:text-gray-300 transition-all text-blue-600" /></a>
                    <a href="https://github.com/rana-huzaifa-12"><FaGithub className="hover:text-gray-300 transition-all" /></a>
                </div>
            </div>

            <div className="text-center text-md mt-8 text-gray-200 ">
                © {new Date().getFullYear()} Quick Bite. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
