import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaXing } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import ziczacImg from '@/public/images/ziczac.png';
import capitalLogo from '@/public/images/capital_logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#25304F] text-white py-10 relative pt-80 min-h-[700px]">
            {/* ZigZag image at the top of the section */}


            <div className="absolute top-0 left-0 w-full">
                <Image
                    src={ziczacImg}
                    alt="ZigZag Background"
                    layout="responsive"
                    className="animate-magnet-move" // Apply the new magnet animation class here
                />
            </div>



            <div className="container mx-auto flex flex-wrap justify-between items-start space-y-6 relative z-10">
                {/* Left section for MEFIC Capital logo and contact */}
                <div className="w-full md:w-1/4">
                    {/* Logo with brightness and invert filter */}
                    <div className="bg-[#25304F] p-2 mb-4">
                        <Image
                            src={capitalLogo}
                            alt="MEFIC Capital Logo"
                            width={150}
                            height={100}
                            className="filter brightness-0 invert" // Apply brightness and invert filter
                        />
                    </div>
                    <div className="flex space-x-8">
                        <div className="flex items-center">
                            <MdPhone className="mr-2" />
                            <span>+1 (525) 456 7890</span>
                        </div>
                        <div className="flex items-center">
                            <MdEmail className="mr-2" />
                            <span>info@domain.com</span>
                        </div>
                    </div>
                </div>

                {/* Right aligned columns */}
                <div className="w-full md:w-3/4 flex justify-end space-x-10">
                    {/* Solutions column */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-3">Solutions</h3>
                        <ul>
                            <li>Assets Management</li>
                            <li>Private Equity & IB</li>
                            <li>Real Estate Investments</li>
                        </ul>
                    </div>

                    {/* Helpful Link column */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-3">Helpful Link</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Follow Us column */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-400" />
                            <FaLinkedinIn className="text-2xl cursor-pointer hover:text-gray-400" />
                            <FaXing className="text-2xl cursor-pointer hover:text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom section */}
            <div className="mt-10 text-center border-t border-gray-600 pt-6 relative z-10 mt-32">
                <p>© 2024 MEFIC Capital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
