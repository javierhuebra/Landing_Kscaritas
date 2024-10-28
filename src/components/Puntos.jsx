import img2 from '../assets/ksca_img4.jpg';
import pincito from '../assets/card_logo.jpg';
import mapa from '../assets/mapaksca.png';
import { APIProvider, AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import { BsFillPinMapFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
const Puntos = () => {
    const position = { lat: -40.8117197, lng: -65.0886717 };

    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    <div className='w-full h-[80%] flex justify-around items-center flex-col'>
                        <div className='w-full h-full sm:w-[70%] sm:rounded-xl flex flex-col bg-black bg-opacity-[0.5] p-5 '>
                            <div className='h-[60%] px-2  flex flex-col sm:flex-row  overflow-auto scrollable-div'>
                                <div className='flex flex-col items-center mb-3 img-las-grutas sm:mr-3 p-3 sm:justify-center sm:rounded-xl'>
                                    <div className='flex'>

                                        <p className='text-white text-4xl font-marker custom-text-shadow text-center'>
                                            <BsFillPinMapFill className='mr-2 text-white text-4xl inline ' />
                                            Las Grutas - Río Negro
                                        </p>
                                    </div>

                                    <p className='text-white text-xl mt-2 custom-text-shadow italic text-center'>Peatonal Viedma 824 - Planta Baja</p>
                                </div>
                                <div>


                                    <p className='text-white text-xl mt-1 text-justify'>
                                        En esta locación se encuentra nuestra fábrica principal, a pasitos del mar, antes de bajar
                                        a la playa nos encontras!.
                                        <br />
                                        Podes consumir en el local acompañado de cafetería de primera calidad o esperar a los repartidores
                                        en la playa.
                                        <br />
                                        <Link to='https://g.page/r/CZXnwFuuEQLiEB0/review' target='_blank'>
                                            <button className='bg-red-500 flex items-center px-5 py-2 rounded-lg mt-5 hover:bg-orange-400'>
                                                Dejar una reseña
                                                <AiFillGoogleCircle className='inline text-white text-2xl ml-2' />
                                            </button>
                                        </Link>
                                        <br />
                                        Servicios del local:
                                    </p>
                                    <div className='flex-1 flex flex-wrap justify-start items-start p-1'>
                                        <div className='bg-orange-400 px-5 py-2 rounded-xl mr-2 mb-1'>
                                            <p className='font-bold text-[15px]'>Cafetería</p>
                                        </div>
                                        <div className='bg-orange-400 px-5 py-2 rounded-xl mr-2 mb-1'>
                                            <p className='font-bold text-[15px]'>Comestibles</p>
                                        </div>
                                        <div className='bg-orange-400 px-5 py-2 rounded-xl mr-2 mb-1'>
                                            <p className='font-bold text-[15px]'>Take away</p>
                                        </div>
                                        <div className='bg-orange-400 px-5 py-2 rounded-xl mr-2 mb-1'>
                                            <p className='font-bold text-[15px]'>Sanitarios</p>
                                        </div>
                                        <div className='bg-orange-400 px-5 py-2 rounded-xl mr-2 mb-1'>
                                            <p className='font-bold text-[15px]'>Vista al mar</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 mt-5'>
                                <APIProvider apiKey={`${import.meta.env.VITE_API_KEY_MAPS}`}>
                                    <div className='w-full h-full '>
                                        <Map zoom={17} center={position} mapId={`${import.meta.env.VITE_MAP_ID}`}>
                                            <AdvancedMarker position={position}>
                                                <div>

                                                    <img src={pincito} alt="" className='w-[40px] rounded-full border-red-500 border-[5px] animate-pulse' />
                                                    <div className='absolute bg-orange-400 w-[100px] p-1 left-[102%] top-[-25%] rounded-xl '>
                                                        <p>¡Acá estamos! En la 2da bajada. Pegaditos al barranco, en planta baja.</p>
                                                    </div>
                                                </div>
                                            </AdvancedMarker>
                                        </Map>
                                    </div>
                                </APIProvider>
                            </div>
                        </div>
                        

                    </div>

                </div>
                <img
                    className='w-full h-full object-cover'
                    src={img2}
                    alt="churros imagen"
                />
            </div>
        </>
    );
}

export default Puntos;