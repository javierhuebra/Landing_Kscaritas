import img2 from '../assets/ksca_img1.jpg';
import { useParams, Link } from 'react-router-dom';
import { sucursales } from '../datos/datos';

const Sucursal = () => {
    const { idSucursal } = useParams();
    const sucursal = sucursales.find(suc => suc.id === parseInt(idSucursal));

    if (!sucursal) {
        return (
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <p className='text-white text-3xl'>Sucursal no encontrada</p>
            </div>
        );
    }

    return (
        <div className='h-[100vh] w-[100vw] animate-fade-right animate-once'>
            <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                <div className='w-full h-full flex justify-around items-center flex-col'>
                    <div className='w-full h-[80%] flex justify-around items-center flex-col'>
                        <div className='w-full h-full sm:w-[70%] sm:rounded-xl flex flex-col bg-black bg-opacity-[0.5] p-5 space-y-4 overflow-auto scrollable-div'>
                            <div className='border border-white p-3'>
                                <p className='text-white text-4xl'>{sucursal.nombre}</p>
                            </div>
                            <div>
                                <p className='text-white text-2xl'>{sucursal.descripcion}</p>
                            </div>
                            <div>
                                <p className='text-white text-2xl'><span className='text-orange-300'>Dirección:</span> {sucursal.direccion}</p>
                            </div>
                            
                            <div>
                                <p className='text-white text-2xl'><span className='text-orange-300'>Servicios:</span>  {sucursal.servicios.join(', ')} </p>
                            </div>
                            <div>
                                <p className='text-white text-2xl'><span className='text-orange-300'>Telefono:</span>  {sucursal.telefono} </p>
                            </div>
                            <div>
                                <p className='text-white text-2xl'><span className='text-orange-300'>Horario:</span>  {sucursal.horarios} </p>
                            </div>
                            <div className='flex justify-center items-center '>
                                <Link to={sucursal.menu} target='blank_'>

                                    <button className='bg-orange-300 px-8 text-3xl py-1 font-bold '>Ver Menú</button>
                                </Link>
                            </div>
                            <div>
                                <p className='text-white text-2xl'><span className='text-orange-300 '>Imágenes:</span></p>
                                <div className='flex flex-wrap mt-3 justify-center'>
                                    {sucursal.imagenes?.map((img, index) => (
                                        <img key={index} src={img} alt={`Sucursal ${index}`} className='mr-3 mb-3 w-[250px] h-[250px] object-cover rounded-md' />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className='w-full h-full object-cover'
                src={img2}
                alt="Imagen de sucursal"
            />
        </div>
    );
};

export default Sucursal;
