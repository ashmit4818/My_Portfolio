"use client";
import Link from 'next/link'



const Navbar = () => {

    return (
        <div className="relative w-full flex items-center justify-center text-white">
            <div className="fixed top-0 w-full z-[1000]  bg-grey-800">
                <div className=" flex max-sm:flex-col  justify-between ">
                    <img className="ml-8 my-4 max-sm:w1/3  max-sm:mx-auto" src="/logo.png" width={"45"} alt="logo" />

                    <div className="flex items-center justify-center">
                        <Link className="px-4" href="#hero">About</Link>
                        <Link className="px-4" href="#projects">Projects</Link>
                        <Link className="px-4" href="#skills">Skills</Link>
                        <Link className="px-4" href="#skills">Get In Touch</Link>
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default Navbar;