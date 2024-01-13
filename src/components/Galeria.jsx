import React from 'react';

import img1 from '../assets/ksca_img6.jpg';
import { useNavigate } from 'react-router-dom';
import { urlImages } from '../datos/datos';
const Galeria = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once animate-duration-800'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>

                    <div className='w-full h-[80%] flex flex-col justify-center items-center '>
                        <div className='flex justify-center w-full h-full overflow-auto p-5 bg-black bg-opacity-[0.5] flex-wrap scrollable-div'>
                            {
                                urlImages.map((url, index) => (
                                    <div onClick={() => navigate(`/galeria/imagen/${index}`)} key={index} className='w-[250px] mr-2 mb-2 flex justify-center items-center relative cursor-pointer'>
                                        <div className='bg-black hidden bg-opacity-[0.5] w-full h-full absolute items-center justify-center'>
                                            <p className='text-white text-4xl font-marker text-center'>Ver</p>
                                        </div>
                                        <img className='w-full h-full object-cover ' src={url} alt="" />
                                    </div>
                                ))
                            }
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

export default Galeria;