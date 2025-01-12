import churro from '../assets/churros.png'
import dona from '../assets/donas.png'
import tortafrita from '../assets/tortafritas.png'
import medialuna from '../assets/medialuna.png'
import raspadita from '../assets/raspaditas.png'

import img1 from '../assets/img_galeria/1.jpg'
import img2 from '../assets/img_galeria/2.jpg'
import img3 from '../assets/img_galeria/3.jpg'
import img4 from '../assets/img_galeria/4.jpg'
import img5 from '../assets/img_galeria/5.jpg'
import img6 from '../assets/img_galeria/6.jpg'
import img7 from '../assets/img_galeria/7.jpg'
import img8 from '../assets/img_galeria/8.jpg'
import img9 from '../assets/img_galeria/9.jpg'
import img10 from '../assets/img_galeria/10.jpg'
import img11 from '../assets/img_galeria/11.jpg'
import img12 from '../assets/img_galeria/12.jpg'
import img13 from '../assets/img_galeria/13.jpg'
import img14 from '../assets/img_galeria/14.jpg'
import img15 from '../assets/img_galeria/15.jpg'
import img16 from '../assets/img_galeria/16.jpg'
import img17 from '../assets/img_galeria/17.jpg'
import img18 from '../assets/img_galeria/18.jpg'
import img19 from '../assets/img_galeria/19.jpg'
import img20 from '../assets/img_galeria/20.jpg'

import imgSucursal1 from '../assets/sucursal1_1.jpg'
import imgSucursal2 from '../assets/sucursal1_2.jpg'
import imgSucursal3 from '../assets/sucursal1_3.jpg'
import imgSucursal4 from '../assets/sucursal1_4.jpg'
import imgSucursal5 from '../assets/sucursal1_5.jpeg'
import imgSucursal6 from '../assets/sucursal1_6.jpeg'

export const descripciones = {
    churros: `Descubre los Churros K'scaritas, una delicia única que fusiona tradición y 
    calidad en la majestuosa región de la Patagonia. Su masa perfectamente crujiente por fuera 
    y esponjosa por dentro. 
    El toque final: Seleccionar el relleno que más te guste
    para una experiencia gastronómica única. 
    ¡Un placer para el paladar y un tributo a la belleza de la Patagonia!`,

    donas: `Sumérgete en el mundo dulce de nuestras donas artesanales. 
    Cada bocado es una explosión de sabores y texturas, con una amplia variedad de 
    rellenos que serán las delicias de los amantes del dulce y lo agridulce. 
    Descubre la perfección en cada anillo con nuestras donas exclusivas.`,

    tortafritas: `Disfruta de la auténtica tradición con nuestras tortafritas crujientes por fuera 
    y tiernas por dentro. El sabor inigualable de la masa recién horneada te transportará a la 
    esencia misma de la cocina casera. Perfectas para compartir en cualquier ocasión.`,

    medialunas: `Déjate tentar por la exquisitez de nuestras medialunas recién horneadas. 
    Con capas delicadas y un toque de dulzura, cada bocado es una experiencia gourmet. 
    Ideal para acompañar tu desayuno o disfrutar en cualquier momento del día.`,

    raspaditas: `Disfruta tu día con nuestras raspaditas artesanales. 
    El equilibrio perfecto entre sabores culturales cuyanos. 
    Creamos una deliciosa experiencia gastronómica.`
};

export const rellenos = ['Sin relleno', 'D. de Leche', 'Nutella', 'Frambuesa', 'Crema Pastelera', 'Marroc', 'Manzana', 'Membrillo', 'Roquefort', 'Cheddar c/Al']
export const productos = [
    {
        producto: 'Churros',
        imagen: churro,
    },
    {
        producto: 'Donas',
        imagen: dona,
    },
    {
        producto: 'Tortafritas',
        imagen: tortafrita,
    },
    {
        producto: 'Medialunas',
        imagen: medialuna,
    },
    {
        producto: 'Raspaditas',
        imagen: raspadita,
    },

]

export const urlImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
]

export const emailConfig = {
    serviceID: import.meta.env.VITE_SERVICE_ID,
    templateID: import.meta.env.VITE_TEMPLATE_ID,
    userID: import.meta.env.VITE_USER_ID,
};

export const sucursales = [
{
    id: 1,
    nombre: 'Casa Central',
    direccion: 'Las Grutas Río Negro, Peatonal Viedma 824 - Planta Baja',
    descripcion: 'La casa central de K\'scaritas es el corazón de la empresa. Aquí nace la magia de nuestros productos y servicios.',
    servicios: ['Cafetería', 'Especialidades', 'Take away', 'Sanitarios', 'Vista al mar', 'Wifi'],
    telefono: '-',
    menu: 'http://javierhuebra.github.io/ksca_menu_digital',
    imagenes: [imgSucursal6, imgSucursal1, imgSucursal3, imgSucursal4,imgSucursal5, imgSucursal2],
    horarios: 'Todos los días de 09:30 a 20:30'
},
{
    id: 2,
    nombre: 'Sucursal Calle Bariloche',
    direccion: 'Las Grutas Río Negro, Bariloche 770',
    descripcion: 'Nuestra sucursal en calle Bariloche es un punto estratégico para que puedas disfrutar de nuestros productos en cualquier momento.',
    servicios: ['Fast Food', 'Especialidades', 'Take away','Consumo en el salón', 'Wifi'],
    telefono: '-',
    menu: 'http://kscaritas.com',
    imagenes: [img1, img2, img3, img4, img5, img6],
    horarios: 'Todos los días de 20:30 a 00:30'
},
{
    id: 3,
    nombre: 'Sucursal Calle El Bolsón',
    direccion: 'Las Grutas Río Negro, El Bolsón 576',
    descripcion: 'En la zona de la primer bajada, en calle Bolsón, K\'scaritas te espera con la mejor atención y la calidad de siempre.',
    servicios: ['Especialidades', 'Take away'],
    telefono: '-',
    menu: 'http://kscaritas.com',
    imagenes: [img1, img2, img3, img4, img5, img6],
    horarios: 'Todos los días de 09:30 a 20:30'
}
]