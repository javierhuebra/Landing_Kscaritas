import React, { useEffect, useRef, useState } from 'react'
import background from './imagenes/background.png'
import flecha from './imagenes/flecha.png'
import liana from './imagenes/liana.png'

// Imágenes individuales para cada objeto
import churro1 from './imagenes/churrospixel.png'
import churro2 from './imagenes/churroplatopix.png'
import churro3 from './imagenes/tortafritapix.png'
import churro4 from './imagenes/bombapix.png'


// Personaje
import churrero from './imagenes/churreropix.png'

const Juego = () => {
    const [playerX, setPlayerX] = useState(window.innerWidth / 2)
    const [fallingObjects, setFallingObjects] = useState([])
    const [score, setScore] = useState(0)

    const [launcherX, setLauncherX] = useState(100)
    const [launcherDirection, setLauncherDirection] = useState('right')
    const [playerSize, setPlayerSize] = useState(70)


    const playerXRef = useRef(playerX)
    const launcherXRef = useRef(launcherX)

    // Objetos con imagen y puntos
    const objectTypes = [
        {
            image: churro1,
            points: 10,
            style: { width: '70px', height: '90px' },
            effect: 'grow', // 👈 efecto
        },
        {
            image: churro2,
            points: 20,
            style: { width: '70px', height: '70px' },
            effect: null,
        },
        {
            image: churro3,
            points: 30,
            style: { width: '70px', height: '70px' },
            effect: 'grow',
        },
        {
            image: churro4,
            points: -15,
            style: { width: '70px', height: '70px' },
            effect: 'shrink', // 👈 bomba
        },
    ]





    useEffect(() => {
        playerXRef.current = playerX
    }, [playerX])

    useEffect(() => {
        launcherXRef.current = launcherX
    }, [launcherX])
    const [facing, setFacing] = useState('left') // nuevo estado
    const movePlayer = (direction) => {
        const step = 30
        setFacing(direction) // actualiza dirección
        setPlayerX((prev) => {
            const newX =
                direction === 'left'
                    ? Math.max(0, prev - step)
                    : Math.min(window.innerWidth - 50, prev + step)
            playerXRef.current = newX
            return newX
        })
    }

    // Movimiento automático del lanzador
    useEffect(() => {
        const interval = setInterval(() => {
            setLauncherX((prev) => {
                const step = 4
                let newX = prev

                if (launcherDirection === 'right') {
                    newX = prev + step
                    if (newX > window.innerWidth - 50) {
                        setLauncherDirection('left')
                        newX = window.innerWidth - 50
                    }
                } else {
                    newX = prev - step
                    if (newX < 0) {
                        setLauncherDirection('right')
                        newX = 0
                    }
                }

                launcherXRef.current = newX
                return newX
            })
        }, 16)

        return () => clearInterval(interval)
    }, [launcherDirection])

    // Generar objetos que caen con intervalo variable
    useEffect(() => {
        let timeoutId

        const spawnObject = () => {
            const random = Math.floor(Math.random() * objectTypes.length)
            const randomSpeed = Math.random() * 2 + 1

            setFallingObjects((prev) => [
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    x: launcherXRef.current + 10,
                    y: 50,
                    speed: randomSpeed,
                    ...objectTypes[random],
                },
            ])

            const nextInterval = Math.random() * 1000 + 1000 // 1s a 2s
            timeoutId = setTimeout(spawnObject, nextInterval)
        }

        spawnObject()

        return () => clearTimeout(timeoutId)
    }, [])

    // Movimiento y colisión
    useEffect(() => {
        const moveObjects = () => {
            setFallingObjects((prevObjects) => {
                return prevObjects
                    .map((obj) => {
                        const newY = obj.y + obj.speed

                        const collides =
                            newY > window.innerHeight - 160 &&
                            obj.x < playerXRef.current + 70 &&
                            obj.x + 50 > playerXRef.current

                        if (collides) {
                            setScore((prev) => prev + obj.points)

                            // Aplicar efecto
                            if (obj.effect === 'grow') {
                                setPlayerSize(90)
                                setTimeout(() => setPlayerSize(70), 100) // volver al tamaño normal luego de 100ms
                            } else if (obj.effect === 'shrink') {
                                setPlayerSize(50)
                                setTimeout(() => setPlayerSize(70), 100)
                            }

                            return null
                        }

                        if (newY > window.innerHeight - 100) return null

                        return { ...obj, y: newY }
                    })
                    .filter(Boolean)
            })

            requestAnimationFrame(moveObjects)
        }

        moveObjects()
    }, [])

    return (
        <div className="flex flex-col h-screen w-screen bg-black text-white select-none overflow-hidden">
            <div
                className="relative flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <div className="absolute top-4 left-4 text-xl">Puntaje: {score}</div>

                {/* Lanzador */}
                <div
                    className="absolute top-12 h-[30px] w-[30px] bg-pink-500 rounded"
                    style={{ left: `${launcherX}px` }}
                />
                <div
                    className="absolute top-20 h-[30px] w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${liana})`,
                    }}
                />

                {/* Jugador con imagen */}
                <img
                    src={churrero}
                    alt="Churrero"
                    className={`absolute transition-all duration-100 drop-shadow-2xl ${facing === 'right' ? 'scale-x-[-1]' : ''}`}
                    style={{
                        bottom: '10px',
                        left: `${playerX}px`,
                        width: `${playerSize}px`,
                        height: `${playerSize}px`,
                    }}
                />



                {/* Objetos con imagen */}
                {fallingObjects.map((obj) => (
                    <img
                        key={obj.id}
                        src={obj.image}
                        alt="Objeto"
                        className="absolute"
                        style={{
                            top: `${obj.y}px`,
                            left: `${obj.x}px`,
                            ...obj.style, // ✅ aplica estilo personalizado
                        }}
                    />
                ))}

            </div>

            {/* Controles */}
            <div className="flex w-full bg-orange-500">
                <button
                    onClick={() => movePlayer('left')}
                    className="w-1/2 py-6 flex justify-center items-center active:bg-gray-700"
                >
                    <img src={flecha} alt="Izquierda" className="h-[64px]" />
                </button>
                <button
                    onClick={() => movePlayer('right')}
                    className="w-1/2 py-6 flex justify-center items-center active:bg-gray-700"
                >
                    <img
                        src={flecha}
                        alt="Derecha"
                        className="h-[64px] transform scale-x-[-1]"
                    />
                </button>
            </div>
        </div>
    )
}

export default Juego
