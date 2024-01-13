import React, { useState } from 'react';

import img3 from '../assets/ksca_img3.jpg';
import churros_img from '../assets/churros.png';
import donas_img from '../assets/donas.png';
import tortafritas_img from '../assets/tortafritas.png';
import medialuna_img from '../assets/medialuna.png';
import raspaditas_img from '../assets/raspaditas.png';
import churro_img2 from '../assets/churros1.png';
import dona_img2 from '../assets/donas2.png';
import tortafrita_img2 from '../assets/tortafritas2.png';
import medialuna_img2 from '../assets/medialuna2.png';
import raspadita_img2 from '../assets/raspadita2.png';
import { AiFillCloseSquare } from "react-icons/ai";

import { descripciones, rellenos } from '../datos/datos';

const Productos = () => {

    const [variables, setVariables] = useState({});
    const [modal, setModal] = useState(false);

    const imprimirModal = (variables) => {
        return (
            <div className='w-full h-[80%] p-5 flex items-center flex-col absolute bg-black bg-opacity-[0.5] z-30'>

                <div className='w-full h-full sm:w-[50%]  bg-orange-100  p-5 relative flex justify-center items-center animate-fade-up animate-duration-[500ms] animate-once'>
                    <div className='w-[70px] h-[70px]  absolute left-0 top-0 z-30'>
                        <AiFillCloseSquare onClick={() => setModal(false)} className='text-black w-full h-full cursor-pointer hover:text-orange-600' />
                    </div>
                    <div className='flex w-full flex-col sm:flex-row h-full'>
                        <div className='w-full  sm:w-[350px]  flex justify-center items-center'>
                            <img className='w-full drop-shadow-anexo' src={variables?.imagen} alt="imagen del producto" />
                        </div>
                        <div className=' sm:justify-center sm:items-center sm:flex sm:flex-1 sm:h-full overflow-auto scrollable-div'>
                            <div className='flex-1 bg-black sm:h-[350px] bg-opacity-[0.5] p-3 flex flex-col overflow-auto scrollable-div'>
                                <h1 className='text-4xl font-marker uppercase text-white  custom-text-shadow mb-5'>{variables.titulo}</h1>

                                <p className='text-xl  text-white mb-3 custom-text-shadow '>{variables.descripcion}</p>

                                {
                                    variables.titulo !== 'Tortitas Raspaditas' &&
                                    <div className='w-full flex-1 '>
                                        <p className='text-2xl text-white font-marker uppercase custom-text-shadow mb-3'>Combinalos como más te guste:</p>
                                        <div className=' w-full  px-3 flex flex-wrap'>
                                            {
                                                rellenos.map((relleno, index) => {
                                                    return (
                                                        <div key={index} className='bg-yellow-300 p-1 mr-2 mt-1 rounded-xl'>
                                                            <p className='text-sm font-bold '>{relleno}</p>
                                                        </div>
                                                    )

                                                })
                                            }
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    const handleOpenModal = (titulo, descripcion, imagen) => {
        setVariables({
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen
        })
        setModal(true);
    }

    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    {modal && imprimirModal(variables)}

                    <div className='w-full h-[80%] p-5 flex items-center flex-col bg-black bg-opacity-[0.2]'>
                        <div className='w-full flex-1 flex justify-around items-center flex-wrap'>
                            <div
                                onClick={() => handleOpenModal('Churros rellenos', descripciones.churros, churro_img2)}
                                className='drop-shadow-anexo w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] relative img-background cursor-pointer '
                            >
                                <img
                                    className='drop-shadow-anexo w-full h-full  hover:translate-y-[-20px] cursor-pointer transition'
                                    src={churros_img}
                                    alt="churros imagen"
                                />
                                <div className='w-full absolute bottom-0'>
                                    <p className='text-4xl sm:text-6xl font-marker text-white font-bold text-center custom-text-shadow'>Churros</p>
                                </div>


                            </div>
                            <div
                                onClick={() => handleOpenModal('Donas rellenas', descripciones.donas, dona_img2)}
                                className='drop-shadow-anexo img-background w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] cursor-pointer relative flex justify-center items-center'>
                                <img
                                    className='drop-shadow-anexo w-full hover:translate-y-[-20px] cursor-pointer transition'
                                    src={donas_img}
                                    alt="churros imagen"
                                />
                                <div className='w-full absolute bottom-0'>
                                    <p className='text-4xl sm:text-6xl font-marker text-white font-bold text-center custom-text-shadow'>Donas</p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleOpenModal('Tortafritas rellenas', descripciones.tortafritas, tortafrita_img2)}
                                className='drop-shadow-anexo img-background w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] cursor-pointer relative flex justify-center items-center'>
                                <img
                                    className='w-full drop-shadow-anexo object-cover hover:translate-y-[-20px] cursor-pointer transition'
                                    src={tortafritas_img}
                                    alt="churros imagen"
                                />
                                <div className='w-full absolute bottom-0'>
                                    <p className='text-4xl sm:text-6xl font-marker text-white font-bold text-center custom-text-shadow'>Tortafritas</p>
                                </div>

                            </div>

                        </div>
                        <div className='w-full flex-1  flex justify-around '>
                            <div
                                onClick={() => handleOpenModal('Medialunas rellenas', descripciones.medialunas, medialuna_img2)}
                                className='drop-shadow-anexo w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] flex justify-center cursor-pointer items-center relative img-background '>
                                <img
                                    className='drop-shadow-anexo w-full   hover:translate-y-[-20px] cursor-pointer transition'
                                    src={medialuna_img}
                                    alt="churros imagen"
                                />
                                <div className='w-full absolute bottom-0'>
                                    <p className='text-4xl sm:text-6xl font-marker text-white font-bold text-center custom-text-shadow'>Medialunas</p>
                                </div>


                            </div>
                            <div
                                onClick={() => handleOpenModal('Tortitas Raspaditas', descripciones.raspaditas, raspadita_img2)}
                                className='drop-shadow-anexo w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] cursor-pointer  relative img-background '>
                                <img
                                    className='drop-shadow-anexo w-full h-full  hover:translate-y-[-20px] cursor-pointer transition'
                                    src={raspaditas_img}
                                    alt="churros imagen"
                                />
                                <div className='w-full absolute bottom-0'>
                                    <p className='text-4xl sm:text-6xl font-marker text-white font-bold text-center custom-text-shadow'>Raspaditas</p>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
                <img
                    className='w-full h-full object-cover'
                    src={img3}
                    alt="churros imagen"
                />
            </div>
        </>
    );
}

export default Productos;