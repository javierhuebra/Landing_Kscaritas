import React, { useState, useContext } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { FaSquareThreads } from "react-icons/fa6";
import lasgrutas from '../assets/lasgrutaschurros.jpg';
import '../index.css';
import { navBarContext } from '../../context/context';
const Footer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { isNavBarActive } = useContext(navBarContext);
    return (
        <>
            {
                isNavBarActive &&
                <div className="w-full h-[10%]   absolute bottom-0 flex justify-center items-center ">
                    <a href="https://www.instagram.com/kscaritas/" target="_blank">

                        <AiFillInstagram className='hover:text-[#f99829] text-4xl text-white' />
                    </a>

                    <a href="https://www.facebook.com/kscaritas" target="_blank" rel="facebook kscaritas">

                        <AiFillFacebook className='hover:text-[#f99829] text-4xl text-white' />
                    </a>
                    <a href="https://twitter.com/kscaritasok" target="_blank" rel="twitter kscaritas">

                        <AiFillTwitterSquare className='hover:text-[#f99829] text-4xl text-white' />
                    </a>
                    <a href="https://www.threads.net/@kscaritas" target="_blank" rel="threads kscaritas">

                        <FaSquareThreads className='hover:text-[#f99829] text-4xl text-white' />
                    </a>
                    <a href="https://www.tiktok.com/@kscaritas?lang=es" target="_blank" rel="tiktok kscaritas">
                        <BiLogoTiktok className='hover:text-[#f99829] text-4xl text-white' />
                    </a>
                    {
                        isOpen &&
                        <div className="animate-bounce absolute  bottom-10 right-10 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <p className="bg-yellow-500 text-black">x Publicidad</p>
                            <img className="h-[150px] sm:h-[200px] md:h-[300px] rounded-xl " src={lasgrutas} alt="" />
                        </div>
                    }


                </div>
            }

        </>
    );
}

export default Footer;