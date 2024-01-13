import React, { useContext, useEffect, useState } from 'react';
import { navBarContext } from '../../context/context';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import monigote from '../assets/monigote.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { productos, rellenos } from '../datos/datos';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
const Anotador = () => {
    const { setIsNavBarActive } = useContext(navBarContext);
    const navigate = useNavigate();
    const [isAnotadorActive, setIsAnotadorActive] = useState(false)
    const [productoActual, setProductoActual] = useState({
        productoActual: '', rellenoActual: '', imagenProducto: '', cantidad: 0
    })
    const [ordenes, setOrdenes] = useState([])
    const [cantidades, setCantidades] = useState(0)

    const [modalLimpio, setModalLimpio] = useState(false)

    const [indexes, setIndexes] = useState({
        indexProducto: null, indexRelleno: null
    })

    const handleCargarProducto = (producto, index) => {
        setIndexes({ ...indexes, indexProducto: index })
        if (producto.producto === 'Raspaditas' && productoActual.rellenoActual !== 'Sin relleno') {
            setProductoActual({ ...productoActual, productoActual: producto.producto, imagenProducto: producto.imagen, cantidad: 1, rellenoActual: '' })
            return
        }
        setProductoActual({ ...productoActual, productoActual: producto.producto, imagenProducto: producto.imagen, cantidad: 1 })

    }
    const handleCargarRelleno = (relleno, index) => {
        setIndexes({ ...indexes, indexRelleno: index })
        setProductoActual({ ...productoActual, rellenoActual: relleno })
    }
    const handleAgregarAOrden = () => {
        const ordTemp = [...ordenes] //Para cargarlo con tipo fifo

        const encontrado = ordTemp.find((objeto) => {
            return objeto.productoActual === productoActual.productoActual && objeto.rellenoActual === productoActual.rellenoActual;
        });

        if (encontrado) {
            // Si el producto ya existe en la orden, se suma la cantidad
            encontrado.cantidad++;
        } else {
            // Si el producto no existe en la orden, lo agregamos al inicio
            ordTemp.unshift(productoActual);
        }

        setOrdenes(ordTemp)
        setProductoActual({ productoActual: '', rellenoActual: '', imagenProducto: '' })
        setIndexes({ indexProducto: null, indexRelleno: null })
    }
    const handleCambiarCantidad = (e, index) => {
        // Clona el arreglo de órdenes
        const nuevasOrdenes = [...ordenes];
        // Modifica la cantidad del producto en la orden específica
        nuevasOrdenes[index].cantidad = e.target.value;
        // Actualiza el estado con el nuevo arreglo de órdenes
        setOrdenes(nuevasOrdenes);

    }
    const handleBlur = (e, index) => {
        // Clona el arreglo de órdenes
        const nuevasOrdenes = [...ordenes];
        // Modifica la cantidad del producto en la orden específica
        if (e.target.value === '' || e.target.value <= 0) {
            nuevasOrdenes[index].cantidad = 1;
        }
        // Actualiza el estado con el nuevo arreglo de órdenes
        setOrdenes(nuevasOrdenes);
    }
    const handleIncrementarCantidad = (index) => {
        // Clona el arreglo de órdenes
        const nuevasOrdenes = [...ordenes];
        // Modifica la cantidad del producto en la orden específica
        nuevasOrdenes[index].cantidad++;
        // Actualiza el estado con el nuevo arreglo de órdenes
        setOrdenes(nuevasOrdenes);
    }
    const handleDecrementarCantidad = (index) => {
        // Clona el arreglo de órdenes
        const nuevasOrdenes = [...ordenes];
        // Modifica la cantidad del producto en la orden específica
        if (nuevasOrdenes[index].cantidad > 1) {
            nuevasOrdenes[index].cantidad--;
        }
        // Actualiza el estado con el nuevo arreglo de órdenes
        setOrdenes(nuevasOrdenes);

    }

    const handleEliminarProducto = (index) => {
        // Clona el arreglo de órdenes
        const nuevasOrdenes = [...ordenes];
        // Modifica la cantidad del producto en la orden específica
        nuevasOrdenes.splice(index, 1);
        // Actualiza el estado con el nuevo arreglo de órdenes
        setOrdenes(nuevasOrdenes);
    }

    const contarCantidades = () => { //Trabajando aca
        let cantidadUnidades = 0

        ordenes.map((orden) => {
            cantidadUnidades += parseInt(orden.cantidad)

        })

        setCantidades(cantidadUnidades)

    }

    useEffect(() => {
        setIsNavBarActive(false)
        return () => {
            setIsNavBarActive(true)
        }
    }, [])
    useEffect(() => {
        contarCantidades()
    }, [ordenes])
    return (
        <div className="w-[100vw] h-[100vh] animate-fade ">
            <div className='w-full h-full img-background3 flex flex-col'>
                <BsArrowLeftSquareFill
                    onClick={() => navigate(-1)}
                    className='text-white text-6xl mt-2 ml-2 mb-2'
                />
                <div className='flex-1  flex flex-col items-center justify-center'>
                    {
                        isAnotadorActive ?
                            <div className=' w-full sm:w-[50%] flex flex-col h-full animate-fade-left'>
                                {
                                    modalLimpio &&
                                    <div className='w-full h-full bg-black absolute z-10 bg-opacity-[0.5] p-5 '>
                                        <div className='bg-[#fcf7ce] w-full h-full rounded-lg overflow-auto'>
                                            <div className='border-b-[1px] bg-[#f5edb4] border-dashed border-[#bbb589] flex justify-between items-center pr-5'>
                                                <AiFillCloseSquare onClick={() => setModalLimpio(false)} className='text-6xl ' />
                                                <p className='text-2xl font-marker text-[#85805e]'>K'scaCompra</p>
                                            </div>
                                            <div className='p-5'>
                                                <p className='text-xl font-bold border-b-[1px] border-[#bbb589] border-dashed'>Detalle</p>

                                                {
                                                    ordenes.length === 0 ?
                                                        <p className='text-center'>No hay productos en la orden</p>
                                                        :
                                                        ordenes.map((orden, index) => (
                                                            <div key={index} className='flex justify-between items-center mt-2'>
                                                                <p className='text-lg'>{orden.productoActual} {orden.rellenoActual !== 'Sin relleno' && <span className='italic'>con</span>} {orden.rellenoActual}</p>
                                                                <p className='text-xl'>{orden.cantidad} u</p>
                                                            </div>
                                                        )
                                                        )
                                                }
                                                <p className='text-lg  border-t-[1px] border-[#bbb589] border-dashed pt-3 mt-2'><span className='font-bold'>En total llevas:</span> {cantidades} unidades</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <p className='text-xl text-center bg-orange-400 text-white custom-text-shadow font-bold'>Libreta K'scaritas </p>
                                <div className='bg-black bg-opacity-[0.5] py-2'>
                                    <p className='text-xl  text-white'>Selecciona el producto:</p>
                                    <div className='overflow-auto'>

                                        <div className=' w-[120%] sm:w-[100%] flex p-1 '>
                                            {

                                                productos.map((producto, index) => (
                                                    <div onClick={() => handleCargarProducto(producto, index)} key={index} className={`flex select-none flex-col rounded-lg mx-1  flex-1 bg-orange-400  justify-between items-center ${indexes.indexProducto === index && 'bg-yellow-200'}`}>
                                                        <div className='flex-1 flex justify-center items-center cursor-pointer'>

                                                            <img src={producto.imagen} alt="" className='w-full drop-shadow-anexo' />
                                                        </div>
                                                        <p className=''>{producto.producto}</p>

                                                    </div>
                                                )
                                                )
                                            }
                                        </div>
                                    </div>
                                    <p className='text-xl  text-white mt-2'>Seleccione el relleno: </p>

                                    <div className='overflow-auto sm:overflow-hidden'>

                                        <div className={`flex sm:flex-wrap sm:w-[100%] ${productoActual.productoActual === 'Raspaditas' ? 'w-[100%]' : 'w-[250%]'}   p-1`}>
                                            {
                                                productoActual.productoActual === 'Raspaditas' ?
                                                    <div onClick={() => handleCargarRelleno('Sin relleno', 0)} className={`flex select-none sm:w-[50px] flex-col rounded-lg px-3 h-[48px] bg-orange-400 justify-center items-center ${indexes.indexRelleno === 0 && 'bg-yellow-200'}`}>
                                                        <p className='text-center'>Sin relleno</p>
                                                    </div>
                                                    :
                                                    rellenos.map((relleno, index) => (
                                                        <div onClick={() => handleCargarRelleno(relleno, index)} key={index} className={`flex sm:w-[100px] sm:h-[50px] sm:mb-2 sm:flex-none select-none flex-col rounded-lg flex-1 mx-1 bg-orange-400  justify-center items-center ${indexes.indexRelleno === index && 'bg-yellow-200'}`}>

                                                            <p className='text-center'>{relleno}</p>

                                                        </div>
                                                    )
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <p className='text-xl text-white mt-2'>Mandar a la orden:</p>
                                    <div className='w-full h-[100px] rounded-xl bg-orange-500 flex justify-center items-center p-2'>
                                        <div className='flex border-red-50 border-[3px] bg-red-600 rounded-xl items-center justify-center h-full flex-1'>
                                            <div className=' mr-1 pb-1'>
                                                {
                                                    productoActual.productoActual.length === 0 ?
                                                        <p className='bg-gray-300 text-gray-500 px-2 rounded-md texto-peque'>Elija un producto</p>
                                                        :
                                                        <div className='flex items-center'>
                                                            <img src={productoActual.imagenProducto} alt="" className='w-[55px] drop-shadow-anexo' />
                                                            <p className='border-b-2 texto-peque'>{productoActual.productoActual}</p>
                                                        </div>
                                                }

                                            </div>
                                            {
                                                productoActual.rellenoActual !== 'Sin relleno' &&
                                                <p className='mr-1 italic'>con</p>
                                            }

                                            <div className=' pb-1'>
                                                {
                                                    productoActual.rellenoActual.length === 0 ?
                                                        <p className='bg-gray-300 text-gray-500 px-2 rounded-md texto-peque'>Elija un relleno</p>
                                                        :
                                                        <p className='border-b-2 texto-peque'>{productoActual.rellenoActual}</p>
                                                }
                                            </div>
                                        </div>
                                        {
                                            productoActual.productoActual.length !== 0 && productoActual.rellenoActual.length !== 0 ?

                                                <button onClick={handleAgregarAOrden} className='select-none animate-jump bg-yellow-400 custom-shadow w-[90px] ml-2 rounded-lg'>
                                                    Agregar y Elegir Cantidad
                                                </button>
                                                :
                                                <button disabled className=' bg-gray-400 w-[90px] select-none text-gray-500 bg-opacity-[0.8] ml-2 rounded-lg'>
                                                    Agregar y Elegir Cantidad
                                                </button>
                                        }
                                    </div>
                                </div>
                                <div className='bg-black bg-opacity-[0.5] border-t-2 border-dashed flex-1'>
                                    <p className='text-xl text-white mt-2'>Orden:</p>
                                    <div className='border-b-2 border-dashed   w-full min-h-[100px] max-h-[25vh] overflow-auto scrollable-div  p-1'>

                                        {
                                            ordenes.length === 0 ?
                                                <p className=' text-center text-white'>No hay productos en la orden</p>
                                                :
                                                ordenes.map((orden, index) => (
                                                    <div key={index} className='flex  w-full h-[70px] select-none mb-1 items-center justify-between bg-orange-500 p-1 border-[3px] rounded-xl'>
                                                        <div onClick={() => handleEliminarProducto(index)} className=' w-[50px] h-full flex justify-center items-center'>
                                                            <BsFillTrashFill className='text-2xl cursor-pointer' />
                                                        </div>
                                                        <div className='rounded-lg border-[3px] bg-orange-400 flex-1 h-full flex items-center pl-2'>
                                                            <p className='texto-peque'> <span className='block'>{orden.productoActual}</span>
                                                                {
                                                                    orden.rellenoActual !== 'Sin relleno' ?
                                                                        <span className='inline-block'><span className='italic'>con</span> {orden.rellenoActual}<span className='font-bold italic '> x {orden.cantidad} u</span></span>
                                                                        :
                                                                        <span className=''>{orden.rellenoActual}  <span className='font-bold italic  '> x {orden.cantidad} u</span></span>
                                                                }
                                                            </p>



                                                        </div>
                                                        <div className='ml-1 h-full w-[110px] flex justify-between items-center'>
                                                            <div onClick={() => handleDecrementarCantidad(index)} className='w-[25%] h-[50%] bg-gray-400 text-2xl flex justify-center items-center rounded-sm'>
                                                                -
                                                            </div>
                                                            <div className='w-[45%] h-[50%]'>
                                                                <input
                                                                    type="number"
                                                                    className='w-full h-full text-center rounded-sm'
                                                                    value={orden.cantidad}
                                                                    onChange={(e) => handleCambiarCantidad(e, index)}
                                                                    onBlur={(e) => handleBlur(e, index)}
                                                                />
                                                            </div>
                                                            <div onClick={() => handleIncrementarCantidad(index)} className='w-[25%] h-[50%] bg-gray-400 text-2xl flex justify-center items-center rounded-sm'>
                                                                +
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                                )
                                        }
                                    </div>
                                    <div className='flex justify-between mt-2 px-2'>
                                        <p className='text-white'>Unidades: {cantidades}</p>
                                        <p className='text-white text-[10px]'>K'scaSoft v1.0.0</p>
                                        <button onClick={() => setModalLimpio(true)} className='text-white font-bold bg-orange-400 px-3 rounded-lg custom-text-shadow'>
                                            Ver en limpio
                                        </button>
                                    </div>

                                </div>
                            </div>
                            :
                            <div className='flex flex-col justify-center items-center'>
                                <div className='bg-white rounded-2xl w-[90%] p-3 custom-shadow'>
                                    <p className='text-2xl font-bold'>
                                        En esta sección te brindamos una herramienta para que <span className='text-green-700'> puedas
                                        llevar la cuenta de tu orden y los productos</span>  con su
                                        respectivo relleno.
                                    </p>
                                    <div className='flex justify-end'>
                                        <button onClick={() => setIsAnotadorActive(true)} className='bg-orange-500 text-white px-6 py-2 font-bold custom-shadow rounded-xl'>
                                            Abrir App<AiOutlineArrowRight className='inline-block ml-2' />
                                        </button>
                                    </div>
                                </div>
                                <div className=' w-[70%] sm:w-[40%] '>
                                    <img src={monigote} alt="monigote kscarito" className='w-full drop-shadow-anexo' />
                                </div>
                            </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default Anotador;