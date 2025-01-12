import img2 from '../assets/ksca_img4.jpg';
import pincito from '../assets/card_logo.jpg';
import mapa from '../assets/mapaksca.png';
import { APIProvider, AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import { BsFillPinMapFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Puntos = () => {
    const position = { lat: -40.8117197, lng: -65.0886717 };
    const centrado = { lat: -40.8099557, lng: -65.0895667 };
    const sucursalBari = { lat: -40.8101800, lng: -65.0891900 };
    const sucursalPrimera = { lat: -40.8094954, lng: -65.086262 };

    const navigate = useNavigate();

    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    <div className='w-full h-[80%] flex justify-around items-center flex-col'>
                        <div className='w-full h-full sm:w-[70%] sm:rounded-xl flex flex-col bg-black bg-opacity-[0.5] p-5 '>
                            <div className='h-[50%] px-2  flex-col sm:flex-row  overflow-auto scrollable-div flex'>
                                <div className='flex flex-col  items-center  img-las-grutas sm:mr-3 p-3 sm:justify-center sm:rounded-xl'>
                                    <div className=''>

                                        <p className='text-white text-4xl font-marker custom-text-shadow text-center'>
                                            Las Grutas
                                        </p>
                                    </div>


                                </div>
                                <div className=' flex-1'>


                                    <p className='text-white text-xl mt-1 '>
                                        En la ciudad de Las Grutas contamos con 3 (tres) sucursales, una en la casa central y dos en puntos estratégicos de la ciudad. En cada una de ellas podrás disfrutar de nuestros productos y servicios. Te invitamos a que nos visites y disfrutes de un momento único en K'scaritas.

                                        {/* <Link to='https://g.page/r/CZXnwFuuEQLiEB0/review' target='_blank'>
                                            <button className='bg-red-500 flex items-center px-5 py-2 rounded-lg mt-5 hover:bg-orange-400'>
                                                Dejar una reseña
                                                <AiFillGoogleCircle className='inline text-white text-2xl ml-2' />
                                            </button>
                                        </Link> */}



                                    </p>
                                    <div onClick={() => navigate('/sucursal/1')} className='cursor-pointer flex justify-start items-center bg-orange-300 hover:bg-orange-400 h-[50px] w-full mt-1 p-1' >
                                        <BsFillPinMapFill className='mr-2   inline ' />
                                        <p className=' italic text-center font-bold'>Peatonal Viedma 824 - PB</p>
                                    </div>
                                    <div onClick={() => navigate('/sucursal/2')} className='cursor-pointer  flex justify-start items-center bg-orange-300 hover:bg-orange-400 h-[50px] w-full mt-1 p-1'>
                                        <BsFillPinMapFill className='mr-2   inline ' />
                                        <p className=' italic text-center font-bold'>Bariloche 770</p>
                                    </div>
                                    <div onClick={() => navigate('/sucursal/3')} className='cursor-pointer flex justify-start items-center bg-orange-300 hover:bg-orange-400 h-[50px] w-full mt-1 p-1'>
                                        <BsFillPinMapFill className='mr-2   inline ' />
                                        <p className=' italic text-center font-bold'>El Bolsón 576</p>
                                    </div>
                                    {/* <div className='flex-1 flex flex-wrap justify-start items-start p-1'>
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



                                    </div> */}
                                </div>
                            </div>
                            <div className='flex-1 mt-5'>
                                <APIProvider apiKey={`${import.meta.env.VITE_API_KEY_MAPS}`}>
                                    <div className='w-full h-full '>
                                        <Map zoom={16} center={centrado} mapId={`${import.meta.env.VITE_MAP_ID}` }
                                            gestureHandling="greedy"
                                            disableDefaultUI={true}
                                        >
                                            <AdvancedMarker position={position}>
                                                <div>

                                                    <img src={pincito} alt="" className='w-[40px] rounded-full border-red-500 border-[5px] animate-pulse' />
                                                    <div style={{ pointerEvents: 'auto' }} className='absolute bg-orange-400  p-1 left-[102%] top-0 rounded-xl flex justify-center items-center'>
                                                        <button className='bg-orange-950 px-3 py-1 rounded-lg text-white z-50'
                                                            onClick={() => navigate('/sucursal/1')}
                                                        >Casa Central</button>
                                                    </div>
                                                </div>
                                            </AdvancedMarker>
                                            <AdvancedMarker position={sucursalBari}>
                                                <div>

                                                    <img src={pincito} alt="" className='w-[40px] rounded-full border-red-500 border-[5px] animate-pulse' />
                                                    <div style={{ pointerEvents: 'auto' }} className='absolute bg-orange-400 w-[100px] p-1 left-[102%] top-0 rounded-xl flex justify-center items-center'>
                                                        <button className='bg-orange-950 px-3 py-1 rounded-lg text-white' onClick={() => navigate('/sucursal/2')}>Sucursal Bariloche</button>
                                                    </div>
                                                </div>
                                            </AdvancedMarker>
                                            <AdvancedMarker position={sucursalPrimera}>
                                                <div>

                                                    <img src={pincito} alt="" className='w-[40px] rounded-full border-red-500 border-[5px] animate-pulse' />
                                                    <div style={{ pointerEvents: 'auto' }} className='absolute bg-orange-400 w-[100px] p-1 left-[102%] top-0 rounded-xl flex justify-center items-center'>
                                                        <button className='bg-orange-950 px-3 py-1 rounded-lg text-white' onClick={() => navigate('/sucursal/3')}>Sucursal Bolsón</button>
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