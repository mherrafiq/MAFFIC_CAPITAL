'use client';

import { FaChevronDown } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './FirstSection.css';
import capital_logo from '@/public/images/capital_logo.png';
import graphImage from '@/public/images/graph1.png';
import Image from 'next/image';

const FirstSection = () => {
    const [dropdownOpen, setDropdownOpen] = useState({
        additionalInfo: false,
        servicesDropdown: false,
        aboutDropdown: false,
        mediaDropdown: false,
        contactInfo: false,
    });

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let animationFrameId;

        const moveImage = () => {
            if (!isHovered) {
                setPosition((prev) => {
                    if (prev >= 50) {
                        setDirection(-1);
                    } else if (prev <= -50) {
                        setDirection(1);
                    }
                    return prev + direction * 0.2;
                });
            }
            animationFrameId = requestAnimationFrame(moveImage);
        };

        moveImage();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered, direction]);

    return (
        <div className="first-section flex flex-col min-h-screen overflow-hidden">
            <nav className="navbar">
                <div className="container mx-auto flex justify-between items-center px-4 py-4 bg-[#1E2538]">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={capital_logo}
                            alt="MEFIC Capital Logo"
                            className="logo w-20 h-auto md:w-28 lg:w-32"
                            layout="intrinsic"
                        />
                    </a>

                    <div className="flex space-x-6">
                        <button
                            onClick={() => toggleDropdown('contactInfo')}
                            className="navbar-button"
                        >
                            Contact Info
                            <FaChevronDown className={`ml-2 transition-transform duration-300 ${dropdownOpen.contactInfo ? 'rotate-180' : ''}`} />
                        </button>

                        <button
                            onClick={() => toggleDropdown('additionalInfo')}
                            className="navbar-button"
                        >
                            Additional Info
                            <FaChevronDown className={`ml-2 transition-transform duration-300 ${dropdownOpen.additionalInfo ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${dropdownOpen.contactInfo ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="flex flex-col items-center space-y-2 p-2 bg-[#2A3649]">
                        <span className="navbar-text text-xs flex items-center whitespace-nowrap">
                            <FaPhone className="mr-1" /> +1 (525) 456 7890
                        </span>
                        <span className="navbar-text text-xs flex items-center whitespace-nowrap">
                            <FaEnvelope className="mr-1" /> info@domain.com
                        </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 p-2 bg-[#2A3649]">
                        <span className="social-icons flex items-center space-x-1">
                            <FiFacebook className="w-4 h-4" />
                            <FiLinkedin className="w-4 h-4" />
                            <FiTwitter className="w-4 h-4" />
                        </span>
                    </div>
                </div>

                {dropdownOpen.additionalInfo && (
                    <div className="additional-info-dropdown flex flex-col items-center bg-[#2A3649] p-2">
                        <ul className="flex flex-col items-center">
                            <li className="flex items-center justify-between w-full">
                                <button
                                    onClick={() => toggleDropdown('servicesDropdown')}
                                    className="dropdown-item flex items-center justify-between text-white w-full py-2"
                                >
                                    Our Services
                                    <FaChevronDown className="ml-2 text-white" />
                                </button>
                                {dropdownOpen.servicesDropdown && (
                                    <ul className="sub-dropdown">
                                        <li><a href="#" className="text-white">Financial Planning</a></li>
                                        <li><a href="#" className="text-white">Investment Management</a></li>
                                        <li><a href="#" className="text-white">Wealth Management</a></li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <button
                                    onClick={() => toggleDropdown('aboutDropdown')}
                                    className="dropdown-item flex items-center justify-between text-white w-full py-2"
                                >
                                    About MEFIC
                                    <FaChevronDown className="ml-2 text-white" />
                                </button>
                                {dropdownOpen.aboutDropdown && (
                                    <ul className="sub-dropdown">
                                        <li><a href="#" className="text-white">Company Overview</a></li>
                                        <li><a href="#" className="text-white">Our Team</a></li>
                                        <li><a href="#" className="text-white">Our Vision</a></li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center justify-between w-full">
                                <button
                                    onClick={() => toggleDropdown('mediaDropdown')}
                                    className="dropdown-item flex items-center justify-between text-white w-full py-2"
                                >
                                    Media Center
                                    <FaChevronDown className="ml-2 text-white" />
                                </button>
                                {dropdownOpen.mediaDropdown && (
                                    <ul className="sub-dropdown">
                                        <li><a href="#" className="text-white">Press Releases</a></li>
                                        <li><a href="#" className="text-white">News & Events</a></li>
                                        <li><a href="#" className="text-white">Media Kit</a></li>
                                    </ul>
                                )}
                            </li>
                            <li className="text-white w-full py-2">Careers</li>
                            <li>
                                <button className="book-btn text-white bg-[#E95A0C] py-2 px-4 rounded">
                                    Book a Consultant
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            <div className="main-content bg-[#1E2538] flex flex-col justify-center items-center relative h-screen">
                <div className="flex flex-col items-center">
                    <button className="believe-btn mt-10 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        We believe that every client is a partner
                    </button>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 line-height text-white text-center">
                        Your future financial<br />
                        <span className="font-bold">Investment made</span> easier<br />
                        <span className="underline decoration-[#2D3C65] text-[#E95A0C]">
                            with <span className="font-bold">MEFIC</span>
                        </span>.
                    </h2>
                    <p className="sub-text w-full md:w-3/4 lg:w-1/2 text-left mt-4 text-gray-300">
                        Office ipsum may must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="buttons flex space-x-4 mt-4">
                        <button className="book-btn bg-[#E95A0C] text-white py-2 px-4 rounded">Book a Consultant</button>
                        <button className="login-btn bg-gray-800 text-white py-2 px-4 rounded">Login</button>
                    </div>
                </div>

                <div
                    className="graph-image mb-24 w-full flex justify-center -pt-80 absolute bottom-0"
                    style={{ transform: `translateX(${position}%)` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image src={graphImage} alt="Graph" layout="intrinsic" className="w-1/2 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
