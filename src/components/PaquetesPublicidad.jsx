import { useRef } from 'react'
import videoBg from '../assets/videos/video.mp4'
import videoCtg from '../assets/videos/contingente.mp4'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import imgLogo from '../assets/logo.png'

const PaquetesPublicidad = () => {
    const serviciosRef = useRef(null)
    const siguienteRef = useRef(null)

    const handleScrollToServicios = () => {
        if (serviciosRef.current) {
            serviciosRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleScrollToSiguiente = () => {
        if (siguienteRef.current) {
            siguienteRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className='min-h-[100vh] w-[100vw] animate-fade-right animate-once animate-duration-800'>

                {/* Sección 1: Portada */}
                <div className='w-full h-[100vh] relative'>
                    <video
                        src={videoBg}
                        autoPlay
                        loop
                        muted
                        className='absolute inset-0 w-full h-full object-cover z-0'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
                    <div className='relative z-20 flex justify-center items-center h-full flex-col text-center px-4'>
                        <h1 className='text-xl sm:text-[40px] font-bold text-white font-marker uppercase drop-shadow-lg'>
                            Llevamos la magia de los churros a cada rincón de Las Grutas.
                        </h1>
                        <button
                            onClick={handleScrollToServicios}
                            className='mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all'
                        >
                            Conocé nuestros servicios
                        </button>
                    </div>
                </div>

                {/* Sección 2: Servicios */}
                <div ref={serviciosRef} className='w-full h-[100vh] relative'>
                    <video
                        src={videoCtg}
                        autoPlay
                        loop
                        muted
                        className='absolute inset-0 w-full h-full object-cover z-0'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
                    <div className='relative z-20 flex justify-center items-center h-full flex-col text-center px-4'>
                        <h1 className='text-xl sm:text-[40px] font-bold text-white font-marker uppercase drop-shadow-lg'>
                            Esamos con vos en cada evento, fiesta o reunión.
                        </h1>
                        <button
                            onClick={handleScrollToSiguiente}
                            className='mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all'
                        >
                            Ver más
                        </button>
                    </div>
                </div>

                {/* Sección 3: Más información */}
                <div ref={siguienteRef} className='w-full h-[100vh] relative flex flex-col justify-center items-center bg-yellow-300 img-las-grutas'>
                    <img src={imgLogo} alt=""  className='max-w-[300px]'/>
                    <h2 className='text-3xl font-bold text-white text-center font-marker uppercase'>Servicio de cafetería para tu grupo.</h2>
                    <div className='flex flex-col justify-between items-center w-full max-w-2xl mt-8  rounded-lg px-4'>
                        <Link to='/'>
                            <button className='bg-orange-500  p-3 rounded'>
                                <p className='text-white text-lg font-bold'>Volver a la web</p>
                            </button>
                        </Link>
                        <Link to='https://wa.me/5492934445966' target='_blank'>
                        <button className='bg-[#12BC7E] mt-4 p-3 rounded flex items-center justify-center'>
                            <IoLogoWhatsapp className='text-2xl text-[#075e74]'/>
                            <p className=' text-lg font-bold  ml-1 text-[#DCF8C5]'>Contáctanos</p>
                        </button>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaquetesPublicidad
