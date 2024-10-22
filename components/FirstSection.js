'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './FirstSection.css';
import capital_logo from '@/public/images/capital_logo.png';
import graphImage from '@/public/images/graph1.png'; 
import Image from 'next/image';

const FirstSection = () => {
    const [dropdownOpen, setDropdownOpen] = useState({
        services: false,
        about: false,
        media: false
    });

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    // State for controlling movement and hover
    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    // Effect to continuously move the image left and right slowly
    useEffect(() => {
        let animationFrameId;

        const moveImage = () => {
            if (!isHovered) { // Only move if not hovered
                setPosition((prev) => {
                    if (prev >= 50) {
                        setDirection(-1); // Switch to left when reaching edge
                    } else if (prev <= -50) {
                        setDirection(1); // Switch to right at the other edge
                    }
                    return prev + (direction * 0.2); // Slow movement (0.2)
                });
            }
            animationFrameId = requestAnimationFrame(moveImage);
        };

        moveImage();

        return () => {
            cancelAnimationFrame(animationFrameId); // Cleanup on unmount
        };
    }, [isHovered, direction]);

    return (
        <div className="first-section overflow-x-hidden min-h-screen ">
            <nav className="navbar">
                <div className="contact-info">
                    <span className="navbar-text">
                        <FaPhone /> +1 (525) 456 7890
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
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src={capital_logo} alt="MEFIC Capital Logo" className="logo" />
                    </a>

                    <div className="nav-items">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
                                <a className="nav-link" href="#">
                                    Our Services <FaChevronDown className="dropdown-arrow" />
                                </a>
                                {dropdownOpen.services && (
                                    <div className="dropdown-content">
                                        <a href="#">Service 1</a>
                                        <a href="#">Service 2</a>
                                        <a href="#">Service 3</a>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown('about')}>
                                <a className="nav-link" href="#">
                                    About MEFIC <FaChevronDown className="dropdown-arrow" />
                                </a>
                                {dropdownOpen.about && (
                                    <div className="dropdown-content">
                                        <a href="#">History</a>
                                        <a href="#">Team</a>
                                        <a href="#">Mission</a>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown('media')} onMouseLeave={() => toggleDropdown('media')}>
                                <a className="nav-link" href="#">
                                    Media Center <FaChevronDown className="dropdown-arrow" />
                                </a>
                                {dropdownOpen.media && (
                                    <div className="dropdown-content">
                                        <a href="#">Press Releases</a>
                                        <a href="#">News</a>
                                        <a href="#">Events</a>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <button className="book-btn">Book a Consultant</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="main-content bg-[#1E2538] relative h-screen">
                <div>
                    <button className="believe-btn mt-10 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 ">
                        We believe that, every client is a partner
                    </button>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', lineHeight: '1.5' }}  >
                        Your future financial<br />
                        <span style={{ fontWeight: 'bold' }}>Investment made</span> easier<br />
                        <span className="underline decoration-[#2D3C65]">
                            with <span className="font-bold text-[#E95A0C]">MEFIC</span>
                        </span>.
                    </h2>
                    <p className="sub-text w-1/2 text-left mt-4 ">Office ipsum may must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="buttons">
                        <button className="book-btn">Book a Consultant</button>
                        <button className="login-btn">Login</button>
                    </div>
                </div>

                {/* Adding the graph image inside the main-content */}
                <div
                    className="graph-image mb-24 w-full flex justify-center -pt-80 absolute bottom-20"
                    style={{ transform: `translateX(${position}%)` }} // Move based on position
                    onMouseEnter={() => setIsHovered(true)} // Stop movement on hover
                    onMouseLeave={() => setIsHovered(false)} // Resume movement on mouse leave
                >
                    <Image src={graphImage} alt="Graph" className="w-full h-[400px] object-cover cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
