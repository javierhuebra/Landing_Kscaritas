// En algún componente de tu aplicación
import React, { useEffect, useState } from 'react';

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
        <div className='w-[50px] h-[30px] bg-red-400'>
            <button onClick={handleInstallClick} className='bg-white'>
                Instalar la aplicación
            </button>
        </div>

    );
};

export default InstallButton;