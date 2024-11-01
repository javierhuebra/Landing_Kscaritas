import img2 from '../assets/ksca_img8.jpg';
import logo from '../assets/card_logo.jpg';
const SobreNosotros = () => {
    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    <div className='w-full h-[80%] lg:w-[90%] xl:w-[70%] p-5 flex items-center flex-col'>
                        <div className='w-full h-[70%] sm:h-[50%] sm:rounded-xl p-5 flex bg-black bg-opacity-[0.5] '>
                            <div className=' flex-1 h-full  overflow-auto pr-5 scrollable-div'  >
                                <h2 className='text-white font-marker text-4xl font-bold custom-text-shadow mb-4'>¿Quiénes Somos?</h2>
                                <p className='text-justify text-white  text-xl custom-text-shadow'>
                                    ¡Bienvenidos a Kscaritas, el hogar de los panificados de playa más deliciosos y originales!
                                    Desde nuestro modesto comienzo en el año <span className='font-bold text-orange-400'>2010 en la ciudad de Las Grutas</span>,
                                    nos hemos convertido en una verdadera referencia en la gastronomía playera gracias a nuestra pasión
                                    por la <span className='font-bold text-orange-400'>innovación y compromiso</span> con la satisfacción de nuestros clientes.
                                    <br/>
                                    En K'scaritas, no solo elaboramos productos; creamos experiencias únicas y
                                    sabores inolvidables.
                                    Desde el principio, nos hemos destacado por atrevernos a explorar rellenos poco convencionales que sorprenden y encantan a
                                    todos aquellos que prueban nuestros productos. Nuestra fábrica es más que un lugar donde se preparan delicias,
                                    es un epicentro de <span className='font-bold text-orange-400'>creatividad gastronómica</span>.
                                </p>
                            </div>
                            <img src={logo} alt="logo kscaritas" className='h-full rounded-2xl hidden sm:ml-2 sm:block' />
                        </div>
                        <div className='mt-1 w-full  h-[30%] sm:h-[50%]  flex justify-center items-center'>
                            

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

export default SobreNosotros;