import { useState } from "react";
import videoMistico from "../assets/videos/mistico.mp4";
import churro1 from "../assets/churros.png";
import logo from "../assets/logo.png";
// 12 churros (puedes cambiar nombre, descripción e imagen)
const CHURROS = [
  { nombre: "Clásico Azúcar", desc: "El de toda la vida, simple y perfecto.", img: churro1 },       // Aries
  { nombre: "Dulce de Leche", desc: "Cremosidad argentina por dentro.", img: churro1 },                 // Tauro
  { nombre: "Chocolate", desc: "Intenso, para mentes curiosas.", img: churro1 },                      // Géminis
  { nombre: "Relleno Crema Pastelera", desc: "Suave y cariñoso.", img: churro1 },                               // Cáncer
  { nombre: "Baño de Chocolate", desc: "Brilla como vos.", img: churro1 },                      // Leo
  { nombre: "Dulce de Leche + Coco", desc: "Equilibrio y detalle.", img: churro1 },                // Virgo
  { nombre: "Frutos Rojos", desc: "Dulce y diplomático.", img: churro1 },                        // Libra
  { nombre: "Nutella", desc: "Profundo y tentador.", img: churro1 },                                // Escorpio
  { nombre: "Relleno de Membrillo", desc: "Fresco, aventurero.", img: churro1 },                             // Sagitario
  { nombre: "Relleno de Marroc", desc: "Serio pero goloso.", img: churro1},                              // Capricornio
  { nombre: "Manzana y Canela", desc: "Innovador y libre.", img: churro1 },                                    // Acuario
  { nombre: "Dulce de Leche + Chocolate", desc: "Soñador y romántico.", img: churro1 },           // Piscis
];

// Rangos de signos (mes y día, sin año). OJO: meses 1-12 aquí (no 0-based).
const SIGNOS = [
  { signo: "Aries",       start: [3, 21],  end: [4, 19]  },
  { signo: "Tauro",       start: [4, 20],  end: [5, 20]  },
  { signo: "Géminis",     start: [5, 21],  end: [6, 20]  },
  { signo: "Cáncer",      start: [6, 21],  end: [7, 22]  },
  { signo: "Leo",         start: [7, 23],  end: [8, 22]  },
  { signo: "Virgo",       start: [8, 23],  end: [9, 22]  },
  { signo: "Libra",       start: [9, 23],  end: [10, 22] },
  { signo: "Escorpio",    start: [10, 23], end: [11, 21] },
  { signo: "Sagitario",   start: [11, 22], end: [12, 21] },
  { signo: "Capricornio", start: [12, 22], end: [1, 19]  }, // cruza de año
  { signo: "Acuario",     start: [1, 20],  end: [2, 18]  },
  { signo: "Piscis",      start: [2, 19],  end: [3, 20]  },
];

// Util: compara mes/día sin importar el año
function isBetween(md, start, end) {
  const toKey = ([m, d]) => m * 100 + d; // 3/21 => 321
  const k = toKey(md);
  const s = toKey(start);
  const e = toKey(end);
  if (s <= e) return k >= s && k <= e;   // rango normal (no cruza año)
  return k >= s || k <= e;               // rango cruzando año (Capricornio)
}

// Devuelve índice del signo (0..11) según fecha "YYYY-MM-DD"
function getSignIndexFromDate(dateStr) {
  if (!dateStr) return -1;
  // parseo robusto sin problemas de timezone
  const [y, m, d] = dateStr.split("-").map(Number);
  const md = [m, d];

  // Busco signo (Capricornio está antes de Acuario en nuestro array? No; lo pusimos 10º para mapear a CHURROS[9])
  for (let i = 0; i < SIGNOS.length; i++) {
    const { start, end } = SIGNOS[i];
    if (isBetween(md, start, end)) return i;
  }
  return -1;
}

const Signos = () => {
  const [fecha, setFecha] = useState("");
  const [resultado, setResultado] = useState(null); // {signo, churro}

  const asignarChurro = () => {
    const idx = getSignIndexFromDate(fecha);
    if (idx === -1) {
      setResultado(null);
      return;
    }
    const signo = SIGNOS[idx].signo;
    const churro = CHURROS[idx];
    setResultado({ signo, churro });
  };

  return (
    <>
      <div className="min-h-[100vh] w-[100vw] animate-fade-right animate-once animate-duration-800">
        <div className="w-full h-[100vh] relative">
          <video
            src={videoMistico}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          

          <div className="relative z-20 flex justify-center items-center h-full flex-col text-center px-4 gap-6">
            <div className="border-[3px] rounded-2xl p-6 border-[#F9A429] bg-black/30 backdrop-blur-sm">
            <img src={logo} alt="" />
              <h1 className="text-2xl sm:text-[40px] font-bold text-white font-marker uppercase drop-shadow-lg">
                ¿Qué churro te representa según tu fecha de nacimiento?
              </h1>

              <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 justify-center">
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#F9A429]"
                  aria-label="Fecha de nacimiento"
                />
                <button
                  onClick={asignarChurro}
                  className="px-4 py-2 rounded-xl bg-[#F9A429] text-black font-semibold hover:opacity-90 transition"
                >
                  Descubrir mi churro
                </button>
              </div>

              {!resultado && !fecha && (
                <p className="text-sm text-white/80 mt-2">
                  Elegí una fecha válida para continuar.
                </p>
              )}
            </div>

            {resultado && (
              <div className="max-w-xl w-full bg-white/90 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  {resultado.churro.img && (
                    <img
                      src={resultado.churro.img}
                      alt={resultado.churro.nombre}
                      className="w-24 h-24 object-contain rounded-xl"
                    />
                  )}
                  <div className="text-left">
                    <p className="text-sm text-gray-700">
                      Tu signo: <span className="font-semibold">{resultado.signo}</span>
                    </p>
                    <h2 className="text-xl font-bold">
                      {resultado.churro.nombre}
                    </h2>
                    <p className="text-gray-700">{resultado.churro.desc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signos;
