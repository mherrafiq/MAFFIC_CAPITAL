'use client';

import { FaChevronDown } from 'react-icons/fa'; // Import the icon at the top
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
        mediaDropdown: false
    });

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    // State for controlling movement and hover
    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    // Effect for movement
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
                    return prev + (direction * 0.2);
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
        <div className="first-section overflow-x-hidden min-h-screen">
            <nav className="navbar">
                <div className="contact-info">
                    <span className="navbar-text text-xs sm:text-sm md:text-base flex items-center">
                        <FaPhone className="mr-1" /> +1 (525) 456 7890
                    </span>

                    <span className="navbar-text">
                        <FaEnvelope /> info@domain.com
                    </span>
                    <span className="social-icons">
                        <FiFacebook />
                        <FiLinkedin />
                        <FiTwitter />
                    </span>
                    <span className="navbar-text arabic-text">العربية</span>
                </div>
                <div className="container-fluid flex justify-center">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={capital_logo}
                            alt="MEFIC Capital Logo"
                            className="logo w-20 h-auto md:w-28 lg:w-32"
                            layout="intrinsic"
                        />
                    </a>

                    {/* Additional Info section remains */}
                    <div className="additional-info">
                        <button
                            className="additional-info-btn flex items-center text-white"
                            onClick={() => toggleDropdown('additionalInfo')}
                        >
                            Additional Info
                        </button>
                        {dropdownOpen.additionalInfo && (
                            <div className="additional-info-dropdown">
                                <ul>
                                    <li>
                                        <button
                                            onClick={() => toggleDropdown('servicesDropdown')}
                                            className="dropdown-item flex items-center justify-between text-white"
                                        >
                                            Our Services
                                            <FaChevronDown
                                                className={`ml-2 transition-transform duration-300 ${dropdownOpen.servicesDropdown ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {dropdownOpen.servicesDropdown && (
                                            <ul className="sub-dropdown">
                                                <li><a href="#">Financial Planning</a></li>
                                                <li><a href="#">Investment Management</a></li>
                                                <li><a href="#">Wealth Management</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => toggleDropdown('aboutDropdown')}
                                            className="dropdown-item flex items-center justify-between text-white"
                                        >
                                            About MEFIC
                                            <FaChevronDown
                                                className={`ml-2 transition-transform duration-300 ${dropdownOpen.aboutDropdown ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {dropdownOpen.aboutDropdown && (
                                            <ul className="sub-dropdown">
                                                <li><a href="#">Company Overview</a></li>
                                                <li><a href="#">Our Team</a></li>
                                                <li><a href="#">Our Vision</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => toggleDropdown('mediaDropdown')}
                                            className="dropdown-item flex items-center justify-between text-white"
                                        >
                                            Media Center
                                            <FaChevronDown
                                                className={`ml-2 transition-transform duration-300 ${dropdownOpen.mediaDropdown ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {dropdownOpen.mediaDropdown && (
                                            <ul className="sub-dropdown">
                                                <li><a href="#">Press Releases</a></li>
                                                <li><a href="#">News & Events</a></li>
                                                <li><a href="#">Media Kit</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li><a href="#">Careers</a></li>
                                    <li><button className="book-btn">Book a Consultant</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="main-content bg-[#1E2538] relative h-screen">
                <div>
                    <button className="believe-btn mt-10 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        We believe that every client is a partner
                    </button>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 line-height text-white">
                        Your future financial<br />
                        <span style={{ fontWeight: 'bold' }}>Investment made</span> easier<br />
                        <span className="underline decoration-[#2D3C65] text-[#E95A0C]">
                            with <span className="font-bold">MEFIC</span>
                        </span>.
                    </h2>
                    <p className="sub-text w-full md:w-3/4 lg:w-1/2 text-left mt-4 text-gray-300">
                        Office ipsum may must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="buttons">
                        <button className="book-btn -mt-1">Book a Consultant</button>
                        <button className="login-btn">Login</button>
                    </div>
                </div>

                {/* Adding the graph image inside the main-content */}
                <div
                    className="graph-image mb-24 w-full flex justify-center -pt-80 absolute bottom-95"
                    style={{ transform: `translateX(${position}%)` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image src={graphImage} alt="Graph" className="w-full h-[700px] object-cover cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
