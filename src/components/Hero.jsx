import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/ksca_img1.png';
import InstallButton from './funcional/InstallButton';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade animate-once animate-duration-800'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    


                        <div className='w-[70%] h-[80%]  flex flex-col justify-center'>
                            <div className='w-[100%] h-[130px] sm:w-[750px]   flex justify-center  flex-col border-b-[5px] border-r-[3px] border-[#F9A429] '>
                                <h1 className='text-[30px] sm:text-[60px] font-bold text-white m-[0px] font-marker uppercase'>Churros K'scaritas<span className='font-normal'>®</span></h1>
                                <InstallButton />
                            </div>
                            
                            <div>
                                <p className='text-[20px] mt-2 sm:text-[40px] font-bold text-white font-marker uppercase'>La gastronomía se convierte en experiencia</p>

                                <button onClick={() => navigate('/productos')} className='bg-[#f95329] custom-shadow rounded-lg mt-3 select-none px-[25px] hover:bg-[#f99829]'>
                                    <p className='text-[30px] sm:text-[40px]  text-white font-marker '>Productos</p>
                                </button>
                            </div>
                        </div>
                    
                </div>
                <img
                    className='w-full h-full object-cover'
                    src={img1}
                    alt="churros imagen"
                />
            </div>

        </>
    );
}

export default Hero;