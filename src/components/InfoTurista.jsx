import React from 'react';

import img1 from '../assets/ksca_img5.jpg';
import { BiSolidLocationPlus } from "react-icons/bi";
import { TfiMedall } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { BiSolidMeteor } from "react-icons/bi";
import { BiTrafficCone } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa6";


const InfoTurista = () => {

    const CardInfo = (props) => {
        const { icono, titulo, url } = props;
        return (
            <Link to={url} target='_blank'>
                <div className='w-[150px] h-[150px] bg-[#80400c] flex justify-center items-center flex-col rounded-xl border-white border-4 mr-2'>
                    <div>
                        {icono}
                    </div>
                    <p className='text-xl font-bold text-white text-center'>{titulo}</p>
                </div>
            </Link>
        )
    }

    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once animate-duration-800'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>

                    <div className='w-full h-[80%] flex flex-col justify-center items-center bg-black bg-opacity-[0.5]'>
                        <div className='w-[100%] h-[100%] flex flex-wrap justify-center items-center '>
                            <CardInfo
                                icono={<BiSolidLocationPlus className='text-6xl text-white' />}
                                titulo='Hospital en Las Grutas'
                                url='https://salud.rionegro.gov.ar/sala/hospital?id=17'
                            />
                            <CardInfo
                                icono={<TfiMedall className='text-6xl text-white' />}
                                titulo='Policía en Las Grutas'
                                url='https://www.google.com/maps/search/policia+las+grutas/@-40.8090136,-65.0934346,16z/data=!3m1!4b1?entry=ttu'
                            />
                            <CardInfo
                                icono={<BiSolidMeteor className='text-6xl text-white' />}
                                titulo='Bomberos en Las Grutas'
                                url='https://www.google.com/maps/place/Bomberos+Voluntarios/@-40.8003487,-65.0842159,17z/data=!3m1!4b1!4m6!3m5!1s0x95fa333a2f5b556b:0x9ee3ba03cf5457a9!8m2!3d-40.8003487!4d-65.081641!16s%2Fg%2F11g9jn_7tw?entry=ttu'
                            />
                            <CardInfo
                                icono={<BiTrafficCone className='text-6xl text-white' />}
                                titulo='Municipalidad'
                                url='https://sanantoniooeste.gob.ar/'
                            />
                            <CardInfo
                                icono={<FaUmbrellaBeach className='text-6xl text-white' />}
                                titulo='Tabla de Mareas'
                                url='https://es.wisuki.com/tide/4026/las-grutas'
                            />

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

export default InfoTurista;