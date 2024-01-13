import React, { useState, useRef } from 'react';

import img1 from '../assets/ksca_img8.jpg';
import banner from '../assets/banner.png';
import spinner from '../assets/spinner.svg';
import emailjs from 'emailjs-com';
import { emailConfig } from '../datos/datos';

const Contacto = () => {
    const form = useRef();
    const [isMessageSent, setMessageSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const { serviceID, templateID, userID } = emailConfig;

    const sendEmail = (e) => {
        e.preventDefault();

        const { serviceID, templateID, userID } = emailConfig;
        setLoading(true);
        emailjs
            .sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                setLoading(false);
                e.target.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='h-[100vh] w-[100vw] animate-fade-right animate-once animate-duration-800'>
                <div className='w-full h-full absolute bg-black bg-opacity-70 flex justify-center items-center'>
                    <div className='w-full h-[80%] flex flex-col justify-center items-center'>
                        <div className='bg-black bg-opacity-[0.5] w-full h-full sm:w-[40%] sm:rounded-xl sm:overflow-hidden flex flex-col '>
                            <div className='h-[30%] '>
                                <img src={banner} className='w-full h-full object-cover' alt="" />
                            </div>
                            <div className='bg-orange-500 h-[70%] p-5 flex justify-center items-center w-full '>
                                <form ref={form} onSubmit={sendEmail} className='w-full border-[5px] border-white p-5 rounded-xl '>
                                    <p className='text-4xl font-marker font-bold text-white mb-1 custom-text-shadow'>Hagamos contacto!</p>
                                    <p className='text-white font-bold mb-1 custom-text-shadow'>Estamos para ayudarte</p>
                                    <div>
                                        <input
                                            type='text'
                                            className='p-1 form-control rounded border-white mb-3 form-input w-full '
                                            name='user_name'
                                            placeholder='Tu nombre'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            className='p-1 form-control rounded border-white mb-3 form-input w-full'
                                            name='user_email'
                                            placeholder='Un e-mail para contestarte'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            className='p-1 form-control rounded border-white mb-3 form-text-area w-full'
                                            name='message'
                                            rows='5'
                                            cols='30'
                                            placeholder='"Hola Kscaritas, te quiero mucho"'
                                            required
                                        ></textarea>
                                    </div>
                                    <div className='submit-button-wrapper' data-wow-delay='.6s'>
                                        {
                                            loading ?
                                                <img src={spinner} alt='Spinner' className='h-[70px] rounded-full' />
                                                :
                                                <>
                                                    {!isMessageSent ? (
                                                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-2'>
                                                            Enviar
                                                        </button>
                                                    ) : (
                                                        <div className='success-message'>
                                                            <p className='text-white font-bold mb-1 custom-text-shadow'>Mensaje enviado!</p>
                                                            <p className='text-white  mb-1 custom-text-shadow italic'>Gracias por contactarnos. Te respondemos a la brevedad.</p>

                                                        </div>
                                                    )}
                                                </>
                                        }

                                    </div>
                                </form>
                            </div>
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

export default Contacto;