import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu } from "react-icons/ai";
import Menu from './Menu';
import { useNavigate } from "react-router-dom";
import { navBarContext } from '../../context/context';

const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navigate = useNavigate();
    const { isNavBarActive } = useContext(navBarContext);
    return (
        <>
            { isNavBarActive &&
                <div className='w-full h-[10%]  absolute top-0 flex justify-center z-30'>
                    {
                        isOpenMenu &&
                        <Menu setIsOpenMenu={setIsOpenMenu} />
                    }

                    <div className='w-full h-full  flex justify-between '>
                        <div onClick={() => navigate('/')} className='w-[200px] h-full flex justify-center items-center cursor-pointer hover:rotate-2'>
                            <img src={logo} alt=""  />
                        </div>
                        <div onClick={() => setIsOpenMenu(true)} className='w-[200px] h-full flex pr-2 justify-end items-center cursor-pointer'>
                            <p className='text-2xl sm:text-4xl mr-3 font-bold text-white font-marker hover:text-[#f99829] hidden sm:block'>
                                Menú

                            </p>

                            <AiOutlineMenu className='text-6xl text-white' />
                        </div>
                    </div>

                </div>
            }

        </>
    );
}

export default NavBar;