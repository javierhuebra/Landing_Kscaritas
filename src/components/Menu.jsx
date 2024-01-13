import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { FaCookieBite } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
const Menu = ({ setIsOpenMenu }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpenMenu(false);
    }

    return (
        <>
            <div className="w-full h-[100vh] absolute right-0 flex justify-end">
                <div onClick={() => setIsOpenMenu(false)} className="w-[40%] sm:w-[75%] h-full  bg-black bg-opacity-[0.2]">

                </div>
                <div className="w-[70%] sm:w-[25%] h-full  shadow-xl animate-fade-right animate-once animate-duration-500 ">
                    <div className="bg-black w-full h-full absolute blur-[5px]">

                    </div>
                    <div className="w-full h-full flex flex-col  relative overflow-hidden">

                        <div className=" w-[100%]  h-[100%] absolute z-10 flex flex-col">
                            <div className="  flex justify-between items-center  ">
                                <AiFillCloseSquare onClick={() => setIsOpenMenu(false)} className="text-6xl  text-[#b36f21] cursor-pointer hover:text-[#f95329]" />

                            </div>
                            <div className="p-5 flex-1 w-full">

                                <div onClick={() => handleNavigate('/')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <AiFillHome className="text-xl text-white " />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 font-marker custom-text-shadow">Inicio</p>
                                </div>

                                <div onClick={() => handleNavigate('/sobre-nosotros')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <AiFillBulb className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Nosotros</p>
                                </div>

                                <div onClick={() => handleNavigate('/productos')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <FaCookieBite className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Productos</p>
                                </div>

                                <div onClick={() => handleNavigate('/puntos-de-venta')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <FaMapMarkerAlt className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Ubicación</p>
                                </div>

                                <div onClick={() => handleNavigate('/informacion-turista')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <FaInfo className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Info turista</p>
                                </div>

                                <div onClick={() => handleNavigate('/galeria')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <FaFileImage className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Galería</p>
                                </div>

                                <div onClick={() => handleNavigate('/contacto')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#b36f21] items-center p-1 mb-2 cursor-pointer hover:bg-[#f95329] transition">
                                    <FaWpforms className="text-xl text-white" />
                                    <p className="text-2xl ml-3 font-bold text-orange-300 custom-text-shadow font-marker">Contacto</p>
                                </div>

                                <div onClick={() => handleNavigate('/herramientas/anotador')} className="rounded-br-full rounded-tl-full flex pl-10 bg-[#e2e055] items-center p-1 mt-8 cursor-pointer hover:bg-[#f95329] transition">
                                    <BsFillPencilFill className="text-xl text-amber-950" />
                                    <p className="text-2xl ml-3 font-bold text-amber-950  custom-text-shadow font-marker ">Libreta</p>
                                </div>

                            </div>
                        </div>

                        <div className="opacity-40 absolute w-[120%]">

                            <p className="text-xl font-bold text-[#77481b] font-marker">
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                                K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas K'scaritas
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;