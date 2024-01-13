import React,{useState} from 'react';

import img1 from '../assets/ksca_img6.jpg';
import { useParams } from 'react-router-dom';
import { urlImages } from '../datos/datos';
import { AiFillCloseSquare } from "react-icons/ai";
import { useNavigate, useLocation } from 'react-router-dom';

import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const ImgGrande = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [imagen, setImagen] = useState(urlImages[id])
    const [idMaleable, setIdMaleable] = useState(id)

    const goBack = () => {
        navigate(-1)
    }

    const cambiarRuta = (ruta) => {
        
        //const nuevaLocation = { ...location, pathname: ruta };
        window.history.replaceState(null, '', ruta);
        
    }

    const cambiarImgDerecha = () => {
        if (idMaleable < urlImages.length-1) {
            setIdMaleable(parseInt(idMaleable)+1)
            setImagen(urlImages[parseInt(idMaleable)+1])
            cambiarRuta(`/galeria/imagen/${parseInt(idMaleable)+1}`)
            console.log(idMaleable)
        }else{
            setImagen(urlImages[0])
            setIdMaleable(0)
            cambiarRuta(`/galeria/imagen/${0}`)
        }
    }

    const cambiarImgIzquierda = () => {
        if (idMaleable > 0) {
            setIdMaleable(parseInt(idMaleable)-1)
            setImagen(urlImages[parseInt(idMaleable)-1])
            cambiarRuta(`/galeria/imagen/${parseInt(idMaleable)-1}`)
            console.log(idMaleable)
        }else{
            setImagen(urlImages[urlImages.length-1])
            setIdMaleable(urlImages.length-1)
            cambiarRuta(`/galeria/imagen/${urlImages.length-1}`)
        }
    }
   
    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade animate-once animate-duration-800'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>

                    <div className='w-full h-[80%] bg-black bg-opacity-[0.7] flex relative  justify-center p-5 rounded-xl'>
                        <div onClick={goBack} className=' w-[70px] h-[70px] absolute top-0 left-0 cursor-pointer'>
                            <AiFillCloseSquare className='w-full h-full text-white' />
                        </div>
                        <div onClick={cambiarImgIzquierda} className='absolute bottom-5 left-5 hover:bg-white hover:bg-opacity-[0.1] mr-2 w-[50px] h-[50px] cursor-pointer'>
                            <BsArrowLeftSquareFill className='w-full h-full text-white' />
                        </div>
                        <img className=' h-full object-contain ' src={imagen} alt="" />
                        <div onClick={cambiarImgDerecha} className='absolute bottom-5 right-5 hover:bg-white hover:bg-opacity-[0.1] ml-2  w-[50px] h-[50px] cursor-pointer'>
                            <BsArrowRightSquareFill className='w-full h-full text-white' />
                        </div>
                    </div>
                </div>
                <img
                    className='w-full h-full object-cover '
                    src={img1}
                    alt="churros imagen"
                />
            </div>

        </>
    );
}

export default ImgGrande;