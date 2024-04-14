// En algún componente de tu aplicación
import React, { useEffect, useState } from 'react';
import playstores from '../../assets/playstores.png';
const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('El usuario aceptó la instalación');
                } else {
                    console.log('El usuario rechazó la instalación');
                }

                setDeferredPrompt(null);
            });
        }
    };

    return (
        <div onClick={handleInstallClick} className='w-[150px] md:w-[230px] absolute left-5 bottom-[15%] hover:cursor-pointer' style={{ display: deferredPrompt ? 'block' : 'none' }}>
            <img src={playstores} alt="" />
            
        </div>

    );
};

export default InstallButton;