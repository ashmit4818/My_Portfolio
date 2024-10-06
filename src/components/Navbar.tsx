"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center text-white">
            <div className="fixed top-0 w-full z-[1000] bg-grey-800">
                <div
                    className={`flex max-sm:flex-col justify-between transition-all duration-300 ${
                        isScrolled ? "bg-black" : ""
                    }`}
                >
                    <Image
                        className="ml-8 my-4 max-sm:w-18 max-sm:mx-auto max-sm:mt-5"
                        src="https://i.ibb.co/vP06f6r/logo.png"
                    
                        width={45}
                        height={45}
                        alt="logo"
                    />

                    <div className="max-sm:hidden flex items-center justify-center">
                        <Link className="px-4" href="#hero">
                            About
                        </Link>
                        <Link className="px-4" href="#projects">
                            Projects
                        </Link>
                        <Link className="px-4" href="#skills">
                            Skills
                        </Link>
                        <Link className="px-4" href="#contact">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
