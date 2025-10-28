// Base de datos de productos
const productos = [
    {
        id: 1,
        name: "Animal Cabernet Sauvignon Orgánico",
        category: "vinos",
        price: 8800.00,
        image: "vino-animal-cabernet.jpg",
        description: "Vino tinto orgánico premium con intensas notas de cassis y especias.",
        badge: "Orgánico",
        stock: 30,
        packSize: 6,
        brand: "otras"
    },
    {
        id: 2,
        name: "Bodega Privada Malbec",
        category: "vinos",
        price: 3200.65,
        image: "vino-bodega-privada.jpg",
        description: "Malbec de bodega privada con carácter y elegancia únicos.",
        stock: 25,
        packSize: 6
    },
    {
        id: 3,
        name: "Casa De Herrero Cabernet Franc",
        category: "vinos",
        price: 8140.00,
        image: "vino-casa-herrero-cf.jpg",
        description: "Cabernet Franc premium con notas herbáceas y frutales complejas.",
        badge: "Premium",
        stock: 20,
        packSize: 6
    },
    {
        id: 4,
        name: "Casa De Herrero Pinot Noir",
        category: "vinos",
        price: 8140.00,
        image: "vino-casa-herrero-pn.jpg",
        description: "Pinot Noir elegante con aromas a frutos rojos y especias suaves.",
        badge: "Premium",
        stock: 18,
        packSize: 6
    },
    {
        id: 5,
        name: "Cazador Malbec",
        category: "vinos",
        price: 3500.00,
        image: "vino-cazador-malbec.jpg",
        description: "Malbec tradicional argentino con carácter intenso y taninos suaves.",
        stock: 35,
        packSize: 6
    },
    {
        id: 6,
        name: "Escorihuela Gascon Cabernet Malbec",
        category: "vinos",
        price: 5455.52,
        image: "vino-escorihuela-blend.jpg",
        description: "Blend premium de Cabernet y Malbec con gran estructura y complejidad.",
        badge: "Bestseller",
        stock: 22,
        packSize: 6
    },
    {
        id: 7,
        name: "Gran Cordero Malbec",
        category: "vinos",
        price: 5200.00,
        image: "vino-gran-cordero.jpg",
        description: "Malbec de gran calidad con notas frutales y toques especiados.",
        stock: 28,
        packSize: 6
    },
    {
        id: 8,
        name: "Trumpeter Reserva Bonarda",
        category: "vinos",
        price: 8025.56,
        image: "vino-trumpeter-bonarda.jpg",
        description: "Bonarda reserva con aromas intensos y sabores complejos.",
        badge: "Reserva",
        stock: 15,
        packSize: 6
    },
    {
        id: 9,
        name: "Abrasado Blend de Parcela Malbec",
        category: "vinos",
        price: 11000.00,
        image: "vino-abrasado-blend.jpg",
        description: "Blend premium de parcela única con gran expresión terroir.",
        badge: "Premium",
        stock: 12,
        packSize: 6
    },
    {
        id: 10,
        name: "Achaval Ferrer Malbec Mendoza",
        category: "vinos",
        price: 13000.00,
        image: "vino-achaval-malbec.jpg",
        description: "Malbec premium de Mendoza con gran concentración y elegancia.",
        badge: "Premium",
        stock: 10,
        packSize: 6
    },
    {
        id: 11,
        name: "Achaval Quimera Blend",
        category: "vinos",
        price: 26000.00,
        image: "vino-achaval-quimera.jpg",
        description: "Blend excepcional con gran complejidad y potencial de guarda.",
        badge: "Exclusivo",
        stock: 8,
        packSize: 6
    },
    {
        id: 12,
        name: "Aime Cabernet Sauvignon",
        category: "vinos",
        price: 3672.48,
        image: "vino-aime-cabernet.jpg",
        description: "Cabernet Sauvignon con carácter y notas de frutos negros.",
        stock: 30,
        packSize: 6
    },
    {
        id: 13,
        name: "Aime Malbec",
        category: "vinos",
        price: 3672.48,
        image: "vino-aime-malbec.jpg",
        description: "Malbec expresivo con taninos suaves y gran fruta.",
        stock: 32,
        packSize: 6
    },
    {
        id: 14,
        name: "Aime Red Blend",
        category: "vinos",
        price: 3263.32,
        image: "vino-aime-blend.jpg",
        description: "Blend armonioso con gran equilibrio y frescura.",
        stock: 28,
        packSize: 6
    },
    {
        id: 15,
        name: "Alambrado Cabernet Franc",
        category: "vinos",
        price: 5626.50,
        image: "vino-alambrado-cf.jpg",
        description: "Cabernet Franc con personalidad única y gran expresión varietal.",
        stock: 20,
        packSize: 6
    },
    {
        id: 16,
        name: "Alambrado Malbec",
        category: "vinos",
        price: 5626.50,
        image: "vino-alambrado-malbec.jpg",
        description: "Malbec intenso con gran concentración y elegancia.",
        stock: 22,
        packSize: 6
    },
    {
        id: 17,
        name: "Alamos Malbec Reserva",
        category: "vinos",
        price: 4537.18,
        image: "vino-alamos-reserva.jpg",
        description: "Malbec reserva con crianza en roble y gran estructura.",
        badge: "Reserva",
        stock: 25,
        packSize: 6
    },
    {
        id: 18,
        name: "Alma Mora Cabernet Sauvignon",
        category: "vinos",
        price: 3841.00,
        image: "vino-alma-mora-cs.jpg",
        description: "Cabernet Sauvignon con taninos firmes y gran potencial.",
        stock: 28,
        packSize: 6
    },
    {
        id: 19,
        name: "Alma Mora Malbec",
        category: "vinos",
        price: 3841.00,
        image: "vino-alma-mora-malbec.jpg",
        description: "Malbec clásico argentino con gran expresión frutal.",
        stock: 30,
        packSize: 6
    },
    {
        id: 20,
        name: "Alma Mora Selección Reserva",
        category: "vinos",
        price: 4345.00,
        image: "vino-alma-mora-reserva.jpg",
        description: "Selección reserva premium con crianza y gran complejidad.",
        badge: "Reserva",
        stock: 18,
        packSize: 6
    },
    {
        id: 21,
        name: "Altos Del Plata Cabernet Sauvignon",
        category: "vinos",
        price: 5654.14,
        image: "vino-altos-plata-cs.jpg",
        description: "Cabernet Sauvignon de altura con gran intensidad y estructura.",
        stock: 20,
        packSize: 6
    },
    {
        id: 22,
        name: "Altos Del Plata Malbec",
        category: "vinos",
        price: 5654.14,
        image: "vino-altos-plata-malbec.jpg",
        description: "Malbec de altura con características únicas del terroir.",
        stock: 22,
        packSize: 6
    },
    {
        id: 23,
        name: "Andeluna 1300 Cabernet Franc",
        category: "vinos",
        price: 4248.40,
        image: "vino-andeluna-cf.jpg",
        description: "Cabernet Franc de alta montaña con gran pureza y elegancia.",
        stock: 25,
        packSize: 6
    },
    {
        id: 24,
        name: "Andeluna 1300 Cabernet Sauvignon",
        category: "vinos",
        price: 4248.40,
        image: "vino-andeluna-cs.jpg",
        description: "Cabernet Sauvignon de 1300 metros de altura con gran carácter.",
        stock: 24,
        packSize: 6
    },
    {
        id: 25,
        name: "Andeluna 1300 Malbec",
        category: "vinos",
        price: 4248.40,
        image: "vino-andeluna-malbec.jpg",
        description: "Malbec de altura excepcional con gran concentración y pureza.",
        stock: 26,
        packSize: 6
    },
    {
        id: 26,
        name: "Andeluna Altitud Malbec",
        category: "vinos",
        price: 7160.40,
        image: "vino-andeluna-altitud.jpg",
        description: "Malbec premium de gran altitud con expresión única del terroir.",
        badge: "Premium",
        stock: 15,
        packSize: 6
    },
    {
        id: 27,
        name: "Andeluna Raíces Malbec",
        category: "vinos",
        price: 3764.80,
        image: "vino-andeluna-raices.jpg",
        description: "Malbec que expresa las raíces de la tradición vitivinícola argentina.",
        stock: 30,
        packSize: 6
    },
    {
        id: 28,
        name: "Aruma Malbec",
        category: "vinos",
        price: 18000.00,
        image: "vino-aruma-malbec.jpg",
        description: "Malbec premium con gran complejidad y potencial de guarda.",
        badge: "Premium",
        stock: 8,
        packSize: 6
    },
    {
        id: 29,
        name: "Barrabas Cabernet Franc",
        category: "vinos",
        price: 16834.40,
        image: "vino-barrabas-cf.jpg",
        description: "Cabernet Franc de alta gama con gran personalidad y estructura.",
        badge: "Premium",
        stock: 6,
        packSize: 6
    },
    {
        id: 30,
        name: "Benjamin Cabernet Sauvignon",
        category: "vinos",
        price: 3270.10,
        image: "vino-benjamin-cs.jpg",
        description: "Cabernet Sauvignon joven con gran fruta y taninos amables.",
        stock: 35,
        packSize: 6
    },
    {
        id: 31,
        name: "Benjamin Malbec",
        category: "vinos",
        price: 3270.10,
        image: "vino-benjamin-malbec.jpg",
        description: "Malbec joven y expresivo con gran concentración frutal.",
        stock: 38,
        packSize: 6
    },
    {
        id: 32,
        name: "Cafayate Cabernet Sauvignon",
        category: "vinos",
        price: 3100.13,
        image: "vino-cafayate-cs.jpg",
        description: "Cabernet Sauvignon de los valles calchaquíes con carácter único.",
        stock: 40,
        packSize: 6
    },
    {
        id: 33,
        name: "Calia Malbec",
        category: "vinos",
        price: 3105.06,
        image: "vino-calia-malbec.jpg",
        description: "Malbec expresivo con gran tipicidad argentina.",
        stock: 42,
        packSize: 6
    },
    {
        id: 34,
        name: "Callejón Del Crimen Gran Reserva Malbec",
        category: "vinos",
        price: 8212.81,
        image: "vino-callejon-gran-reserva.jpg",
        description: "Gran Reserva Malbec con gran complejidad y potencial de guarda.",
        badge: "Gran Reserva",
        stock: 15,
        packSize: 6
    },
    {
        id: 35,
        name: "Callejón Del Crimen Reserva Cabernet Franc",
        category: "vinos",
        price: 8250.00,
        image: "vino-callejon-cf.jpg",
        description: "Cabernet Franc reserva con notas herbáceas y gran estructura.",
        badge: "Reserva",
        stock: 18,
        packSize: 6
    },
    {
        id: 36,
        name: "Callejón Del Crimen Reserva Cabernet Sauvignon",
        category: "vinos",
        price: 8250.00,
        image: "vino-callejon-cs.jpg",
        description: "Cabernet Sauvignon reserva con taninos firmes y gran elegancia.",
        badge: "Reserva",
        stock: 20,
        packSize: 6
    },
    {
        id: 37,
        name: "Callejón Del Crimen Reserva Malbec",
        category: "vinos",
        price: 8250.00,
        image: "vino-callejon-malbec.jpg",
        description: "Malbec reserva con gran concentración y complejidad aromática.",
        badge: "Reserva",
        stock: 22,
        packSize: 6
    },
    {
        id: 38,
        name: "Casa Boher Cabernet Franc",
        category: "vinos",
        price: 8057.40,
        image: "vino-casa-boher-cf.jpg",
        description: "Cabernet Franc premium con gran expresión varietal y elegancia.",
        badge: "Premium",
        stock: 16,
        packSize: 6
    },
    {
        id: 39,
        name: "Casa Boher Cabernet Sauvignon",
        category: "vinos",
        price: 8057.40,
        image: "vino-casa-boher-cs.jpg",
        description: "Cabernet Sauvignon de alta gama con taninos nobles y gran estructura.",
        badge: "Premium",
        stock: 18,
        packSize: 6
    },
    {
        id: 40,
        name: "Casa Boher Gran Reserva",
        category: "vinos",
        price: 18750.00,
        image: "vino-casa-boher-gran.jpg",
        description: "Gran Reserva excepcional con gran complejidad y potencial de guarda.",
        badge: "Gran Reserva",
        stock: 8,
        packSize: 4
    },
    {
        id: 41,
        name: "Casa Boher Malbec",
        category: "vinos",
        price: 8057.40,
        image: "vino-casa-boher-malbec.jpg",
        description: "Malbec premium con gran concentración y elegancia distintiva.",
        badge: "Premium",
        stock: 20,
        packSize: 6
    },
    {
        id: 42,
        name: "Casillero Del Diablo Cabernet Sauvignon",
        category: "vinos",
        price: 3510.00,
        image: "vino-casillero-cs.jpg",
        description: "Cabernet Sauvignon clásico con gran estructura y carácter.",
        stock: 35,
        packSize: 6
    },
    {
        id: 43,
        name: "Casillero Del Diablo Malbec",
        category: "vinos",
        price: 3510.00,
        image: "vino-casillero-malbec.jpg",
        description: "Malbec tradicional con gran expresión frutal y taninos suaves.",
        stock: 38,
        packSize: 6
    },
    {
        id: 44,
        name: "Cepa Tradicional Malbec",
        category: "vinos",
        price: 4493.06,
        image: "vino-cepa-tradicional.jpg",
        description: "Malbec de cepa tradicional con gran tipicidad argentina.",
        stock: 25,
        packSize: 6
    },
    {
        id: 45,
        name: "Chañar Punco",
        category: "vinos",
        price: 27709.00,
        image: "vino-chanar-punco.jpg",
        description: "Vino premium de alta gama con excepcional complejidad y elegancia.",
        badge: "Exclusivo",
        stock: 4,
        packSize: 4
    },
    {
        id: 46,
        name: "Circus Cabernet Roble",
        category: "vinos",
        price: 2842.56,
        image: "vino-circus-cabernet.jpg",
        description: "Cabernet con paso por roble, equilibrado y accesible.",
        stock: 45,
        packSize: 6
    },
    {
        id: 47,
        name: "Circus Clásico",
        category: "vinos",
        price: 2672.32,
        image: "vino-circus-clasico.jpg",
        description: "Vino clásico joven y fresco, ideal para el consumo diario.",
        stock: 50,
        packSize: 6
    },
    {
        id: 48,
        name: "Circus Roble Malbec",
        category: "vinos",
        price: 2842.56,
        image: "vino-circus-roble.jpg",
        description: "Malbec con crianza en roble, redondo y expresivo.",
        stock: 42,
        packSize: 6
    },
    {
        id: 49,
        name: "Cocodrilo Corte",
        category: "vinos",
        price: 26640.00,
        image: "vino-cocodrilo-corte.jpg",
        description: "Corte premium excepcional con gran complejidad y personalidad única.",
        badge: "Exclusivo",
        stock: 6,
        packSize: 6
    },
    {
        id: 50,
        name: "Cofre De Los Arcángeles 3Ed Mikhail",
        category: "vinos",
        price: 774198.60,
        image: "vino-cofre-arcangeles.jpg",
        description: "Edición limitada ultra premium, una joya enológica excepcional.",
        badge: "Edición Limitada",
        stock: 1,
        packSize: 1
    },
    {
        id: 51,
        name: "Colección Privada Malbec",
        category: "vinos",
        price: 4501.00,
        image: "vino-coleccion-malbec.jpg",
        description: "Malbec de colección privada con carácter distintivo y elegancia.",
        badge: "Colección",
        stock: 22,
        packSize: 6
    },
    {
        id: 52,
        name: "Colección Privada Pinot Noir",
        category: "vinos",
        price: 4501.00,
        image: "vino-coleccion-pinot.jpg",
        description: "Pinot Noir de colección con delicadeza y complejidad aromática.",
        badge: "Colección",
        stock: 18,
        packSize: 6
    },
    {
        id: 53,
        name: "Concha Y Toro Reservado Malbec",
        category: "vinos",
        price: 1952.10,
        image: "vino-concha-toro.jpg",
        description: "Malbec reservado con gran relación precio-calidad y tipicidad.",
        stock: 55,
        packSize: 6
    },
    {
        id: 54,
        name: "Cordero Con Piel De Lobo Cabernet",
        category: "vinos",
        price: 3300.00,
        image: "vino-cordero-cabernet.jpg",
        description: "Cabernet con personalidad única y gran carácter distintivo.",
        stock: 35,
        packSize: 6
    },
    {
        id: 55,
        name: "Cordero Con Piel De Lobo Dulce Natural",
        category: "vinos",
        price: 3300.00,
        image: "vino-cordero-dulce.jpg",
        description: "Vino dulce natural con gran dulzura equilibrada y aromática.",
        badge: "Dulce",
        stock: 25,
        packSize: 6
    },
    {
        id: 56,
        name: "Cordero Con Piel De Lobo Bag in Box 3L",
        category: "vinos",
        price: 9900.00,
        image: "vino-cordero-box.jpg",
        description: "Formato bag in box de 3 litros, práctico y conveniente.",
        badge: "Formato Especial",
        stock: 15,
        packSize: 4
    },
    {
        id: 57,
        name: "Cordero Con Piel De Lobo Malbec",
        category: "vinos",
        price: 3300.00,
        image: "vino-cordero-malbec.jpg",
        description: "Malbec con gran personalidad y carácter distintivo argentino.",
        stock: 40,
        packSize: 6
    },
    {
        id: 58,
        name: "Cruz Alta Cabernet",
        category: "vinos",
        price: 5006.83,
        image: "vino-cruz-alta-cabernet.jpg",
        description: "Cabernet de altura con gran intensidad y estructura sólida.",
        stock: 28,
        packSize: 6
    },
    {
        id: 59,
        name: "Cruz Alta Malbec",
        category: "vinos",
        price: 5006.83,
        image: "vino-cruz-alta-malbec.jpg",
        description: "Malbec de altura con expresión única del terroir de montaña.",
        stock: 30,
        packSize: 6
    },
    {
        id: 60,
        name: "Dada Art Malbec",
        category: "vinos",
        price: 3647.00,
        image: "vino-dada-art.jpg",
        description: "Malbec artístico con etiqueta única y gran expresión creativa.",
        badge: "Artístico",
        stock: 32,
        packSize: 6
    },
    {
        id: 61,
        name: "Dada N1",
        category: "vinos",
        price: 3647.00,
        image: "vino-dada-n1.jpg",
        description: "Primera edición de la línea Dada con carácter vanguardista.",
        badge: "Edición",
        stock: 28,
        packSize: 6
    },
    {
        id: 62,
        name: "Dada N2",
        category: "vinos",
        price: 3647.00,
        image: "vino-dada-n2.jpg",
        description: "Segunda edición Dada con personalidad única y moderna.",
        badge: "Edición",
        stock: 26,
        packSize: 6
    },
    {
        id: 63,
        name: "Dada N3",
        category: "vinos",
        price: 3647.00,
        image: "vino-dada-n3.jpg",
        description: "Tercera edición de la innovadora línea Dada.",
        badge: "Edición",
        stock: 24,
        packSize: 6
    },
    {
        id: 64,
        name: "Dada N8 Chocolate",
        category: "vinos",
        price: 3647.00,
        image: "vino-dada-chocolate.jpg",
        description: "Edición especial con notas a chocolate, única y expresiva.",
        badge: "Chocolate",
        stock: 20,
        packSize: 6
    },
    {
        id: 65,
        name: "Desierto 25 Cabernet Sauvignon",
        category: "vinos",
        price: 7260.00,
        image: "vino-desierto-cs.jpg",
        description: "Cabernet Sauvignon del desierto con intensidad y carácter único.",
        badge: "Premium",
        stock: 18,
        packSize: 6
    },
    {
        id: 66,
        name: "Desierto 25 Malbec",
        category: "vinos",
        price: 7260.00,
        image: "vino-desierto-malbec.jpg",
        description: "Malbec del desierto con gran concentración y mineralidad.",
        badge: "Premium",
        stock: 20,
        packSize: 6
    },
    {
        id: 67,
        name: "Desierto 25 Pampa",
        category: "vinos",
        price: 12732.72,
        image: "vino-desierto-pampa.jpg",
        description: "Blend premium de la pampa con gran complejidad y elegancia.",
        badge: "Premium",
        stock: 12,
        packSize: 6
    },
    {
        id: 68,
        name: "Desierto 25 Pinot Noir",
        category: "vinos",
        price: 7260.00,
        image: "vino-desierto-pinot.jpg",
        description: "Pinot Noir del desierto con delicadeza y expresión única.",
        badge: "Premium",
        stock: 16,
        packSize: 6
    },
    {
        id: 69,
        name: "Don David Cabernet Sauvignon",
        category: "vinos",
        price: 4833.00,
        image: "vino-don-david-cs.jpg",
        description: "Cabernet Sauvignon premium con gran estructura y elegancia.",
        stock: 25,
        packSize: 6
    },
    {
        id: 70,
        name: "Don David Malbec 375ml",
        category: "vinos",
        price: 2838.00,
        image: "vino-don-david-375ml.jpg",
        description: "Malbec en formato media botella, ideal para degustación.",
        badge: "Media Botella",
        stock: 45,
        packSize: 12
    },
    {
        id: 71,
        name: "Don David Malbec",
        category: "vinos",
        price: 4833.00,
        image: "vino-don-david-malbec.jpg",
        description: "Malbec clásico con gran tipicidad y carácter argentino.",
        stock: 30,
        packSize: 6
    },
    {
        id: 72,
        name: "Don David Pinot Noir",
        category: "vinos",
        price: 4833.00,
        image: "vino-don-david-pinot.jpg",
        description: "Pinot Noir elegante con aromas delicados y gran fineza.",
        stock: 22,
        packSize: 6
    },
    {
        id: 73,
        name: "Don David Reserva Malbec",
        category: "vinos",
        price: 6892.00,
        image: "vino-don-david-reserva.jpg",
        description: "Malbec reserva con crianza y gran complejidad aromática.",
        badge: "Reserva",
        stock: 18,
        packSize: 6
    },
    {
        id: 74,
        name: "Don Escorihuela",
        category: "vinos",
        price: 36400.00,
        image: "vino-don-escorihuela.jpg",
        description: "Vino premium de alta gama con excepcional calidad y prestigio.",
        badge: "Exclusivo",
        stock: 6,
        packSize: 4
    },
    {
        id: 75,
        name: "Don Melchor Cabernet Sauvignon",
        category: "vinos",
        price: 157202.10,
        image: "vino-don-melchor.jpg",
        description: "Cabernet Sauvignon ultra premium, ícono de la enología mundial.",
        badge: "Ícono",
        stock: 3,
        packSize: 6
    },
    {
        id: 76,
        name: "Don Nicanor Malbec",
        category: "vinos",
        price: 8331.66,
        image: "vino-don-nicanor.jpg",
        description: "Malbec premium con gran personalidad y carácter distintivo.",
        badge: "Premium",
        stock: 15,
        packSize: 6
    },
    {
        id: 77,
        name: "Don Valentín Lacrado Red Blend",
        category: "vinos",
        price: 2603.60,
        image: "vino-don-valentin-blend.jpg",
        description: "Red Blend lacrado con gran equilibrio y carácter accesible.",
        stock: 40,
        packSize: 6
    },
    {
        id: 78,
        name: "Don Valentín Malbec",
        category: "vinos",
        price: 2930.78,
        image: "vino-don-valentin-malbec.jpg",
        description: "Malbec tradicional con gran expresión frutal y tipicidad.",
        stock: 38,
        packSize: 6
    },
    {
        id: 79,
        name: "Doña Paula Estate Malbec",
        category: "vinos",
        price: 5250.00,
        image: "vino-dona-paula.jpg",
        description: "Malbec de finca con gran expresión del terroir y elegancia.",
        badge: "Estate",
        stock: 25,
        packSize: 6
    },
    {
        id: 80,
        name: "DV Catena Cabernet Malbec",
        category: "vinos",
        price: 9975.00,
        image: "vino-dv-catena-blend.jpg",
        description: "Blend premium Catena con gran complejidad y potencial de guarda.",
        badge: "DV Catena",
        stock: 12,
        packSize: 6
    },
    {
        id: 81,
        name: "DV Catena Malbec",
        category: "vinos",
        price: 14250.00,
        image: "vino-dv-catena-malbec.jpg",
        description: "Malbec DV Catena con excepcional calidad y expresión única.",
        badge: "DV Catena",
        stock: 10,
        packSize: 6
    },
    {
        id: 82,
        name: "DV Malbec Argentino",
        category: "vinos",
        price: 61950.00,
        image: "vino-dv-argentino.jpg",
        description: "Malbec argentino premium con gran concentración y elegancia.",
        badge: "DV Premium",
        stock: 5,
        packSize: 4
    },
    {
        id: 83,
        name: "El Esteco Malbec",
        category: "vinos",
        price: 9674.00,
        image: "vino-el-esteco.jpg",
        description: "Malbec de Salta con gran altitud y expresión única del Norte.",
        badge: "Salta",
        stock: 16,
        packSize: 6
    },
    {
        id: 84,
        name: "Elementos",
        category: "vinos",
        price: 3251.25,
        image: "vino-elementos.jpg",
        description: "Vino que expresa los elementos naturales con gran pureza.",
        stock: 35,
        packSize: 6
    },
    {
        id: 85,
        name: "Emilia Cabernet Sauvignon",
        category: "vinos",
        price: 4378.65,
        image: "vino-emilia-cs.jpg",
        description: "Cabernet Sauvignon con gran estructura y taninos nobles.",
        stock: 28,
        packSize: 6
    },
    {
        id: 86,
        name: "Emilia Malbec",
        category: "vinos",
        price: 4378.65,
        image: "vino-emilia-malbec.jpg",
        description: "Malbec expresivo con gran concentración y elegancia.",
        stock: 30,
        packSize: 6
    },
    {
        id: 87,
        name: "Emilia Red Blend",
        category: "vinos",
        price: 4378.65,
        image: "vino-emilia-blend.jpg",
        description: "Red Blend armonioso con gran equilibrio y complejidad.",
        stock: 26,
        packSize: 6
    },
    {
        id: 88,
        name: "Escorihuela Gascon Cabernet Sauvignon",
        category: "vinos",
        price: 5455.52,
        image: "vino-escorihuela-cs.jpg",
        description: "Cabernet Sauvignon premium con gran estructura y potencial.",
        stock: 22,
        packSize: 6
    },
    {
        id: 89,
        name: "Escorihuela Gascon Malbec",
        category: "vinos",
        price: 5455.52,
        image: "vino-escorihuela-malbec.jpg",
        description: "Malbec premium con gran tipicidad y carácter distintivo.",
        stock: 25,
        packSize: 6
    },
    {
        id: 90,
        name: "Escorihuela Gascon Meg",
        category: "vinos",
        price: 26504.80,
        image: "vino-escorihuela-meg.jpg",
        description: "Vino premium Meg con excepcional calidad y complejidad.",
        badge: "Meg",
        stock: 4,
        packSize: 4
    },
    {
        id: 91,
        name: "Escorihuela Gascon Organic Malbec",
        category: "vinos",
        price: 9740.64,
        image: "vino-escorihuela-organic.jpg",
        description: "Malbec orgánico premium con certificación y gran pureza.",
        badge: "Orgánico",
        stock: 14,
        packSize: 6
    },
    {
        id: 92,
        name: "Escorihuela Gascon Pinot Noir",
        category: "vinos",
        price: 5845.20,
        image: "vino-escorihuela-pinot.jpg",
        description: "Pinot Noir elegante con gran delicadeza y complejidad aromática.",
        stock: 18,
        packSize: 6
    },
    {
        id: 93,
        name: "Escorihuela Gran Reserva Malbec",
        category: "vinos",
        price: 8593.76,
        image: "vino-escorihuela-gran.jpg",
        description: "Gran Reserva Malbec con excepcional calidad y potencial de guarda.",
        badge: "Gran Reserva",
        stock: 12,
        packSize: 6
    },
    {
        id: 94,
        name: "Estancia Mendoza Malbec",
        category: "vinos",
        price: 2530.00,
        image: "vino-estancia-mendoza.jpg",
        description: "Malbec de Mendoza con gran tipicidad y carácter regional.",
        stock: 45,
        packSize: 6
    },
    {
        id: 95,
        name: "Etchart SV Malbec",
        category: "vinos",
        price: 12028.05,
        image: "vino-etchart-sv.jpg",
        description: "Malbec Single Vineyard con expresión única del viñedo.",
        badge: "Single Vineyard",
        stock: 10,
        packSize: 6
    },
    {
        id: 96,
        name: "Expedición Sur Cabernet Sauvignon",
        category: "vinos",
        price: 6752.90,
        image: "vino-expedicion-sur.jpg",
        description: "Cabernet Sauvignon del sur con gran intensidad y carácter.",
        badge: "Sur",
        stock: 20,
        packSize: 6
    },
    {
        id: 97,
        name: "Fabre Montmayou Reserva",
        category: "vinos",
        price: 6000.00,
        image: "vino-fabre-reserva.jpg",
        description: "Reserva premium con gran equilibrio y elegancia francesa.",
        badge: "Reserva",
        stock: 22,
        packSize: 6
    },
    {
        id: 98,
        name: "Fabre Montmayou Terruño Cabernet Franc Reserva",
        category: "vinos",
        price: 6000.00,
        image: "vino-fabre-cf.jpg",
        description: "Cabernet Franc reserva con expresión única del terruño.",
        badge: "Terruño",
        stock: 18,
        packSize: 6
    },
    {
        id: 99,
        name: "Fabre Montmayou Terruño Cabernet Sauvignon Reserva",
        category: "vinos",
        price: 6000.00,
        image: "vino-fabre-cs.jpg",
        description: "Cabernet Sauvignon reserva con gran expresión del terruño.",
        badge: "Terruño",
        stock: 20,
        packSize: 6
    },
    {
        id: 100,
        name: "Famiglia Bianchi Criolla",
        category: "vinos",
        price: 4408.13,
        image: "vino-famiglia-criolla.jpg",
        description: "Vino de cepa criolla con tradición italiana y carácter único.",
        badge: "Criolla",
        stock: 25,
        packSize: 6
    },
    {
        id: 101,
        name: "Famiglia Bianchi Red Blend",
        category: "vinos",
        price: 3956.70,
        image: "vino-famiglia-blend.jpg",
        description: "Red Blend italiano-argentino con gran armonía y elegancia.",
        stock: 28,
        packSize: 6
    },
    {
        id: 102,
        name: "Familia Gascon Cabernet Sauvignon",
        category: "vinos",
        price: 3553.76,
        image: "vino-familia-gascon-cs.jpg",
        description: "Cabernet Sauvignon familiar con gran tradición y calidad.",
        stock: 32,
        packSize: 6
    },
    {
        id: 103,
        name: "Familia Gascon Malbec",
        category: "vinos",
        price: 3553.76,
        image: "vino-familia-gascon-malbec.jpg",
        description: "Malbec de familia con gran tipicidad y carácter tradicional.",
        stock: 35,
        packSize: 6
    },
    {
        id: 104,
        name: "Felino Malbec",
        category: "vinos",
        price: 15030.51,
        image: "vino-felino-malbec.jpg",
        description: "Malbec premium con gran elegancia y sofisticación felina.",
        badge: "Premium",
        stock: 8,
        packSize: 6
    },
    {
        id: 105,
        name: "Felipe Rutini 1999 Edición Limitada",
        category: "vinos",
        price: 517721.88,
        image: "vino-felipe-rutini.jpg",
        description: "Edición limitada 1999 con excepcional calidad y exclusividad única.",
        badge: "Edición Limitada",
        stock: 2,
        packSize: 6
    },
    {
        id: 106,
        name: "Finca Las Moras",
        category: "vinos",
        price: 2833.68,
        image: "vino-finca-las-moras.jpg",
        description: "Vino de finca con gran expresión del terroir y tradición.",
        stock: 40,
        packSize: 6
    },
    {
        id: 107,
        name: "Finca Natalina Tinto",
        category: "vinos",
        price: 2303.60,
        image: "vino-finca-natalina.jpg",
        description: "Tinto de finca familiar con gran carácter y autenticidad.",
        stock: 42,
        packSize: 6
    },
    {
        id: 108,
        name: "Fond De Cave Malbec 500ml",
        category: "vinos",
        price: 3403.09,
        image: "vino-fond-cave-500ml.jpg",
        description: "Malbec en formato 500ml, ideal para ocasiones especiales.",
        badge: "500ml",
        stock: 30,
        packSize: 6
    },
    {
        id: 109,
        name: "Fond De Cave Malbec",
        category: "vinos",
        price: 4624.00,
        image: "vino-fond-cave-malbec.jpg",
        description: "Malbec de cava con gran profundidad y complejidad aromática.",
        stock: 25,
        packSize: 6
    },
    {
        id: 110,
        name: "Fran Blend",
        category: "vinos",
        price: 3980.46,
        image: "vino-fran-blend.jpg",
        description: "Blend Fran con gran personalidad y carácter distintivo.",
        stock: 28,
        packSize: 6
    },
    {
        id: 111,
        name: "Fran Cabernet Sauvignon",
        category: "vinos",
        price: 3980.46,
        image: "vino-fran-cs.jpg",
        description: "Cabernet Sauvignon Fran con gran estructura y elegancia.",
        stock: 26,
        packSize: 6
    },
    {
        id: 112,
        name: "Fran Malbec",
        category: "vinos",
        price: 3980.46,
        image: "vino-fran-malbec.jpg",
        description: "Malbec Fran con gran expresión frutal y carácter argentino.",
        stock: 30,
        packSize: 6
    },
    {
        id: 113,
        name: "Frontera Malbec",
        category: "vinos",
        price: 1800.00,
        image: "vino-frontera-malbec.jpg",
        description: "Malbec accesible con gran relación precio-calidad.",
        stock: 60,
        packSize: 6
    },
    {
        id: 114,
        name: "Gran Enemigo Agrelo",
        category: "vinos",
        price: 31075.00,
        image: "vino-gran-enemigo-agrelo.jpg",
        description: "Vino premium de Agrelo con excepcional calidad y terroir único.",
        badge: "Gran Enemigo",
        stock: 5,
        packSize: 6
    },
    {
        id: 115,
        name: "Gran Enemigo Cepillo",
        category: "vinos",
        price: 31075.00,
        image: "vino-gran-enemigo-cepillo.jpg",
        description: "Gran Enemigo Cepillo con gran complejidad y elegancia distintiva.",
        badge: "Gran Enemigo",
        stock: 5,
        packSize: 6
    },
    {
        id: 116,
        name: "Gran Enemigo Chacayes",
        category: "vinos",
        price: 31075.00,
        image: "vino-gran-enemigo-chacayes.jpg",
        description: "Gran Enemigo de Chacayes con expresión única del Valle de Uco.",
        badge: "Gran Enemigo",
        stock: 5,
        packSize: 6
    },
    {
        id: 117,
        name: "Gran Enemigo Corte Cabernet Franc Malbec",
        category: "vinos",
        price: 31075.00,
        image: "vino-gran-enemigo-corte.jpg",
        description: "Corte premium de Cabernet Franc y Malbec con gran complejidad.",
        badge: "Gran Enemigo",
        stock: 4,
        packSize: 6
    },
    {
        id: 118,
        name: "Gran Enemigo Gualtallary Cabernet Franc",
        category: "vinos",
        price: 37713.75,
        image: "vino-gran-enemigo-gualtallary.jpg",
        description: "Cabernet Franc de Gualtallary con excepcional terroir de altura.",
        badge: "Gran Enemigo",
        stock: 4,
        packSize: 6
    },
    {
        id: 119,
        name: "Gran Famiglia Malbec",
        category: "vinos",
        price: 6604.18,
        image: "vino-gran-famiglia.jpg",
        description: "Malbec de gran famiglia con tradición italiana y calidad premium.",
        badge: "Gran Famiglia",
        stock: 18,
        packSize: 6
    },
    {
        id: 120,
        name: "Gran Medalla Malbec",
        category: "vinos",
        price: 22837.50,
        image: "vino-gran-medalla.jpg",
        description: "Malbec premiado con gran medalla, excepcional calidad reconocida.",
        badge: "Gran Medalla",
        stock: 6,
        packSize: 6
    },
    {
        id: 121,
        name: "Huarpe Lacantay Malbec",
        category: "vinos",
        price: 5250.00,
        image: "vino-huarpe-lacantay.jpg",
        description: "Malbec Huarpe con tradición ancestral y gran carácter autóctono.",
        badge: "Huarpe",
        stock: 22,
        packSize: 6
    },
    {
        id: 122,
        name: "Intocables Bourbon Malbec",
        category: "vinos",
        price: 6203.00,
        image: "vino-intocables-bourbon.jpg",
        description: "Malbec con paso por barricas de bourbon, único y distintivo.",
        badge: "Bourbon",
        stock: 20,
        packSize: 6
    },
    {
        id: 123,
        name: "Intocables Cabernet Sauvignon",
        category: "vinos",
        price: 6203.00,
        image: "vino-intocables-cs.jpg",
        description: "Cabernet Sauvignon intocable con gran personalidad y carácter.",
        badge: "Intocables",
        stock: 18,
        packSize: 6
    },
    {
        id: 124,
        name: "Intocables Con Estuche",
        category: "vinos",
        price: 8068.00,
        image: "vino-intocables-estuche.jpg",
        description: "Vino premium en estuche especial, ideal para regalo.",
        badge: "Estuche",
        stock: 12,
        packSize: 6
    },
    {
        id: 125,
        name: "Intocables Double Oak Malbec",
        category: "vinos",
        price: 6203.00,
        image: "vino-intocables-double-oak.jpg",
        description: "Malbec con doble paso por roble, complejidad y elegancia únicas.",
        badge: "Double Oak",
        stock: 16,
        packSize: 6
    },
    {
        id: 126,
        name: "Intocables Red Blend",
        category: "vinos",
        price: 6203.00,
        image: "vino-intocables-blend.jpg",
        description: "Red Blend intocable con gran armonía y personalidad distintiva.",
        badge: "Intocables",
        stock: 18,
        packSize: 6
    },
    {
        id: 127,
        name: "Judas Blend",
        category: "vinos",
        price: 49183.33,
        image: "vino-judas-blend.jpg",
        description: "Blend Judas excepcional con gran complejidad y carácter único.",
        badge: "Judas",
        stock: 4,
        packSize: 3
    },
    {
        id: 128,
        name: "Judas Magnum Malbec 1.5L",
        category: "vinos",
        price: 71286.60,
        image: "vino-judas-magnum.jpg",
        description: "Malbec Judas en formato Magnum, excepcional y de colección.",
        badge: "Magnum",
        stock: 2,
        packSize: 1
    },
    {
        id: 129,
        name: "Judas Malbec",
        category: "vinos",
        price: 41735.63,
        image: "vino-judas-malbec.jpg",
        description: "Malbec Judas premium con gran intensidad y personalidad única.",
        badge: "Judas",
        stock: 3,
        packSize: 6
    },
    {
        id: 130,
        name: "Kilka Malbec",
        category: "vinos",
        price: 5025.46,
        image: "vino-kilka-malbec.jpg",
        description: "Malbec Kilka con gran expresión frutal y carácter distintivo.",
        stock: 25,
        packSize: 6
    },
    {
        id: 131,
        name: "King",
        category: "vinos",
        price: 2368.02,
        image: "vino-king.jpg",
        description: "Vino King accesible con gran calidad y carácter real.",
        stock: 50,
        packSize: 6
    },
    {
        id: 132,
        name: "La Linda Malbec",
        category: "vinos",
        price: 5896.00,
        image: "vino-la-linda-malbec.jpg",
        description: "Malbec La Linda con gran elegancia y feminidad distintiva.",
        badge: "La Linda",
        stock: 22,
        packSize: 6
    },
    {
        id: 133,
        name: "La Linda Malbec Orgánico",
        category: "vinos",
        price: 8280.80,
        image: "vino-la-linda-organico.jpg",
        description: "Malbec orgánico La Linda con certificación y pureza natural.",
        badge: "Orgánico",
        stock: 15,
        packSize: 6
    },
    {
        id: 134,
        name: "La Mascota Cabernet Franc",
        category: "vinos",
        price: 8276.00,
        image: "vino-la-mascota-cf.jpg",
        description: "Cabernet Franc La Mascota con gran personalidad y carácter único.",
        badge: "La Mascota",
        stock: 18,
        packSize: 6
    },
    {
        id: 135,
        name: "La Mascota Malbec",
        category: "vinos",
        price: 8276.00,
        image: "vino-la-mascota-malbec.jpg",
        description: "Malbec La Mascota con gran tipicidad y carácter distintivo.",
        badge: "La Mascota",
        stock: 20,
        packSize: 6
    },
    {
        id: 136,
        name: "La Piel De Judas - Acto Segundo",
        category: "vinos",
        price: 55042.87,
        image: "vino-piel-judas.jpg",
        description: "Acto Segundo de La Piel de Judas, vino de excepcional complejidad.",
        badge: "Judas",
        stock: 3,
        packSize: 6
    },
    {
        id: 137,
        name: "La Posta Pinot Noir",
        category: "vinos",
        price: 10065.00,
        image: "vino-la-posta-pinot.jpg",
        description: "Pinot Noir La Posta con gran delicadeza y expresión única.",
        badge: "La Posta",
        stock: 12,
        packSize: 6
    },
    {
        id: 138,
        name: "La Posta Pizzela",
        category: "vinos",
        price: 10065.00,
        image: "vino-la-posta-pizzela.jpg",
        description: "Pizzela La Posta con gran complejidad y carácter distintivo.",
        badge: "La Posta",
        stock: 10,
        packSize: 6
    },
    {
        id: 139,
        name: "La Posta Red Blend",
        category: "vinos",
        price: 8800.00,
        image: "vino-la-posta-blend.jpg",
        description: "Red Blend La Posta con gran armonía y equilibrio perfecto.",
        badge: "La Posta",
        stock: 15,
        packSize: 6
    },
    {
        id: 140,
        name: "Las Perdices",
        category: "vinos",
        price: 5407.50,
        image: "vino-las-perdices.jpg",
        description: "Vino Las Perdices con gran tradición y carácter mendocino.",
        badge: "Las Perdices",
        stock: 25,
        packSize: 6
    },
    {
        id: 141,
        name: "Las Perdices Bag In Box 3L",
        category: "vinos",
        price: 15347.00,
        image: "vino-perdices-box.jpg",
        description: "Las Perdices en formato Bag in Box de 3 litros, práctico y conveniente.",
        badge: "Bag in Box",
        stock: 8,
        packSize: 4
    },
    {
        id: 142,
        name: "Las Perdices Cabernet",
        category: "vinos",
        price: 5407.50,
        image: "vino-perdices-cabernet.jpg",
        description: "Cabernet Las Perdices con gran estructura y elegancia tradicional.",
        badge: "Las Perdices",
        stock: 22,
        packSize: 6
    },
    {
        id: 143,
        name: "Las Perdices Partridge Malbec",
        category: "vinos",
        price: 3643.50,
        image: "vino-perdices-partridge.jpg",
        description: "Malbec Partridge Las Perdices con gran accesibilidad y calidad.",
        badge: "Partridge",
        stock: 35,
        packSize: 6
    },
    {
        id: 144,
        name: "Las Perdices Reserva Pinot Noir",
        category: "vinos",
        price: 8400.00,
        image: "vino-perdices-reserva-pinot.jpg",
        description: "Pinot Noir Reserva Las Perdices con gran delicadeza y complejidad.",
        badge: "Reserva",
        stock: 14,
        packSize: 6
    },
    {
        id: 145,
        name: "Latitud 33 Cabernet",
        category: "vinos",
        price: 4725.00,
        image: "vino-latitud-33-cabernet.jpg",
        description: "Cabernet Latitud 33 con expresión geográfica única y precisa.",
        badge: "Latitud 33",
        stock: 28,
        packSize: 6
    },
    {
        id: 146,
        name: "Latitud 33 Malbec",
        category: "vinos",
        price: 4725.00,
        image: "vino-latitud-33-malbec.jpg",
        description: "Malbec Latitud 33 con gran precisión geográfica y carácter único.",
        badge: "Latitud 33",
        stock: 30,
        packSize: 6
    },
    {
        id: 147,
        name: "Lola Montes Malbec",
        category: "vinos",
        price: 3360.00,
        image: "vino-lola-montes.jpg",
        description: "Malbec Lola Montes con gran feminidad y personalidad seductora.",
        badge: "Lola Montes",
        stock: 32,
        packSize: 6
    },
    {
        id: 148,
        name: "Los Cardos Malbec",
        category: "vinos",
        price: 3832.50,
        image: "vino-los-cardos.jpg",
        description: "Malbec Los Cardos con gran expresión del terroir mendocino.",
        stock: 35,
        packSize: 6
    },
    {
        id: 149,
        name: "Luca Malbec",
        category: "vinos",
        price: 22825.00,
        image: "vino-luca-malbec.jpg",
        description: "Malbec Luca premium con excepcional calidad y prestigio reconocido.",
        badge: "Luca",
        stock: 6,
        packSize: 6
    },
    {
        id: 150,
        name: "Luigi Bosca 375ml",
        category: "vinos",
        price: 4600.00,
        image: "vino-luigi-bosca-375ml.jpg",
        description: "Luigi Bosca en formato media botella, ideal para degustación.",
        badge: "Media Botella",
        stock: 40,
        packSize: 12
    },
    {
        id: 151,
        name: "Luigi Bosca Cabernet Sauvignon",
        category: "vinos",
        price: 10138.40,
        image: "vino-luigi-bosca-cs.jpg",
        description: "Cabernet Sauvignon Luigi Bosca con gran tradición italiana y elegancia.",
        badge: "Luigi Bosca",
        stock: 18,
        packSize: 6
    },
    {
        id: 152,
        name: "Luigi Bosca De Sangre Corte",
        category: "vinos",
        price: 16883.15,
        image: "vino-luigi-bosca-sangre-corte.jpg",
        description: "Corte De Sangre Luigi Bosca premium con gran intensidad y complejidad.",
        badge: "De Sangre",
        stock: 8,
        packSize: 6
    },
    {
        id: 153,
        name: "Luigi Bosca De Sangre Malbec Valle De Uco",
        category: "vinos",
        price: 13282.50,
        image: "vino-luigi-bosca-sangre-malbec.jpg",
        description: "Malbec De Sangre del Valle de Uco con gran expresión del terroir.",
        badge: "De Sangre",
        stock: 10,
        packSize: 6
    },
    {
        id: 154,
        name: "Luigi Bosca Malbec",
        category: "vinos",
        price: 10138.40,
        image: "vino-luigi-bosca-malbec.jpg",
        description: "Malbec Luigi Bosca con gran tradición y carácter italiano-argentino.",
        badge: "Luigi Bosca",
        stock: 20,
        packSize: 6
    },
    {
        id: 155,
        name: "Luigi Bosca Pinot Noir",
        category: "vinos",
        price: 12219.90,
        image: "vino-luigi-bosca-pinot.jpg",
        description: "Pinot Noir Luigi Bosca con gran delicadeza y elegancia distintiva.",
        badge: "Luigi Bosca",
        stock: 15,
        packSize: 6
    },
    {
        id: 156,
        name: "Malcriado",
        category: "vinos",
        price: 37600.00,
        image: "vino-malcriado.jpg",
        description: "Vino Malcriado con gran personalidad rebelde y carácter único.",
        badge: "Malcriado",
        stock: 4,
        packSize: 3
    },
    {
        id: 157,
        name: "Malma Reserva Familia Malbec",
        category: "vinos",
        price: 12600.00,
        image: "vino-malma-familia-malbec.jpg",
        description: "Malbec Reserva Familia Malma con gran tradición patagónica.",
        badge: "Reserva Familia",
        stock: 12,
        packSize: 6
    },
    {
        id: 158,
        name: "Malma Reserva Familia Pinot Noir",
        category: "vinos",
        price: 12600.00,
        image: "vino-malma-familia-pinot.jpg",
        description: "Pinot Noir Reserva Familia Malma con gran expresión patagónica.",
        badge: "Reserva Familia",
        stock: 10,
        packSize: 6
    },
    {
        id: 159,
        name: "Medalla Cabernet",
        category: "vinos",
        price: 9917.00,
        image: "vino-medalla-cabernet.jpg",
        description: "Cabernet premiado con medalla, calidad reconocida y excepcional.",
        badge: "Medalla",
        stock: 16,
        packSize: 6
    },
    {
        id: 160,
        name: "Mendel Malbec",
        category: "vinos",
        price: 18032.30,
        image: "vino-mendel-malbec.jpg",
        description: "Malbec Mendel premium con gran complejidad y elegancia distintiva.",
        badge: "Mendel",
        stock: 8,
        packSize: 6
    },
    {
        id: 161,
        name: "Mil Demonios Malbec",
        category: "vinos",
        price: 9059.85,
        image: "vino-mil-demonios.jpg",
        description: "Malbec Mil Demonios con gran intensidad diabólica y carácter único.",
        badge: "Mil Demonios",
        stock: 14,
        packSize: 6
    },
    {
        id: 162,
        name: "Milamore",
        category: "vinos",
        price: 11330.00,
        image: "vino-milamore.jpg",
        description: "Vino Milamore romántico con gran pasión y elegancia seductora.",
        badge: "Milamore",
        stock: 12,
        packSize: 6
    },
    {
        id: 163,
        name: "Montchenot 10 Años",
        category: "vinos",
        price: 16800.00,
        image: "vino-montchenot-10.jpg",
        description: "Montchenot 10 años con gran madurez y complejidad excepcional.",
        badge: "10 Años",
        stock: 8,
        packSize: 6
    },
    {
        id: 164,
        name: "Montchenot 5 Años Cosecha 2017",
        category: "vinos",
        price: 12000.00,
        image: "vino-montchenot-5.jpg",
        description: "Montchenot 5 años cosecha 2017 con gran evolución y carácter.",
        badge: "5 Años",
        stock: 10,
        packSize: 6
    },
    {
        id: 165,
        name: "Mora Negra Malbec Bonarda",
        category: "vinos",
        price: 24993.10,
        image: "vino-mora-negra.jpg",
        description: "Blend Malbec Bonarda Mora Negra con gran intensidad y complejidad.",
        badge: "Mora Negra",
        stock: 6,
        packSize: 6
    },
    {
        id: 166,
        name: "Mosquita Mix (Sapo + Pispi + Mosquita Muerta)",
        category: "vinos",
        price: 24320.00,
        image: "vino-mosquita-mix.jpg",
        description: "Mix especial con tres vinos únicos en una experiencia singular.",
        badge: "Mix Especial",
        stock: 3,
        packSize: 1
    },
    {
        id: 167,
        name: "Mosquita Muerta Blend De Tintas",
        category: "vinos",
        price: 11600.00,
        image: "vino-mosquita-muerta.jpg",
        description: "Blend de tintas Mosquita Muerta con gran personalidad silenciosa.",
        badge: "Mosquita Muerta",
        stock: 8,
        packSize: 3
    },
    {
        id: 168,
        name: "Navarro Correa Reserva Malbec",
        category: "vinos",
        price: 6275.00,
        image: "vino-navarro-correa.jpg",
        description: "Malbec Reserva Navarro Correa con gran tradición y calidad premium.",
        badge: "Reserva",
        stock: 20,
        packSize: 6
    },
    {
        id: 169,
        name: "Nico By Luca",
        category: "vinos",
        price: 73150.00,
        image: "vino-nico-luca.jpg",
        description: "Nico by Luca premium con excepcional calidad y prestigio único.",
        badge: "Nico by Luca",
        stock: 3,
        packSize: 3
    },
    {
        id: 170,
        name: "Nicola Catena Bonarda",
        category: "vinos",
        price: 30397.50,
        image: "vino-nicola-catena-bonarda.jpg",
        description: "Bonarda Nicola Catena premium con gran linaje y tradición familiar.",
        badge: "Nicola Catena",
        stock: 5,
        packSize: 4
    },
    {
        id: 171,
        name: "Nicolas Catena Zapata 2018 Blend",
        category: "vinos",
        price: 69540.00,
        image: "vino-nicolas-catena-zapata.jpg",
        description: "Blend 2018 Nicolas Catena Zapata, ícono absoluto de la enología argentina.",
        badge: "Ícono",
        stock: 3,
        packSize: 6
    },
    {
        id: 172,
        name: "Nieto Senetiner Patrimonial Bonarda",
        category: "vinos",
        price: 6930.00,
        image: "vino-nieto-bonarda.jpg",
        description: "Bonarda Patrimonial Nieto Senetiner con gran herencia familiar.",
        badge: "Patrimonial",
        stock: 18,
        packSize: 6
    },
    {
        id: 173,
        name: "Nieto Senetiner Patrimonial Malbec DOC",
        category: "vinos",
        price: 6924.50,
        image: "vino-nieto-malbec-doc.jpg",
        description: "Malbec DOC Patrimonial Nieto Senetiner con denominación de origen.",
        badge: "DOC",
        stock: 16,
        packSize: 6
    },
    {
        id: 174,
        name: "Norton DOC Malbec",
        category: "vinos",
        price: 6225.45,
        image: "vino-norton-doc.jpg",
        description: "Malbec DOC Norton con gran tradición y denominación de origen.",
        badge: "DOC",
        stock: 22,
        packSize: 6
    },
    {
        id: 175,
        name: "Novecento Cabernet Sauvignon Raíces",
        category: "vinos",
        price: 2300.00,
        image: "vino-novecento-raices.jpg",
        description: "Cabernet Sauvignon Raíces Novecento con gran accesibilidad y calidad.",
        stock: 45,
        packSize: 6
    },
    {
        id: 176,
        name: "Omnium Malbec",
        category: "vinos",
        price: 2447.28,
        image: "vino-omnium-malbec.jpg",
        description: "Malbec Omnium accesible con gran relación precio-calidad.",
        stock: 50,
        packSize: 6
    },
    {
        id: 177,
        name: "Zuccardi Q Malbec Cosecha 23",
        category: "vinos",
        price: 12032.90,
        image: "vino-zuccardi-q-malbec.jpg",
        description: "Malbec Q Zuccardi cosecha 2023 con gran calidad y expresión moderna.",
        badge: "Zuccardi Q",
        stock: 12,
        packSize: 6
    },
    // LICORES
    {
        id: 178,
        name: "Whisky Johnnie Walker Black Label",
        category: "licores",
        price: 45000.00,
        image: "whisky-johnnie-walker.jpg",
        description: "Whisky escocés premium con 12 años de maduración y sabores ahumados.",
        badge: "Premium",
        stock: 15,
        packSize: 6
    },
    {
        id: 179,
        name: "Whisky Jameson Irish",
        category: "licores",
        price: 38500.00,
        image: "whisky-jameson.jpg",
        description: "Whisky irlandés suave y equilibrado, perfecto para cualquier ocasión.",
        stock: 20,
        packSize: 6
    },
    {
        id: 180,
        name: "Ron Havana Club 7 Años",
        category: "licores",
        price: 32000.00,
        image: "ron-havana-club.jpg",
        description: "Ron cubano añejado 7 años con notas de vainilla y caramelo.",
        badge: "Añejo",
        stock: 18,
        packSize: 6
    },
    {
        id: 181,
        name: "Ron Bacardi Superior",
        category: "licores",
        price: 18500.00,
        image: "ron-bacardi.jpg",
        description: "Ron blanco premium ideal para cócteles y tragos refrescantes.",
        stock: 25,
        packSize: 6
    },
    {
        id: 182,
        name: "Vodka Absolut Original",
        category: "licores",
        price: 28000.00,
        image: "vodka-absolut.jpg",
        description: "Vodka sueco premium destilado con trigo de invierno, puro y suave.",
        badge: "Premium",
        stock: 22,
        packSize: 6
    },
    {
        id: 183,
        name: "Vodka Grey Goose",
        category: "licores",
        price: 55000.00,
        image: "vodka-grey-goose.jpg",
        description: "Vodka francés ultra premium, destilado cinco veces para máxima pureza.",
        badge: "Ultra Premium",
        stock: 10,
        packSize: 6
    },
    {
        id: 184,
        name: "Gin Bombay Sapphire",
        category: "licores",
        price: 35000.00,
        image: "gin-bombay.jpg",
        description: "Gin inglés premium con 10 botánicos cuidadosamente seleccionados.",
        badge: "Premium",
        stock: 16,
        packSize: 6
    },
    {
        id: 185,
        name: "Gin Tanqueray London Dry",
        category: "licores",
        price: 32500.00,
        image: "gin-tanqueray.jpg",
        description: "Gin londinense clásico con enebro, cilantro, angélica y regaliz.",
        stock: 18,
        packSize: 6
    },
    {
        id: 186,
        name: "Tequila José Cuervo Especial",
        category: "licores",
        price: 25000.00,
        image: "tequila-jose-cuervo.jpg",
        description: "Tequila mexicano tradicional perfecto para margaritas y shots.",
        stock: 24,
        packSize: 6
    },
    {
        id: 187,
        name: "Tequila Don Julio 70",
        category: "licores",
        price: 48000.00,
        image: "tequila-don-julio.jpg",
        description: "Tequila cristalino premium con sabor añejo y suavidad única.",
        badge: "Cristalino",
        stock: 12,
        packSize: 6
    },
    {
        id: 188,
        name: "Cognac Hennessy VS",
        category: "licores",
        price: 42000.00,
        image: "cognac-hennessy.jpg",
        description: "Cognac francés con notas frutales y especiadas, elegante y refinado.",
        badge: "VS",
        stock: 14,
        packSize: 6
    },
    {
        id: 189,
        name: "Pisco Control C",
        category: "licores",
        price: 15000.00,
        image: "pisco-control-c.jpg",
        description: "Pisco peruano premium ideal para pisco sour y cócteles tradicionales.",
        stock: 20,
        packSize: 6
    },
    // CERVEZAS
    {
        id: 190,
        name: "Cerveza Corona Extra",
        category: "cervezas",
        price: 3200.00,
        image: "cerveza-corona.jpg",
        description: "Cerveza mexicana ligera y refrescante, perfecta con limón.",
        badge: "Clásica",
        stock: 50,
        packSize: 24
    },
    {
        id: 191,
        name: "Cerveza Heineken",
        category: "cervezas",
        price: 3800.00,
        image: "cerveza-heineken.jpg",
        description: "Cerveza holandesa premium con sabor distintivo y refrescante.",
        badge: "Premium",
        stock: 45,
        packSize: 24
    },
    {
        id: 192,
        name: "Cerveza Stella Artois",
        category: "cervezas",
        price: 4200.00,
        image: "cerveza-stella.jpg",
        description: "Cerveza belga premium con 600 años de tradición cervecera.",
        badge: "Belga",
        stock: 40,
        packSize: 24
    },
    {
        id: 193,
        name: "Cerveza Patagonia Bohemian Pilsener",
        category: "cervezas",
        price: 2800.00,
        image: "cerveza-patagonia.jpg",
        description: "Cerveza artesanal argentina con maltas especiales y lúpulo noble.",
        badge: "Artesanal",
        stock: 35,
        packSize: 12
    },
    {
        id: 194,
        name: "Cerveza Quilmes Clásica",
        category: "cervezas",
        price: 2200.00,
        image: "cerveza-quilmes.jpg",
        description: "Cerveza argentina tradicional, fresca y con carácter nacional.",
        stock: 60,
        packSize: 24
    },
    {
        id: 195,
        name: "Cerveza Andes Origen",
        category: "cervezas",
        price: 2400.00,
        image: "cerveza-andes.jpg",
        description: "Cerveza argentina premium elaborada con agua pura de los Andes.",
        stock: 45,
        packSize: 12
    },
    {
        id: 196,
        name: "Cerveza IPA Antares",
        category: "cervezas",
        price: 3500.00,
        image: "cerveza-antares-ipa.jpg",
        description: "IPA argentina con intenso amargor y aromas cítricos del lúpulo.",
        badge: "IPA",
        stock: 30,
        packSize: 12
    },
    {
        id: 197,
        name: "Cerveza Honey Beer Antares",
        category: "cervezas",
        price: 3200.00,
        image: "cerveza-antares-honey.jpg",
        description: "Cerveza con miel argentina, dulce y refrescante con toques naturales.",
        badge: "Honey",
        stock: 25,
        packSize: 12
    },
    {
        id: 198,
        name: "Cerveza Temple Hoppy Lager",
        category: "cervezas",
        price: 2900.00,
        image: "cerveza-temple.jpg",
        description: "Lager argentina con carácter hoppy y gran refrescancia.",
        stock: 38,
        packSize: 12
    },
    {
        id: 199,
        name: "Cerveza Kross Golden Ale",
        category: "cervezas",
        price: 3100.00,
        image: "cerveza-kross.jpg",
        description: "Golden Ale artesanal con maltas especiales y gran equilibrio.",
        badge: "Golden",
        stock: 32,
        packSize: 12
    },
    // CHAMPAGNE Y ESPUMANTES
    {
        id: 200,
        name: "Champagne Moët & Chandon Brut",
        category: "champagne",
        price: 85000.00,
        image: "champagne-moet.jpg",
        description: "Champagne francés icónico, elegante y con finas burbujas persistentes.",
        badge: "Icónico",
        stock: 8,
        packSize: 6
    },
    {
        id: 201,
        name: "Champagne Veuve Clicquot Brut",
        category: "champagne",
        price: 78000.00,
        image: "champagne-veuve.jpg",
        description: "Champagne francés premium con gran personalidad y estructura.",
        badge: "Premium",
        stock: 10,
        packSize: 6
    },
    {
        id: 202,
        name: "Espumante Chandon Extra Brut",
        category: "champagne",
        price: 18500.00,
        image: "espumante-chandon.jpg",
        description: "Espumante argentino premium método tradicional con gran fineza.",
        badge: "Extra Brut",
        stock: 25,
        packSize: 6
    },
    {
        id: 203,
        name: "Espumante Mumm Cuvée Réserve",
        category: "champagne",
        price: 16800.00,
        image: "espumante-mumm.jpg",
        description: "Espumante argentino con método champenoise y gran elegancia.",
        stock: 20,
        packSize: 6
    },
    {
        id: 204,
        name: "Espumante Norton Brut Nature",
        category: "champagne",
        price: 14200.00,
        image: "espumante-norton.jpg",
        description: "Espumante sin azúcar residual, puro y con gran mineralidad.",
        badge: "Brut Nature",
        stock: 22,
        packSize: 6
    },
    {
        id: 205,
        name: "Prosecco Martini & Rossi",
        category: "champagne",
        price: 12500.00,
        image: "prosecco-martini.jpg",
        description: "Prosecco italiano fresco y vivaz, perfecto para aperitivos.",
        badge: "Italiano",
        stock: 30,
        packSize: 6
    },
    {
        id: 206,
        name: "Cava Freixenet Carta Nevada",
        category: "champagne",
        price: 8900.00,
        image: "cava-freixenet.jpg",
        description: "Cava español tradicional con gran frescura y elegancia.",
        badge: "Español",
        stock: 35,
        packSize: 6
    },
    {
        id: 207,
        name: "Espumante Cruzat Cuvée Rosé",
        category: "champagne",
        price: 22000.00,
        image: "espumante-cruzat-rose.jpg",
        description: "Espumante rosé argentino premium con gran delicadeza y color.",
        badge: "Rosé",
        stock: 15,
        packSize: 6
    },
    {
        id: 208,
        name: "Dom Pérignon Vintage",
        category: "champagne",
        price: 285000.00,
        image: "champagne-dom-perignon.jpg",
        description: "El champagne más prestigioso del mundo, símbolo de lujo absoluto.",
        badge: "Vintage",
        stock: 3,
        packSize: 3
    },
    {
        id: 209,
        name: "Espumante Bianchi Demi Sec",
        category: "champagne",
        price: 11800.00,
        image: "espumante-bianchi.jpg",
        description: "Espumante argentino demi sec con ligera dulzura y gran equilibrio.",
        badge: "Demi Sec",
        stock: 28,
        packSize: 6
    }
];

// Función para obtener todos los productos
function getAllProducts() {
    return productos;
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    if (category === 'all') {
        return productos;
    }
    return productos.filter(product => product.category === category);
}

// Función para obtener producto por ID
function getProductById(id) {
    return productos.find(product => product.id === id);
}

// Función para buscar productos
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return productos.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// Función para crear el HTML de una tarjeta de producto
function createProductCard(product) {
    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    
    return `
        <div class="product-card fade-in-up" data-category="${product.category}">
            <div class="product-image">
                <i class="fas fa-wine-bottle"></i>
                ${badge}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="quantity-selector">
                    <label for="quantity-${product.id}">Cantidad:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="decreaseProductQuantity(${product.id})" class="quantity-btn">-</button>
                        <input type="number" id="quantity-${product.id}" value="1" min="1" max="${product.stock}" class="quantity-input">
                        <button type="button" onclick="increaseProductQuantity(${product.id})" class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="discount-info" id="discount-info-${product.id}" style="display: none;">
                    <i class="fas fa-tag"></i>
                    <span>¡5% de descuento!</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCartWithQuantity(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        ${product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                    </button>
                    <button class="view-product-btn" onclick="showProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Función para obtener el nombre de la categoría en español
function getCategoryName(category) {
    const categoryNames = {
        'vinos': 'Vinos',
        'licores': 'Licores',
        'cervezas': 'Cervezas',
        'champagne': 'Champagne'
    };
    return categoryNames[category] || category;
}

// Función para renderizar productos
function renderProducts(productsToRender = null) {
    const productsGrid = document.getElementById('products-grid');
    const products = productsToRender || getAllProducts();
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <p>No se encontraron productos</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Función para filtrar productos
function filterProducts(category) {
    const products = getProductsByCategory(category);
    renderProducts(products);
    
    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
}

// Función para mostrar el modal de producto
function showProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = modal.querySelector('.product-modal-body');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <i class="fas fa-wine-bottle"></i>
            </div>
            <div class="product-detail-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-stock">Stock disponible: ${product.stock} unidades</div>
                <div class="quantity-selector">
                    <label for="quantity">Cantidad:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="decreaseQuantity()" class="quantity-btn">-</button>
                        <input type="number" id="modal-quantity" value="1" min="1" max="${product.stock}">
                        <button type="button" onclick="increaseQuantity()" class="quantity-btn">+</button>
                    </div>
                </div>
                <button class="add-to-cart-btn modal-add-btn" onclick="addToCartFromModal(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i>
                    ${product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de producto
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Funciones para controlar la cantidad en el modal
function increaseQuantity() {
    const quantityInput = document.getElementById('modal-quantity');
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('modal-quantity');
    const currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    
    if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
    }
}

// Función para agregar al carrito desde el modal
function addToCartFromModal(productId) {
    const quantityInput = document.getElementById('modal-quantity');
    const quantity = parseInt(quantityInput.value);
    
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    
    closeProductModal();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar productos inicialmente
    renderProducts();
    
    // Configurar filtros de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Configurar tarjetas de categoría
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Si estamos en la página de productos, filtrar directamente
            if (document.getElementById('productos')) {
                filterProducts(category);
                document.getElementById('productos').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            } else {
                // Si no, redirigir a la página de productos con el filtro
                window.location.href = `productos.html?category=${category}`;
            }
        });
    });
    
    // Manejar parámetros URL en página de productos
    if (window.location.pathname.includes('productos.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category && window.productManager) {
            // Pequeño delay para asegurar que los productos se hayan cargado
            setTimeout(() => {
                filterProducts(category);
            }, 100);
        }
    }
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('product-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
    
    // Event listeners para ordenamiento por precio
    document.querySelectorAll('.price-sort-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            handlePriceSortFilter(this.dataset.sort);
        });
    });
});

// Funciones para manejar cantidades en productos
function increaseProductQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
        updateDiscountInfo(productId);
    }
}

function decreaseProductQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    
    if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
        updateDiscountInfo(productId);
    }
}

// Función para actualizar información de descuento
function updateDiscountInfo(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const discountInfo = document.getElementById(`discount-info-${productId}`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity % 6 === 0 && quantity > 0) {
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

// Función para calcular precio con descuento
function calculateDiscountedPrice(price, quantity) {
    const baseTotal = price * quantity;
    if (quantity % 6 === 0 && quantity > 0) {
        return baseTotal * 0.95; // 5% de descuento
    }
    return baseTotal;
}

// Función para agregar al carrito con cantidad específica
function addToCartWithQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity > 0) {
        // Agregar al carrito la cantidad especificada
        for (let i = 0; i < quantity; i++) {
            addToCart(productId);
        }
        
        // Mostrar mensaje de descuento si aplica
        if (quantity % 6 === 0) {
            window.cart.showNotification(
                `¡Agregado con 5% de descuento por comprar ${quantity} unidades!`, 
                'success'
            );
        }
        
        // Resetear cantidad a 1
        quantityInput.value = 1;
        updateDiscountInfo(productId);
    }
}

// Event listener para cambios en los inputs de cantidad
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('quantity-input')) {
        const productId = e.target.id.replace('quantity-', '');
        updateDiscountInfo(parseInt(productId));
    }
});

// Función para asignar marcas automáticamente basándose en el nombre del producto
function assignBrandToProduct(productName) {
    const name = productName.toLowerCase();
    
    // Marcas de vinos
    if (name.includes('luigi bosca')) return 'luigi-bosca';
    if (name.includes('catena') || name.includes('dv catena') || name.includes('nicolas catena') || name.includes('nicola catena')) return 'catena';
    if (name.includes('escorihuela')) return 'escorihuela';
    if (name.includes('trumpeter')) return 'trumpeter';
    if (name.includes('andeluna')) return 'andeluna';
    if (name.includes('rutini') || name.includes('felipe rutini')) return 'rutini';
    if (name.includes('alamos')) return 'alamos';
    if (name.includes('trapiche')) return 'trapiche';
    if (name.includes('don david')) return 'don-david';
    if (name.includes('casa de herrero') || name.includes('casa boher')) return 'casa-herrero';
    if (name.includes('alma mora')) return 'alma-mora';
    if (name.includes('gran enemigo')) return 'gran-enemigo';
    if (name.includes('judas') || name.includes('piel de judas')) return 'judas';
    
    // Marcas de licores
    if (name.includes('johnnie walker')) return 'johnnie-walker';
    if (name.includes('jameson')) return 'jameson';
    if (name.includes('havana club')) return 'havana-club';
    if (name.includes('bacardi')) return 'bacardi';
    if (name.includes('absolut')) return 'absolut';
    if (name.includes('grey goose')) return 'grey-goose';
    if (name.includes('bombay')) return 'bombay';
    if (name.includes('tanqueray')) return 'tanqueray';
    if (name.includes('josé cuervo') || name.includes('jose cuervo')) return 'jose-cuervo';
    if (name.includes('don julio')) return 'don-julio';
    if (name.includes('hennessy')) return 'hennessy';
    if (name.includes('control c')) return 'control-c';
    
    // Marcas de cervezas
    if (name.includes('corona')) return 'corona';
    if (name.includes('heineken')) return 'heineken';
    if (name.includes('stella artois')) return 'stella-artois';
    if (name.includes('patagonia')) return 'patagonia';
    if (name.includes('quilmes')) return 'quilmes';
    if (name.includes('andes')) return 'andes';
    if (name.includes('antares')) return 'antares';
    if (name.includes('temple')) return 'temple';
    if (name.includes('kross')) return 'kross';
    
    // Marcas de champagne/espumantes
    if (name.includes('moët') || name.includes('moet')) return 'moet-chandon';
    if (name.includes('veuve clicquot')) return 'veuve-clicquot';
    if (name.includes('chandon')) return 'chandon';
    if (name.includes('mumm')) return 'mumm';
    if (name.includes('norton')) return 'norton';
    if (name.includes('martini')) return 'martini';
    if (name.includes('freixenet')) return 'freixenet';
    if (name.includes('cruzat')) return 'cruzat';
    if (name.includes('dom pérignon') || name.includes('dom perignon')) return 'dom-perignon';
    if (name.includes('bianchi')) return 'bianchi';
    
    return 'otras';
}

// Asignar marcas automáticamente a todos los productos
productos.forEach(product => {
    if (!product.brand) {
        product.brand = assignBrandToProduct(product.name);
    }
});

// Función para obtener productos por marca
function getProductsByBrand(brand) {
    if (brand === 'all') {
        return productos;
    }
    return productos.filter(product => product.brand === brand);
}

// Función para filtrar productos por marca y categoría
function filterProductsByBrandAndCategory(brand, category) {
    let filteredProducts = productos;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (brand !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.brand === brand);
    }
    
    return filteredProducts;
}

// Variables para mantener el estado de los filtros
let currentBrandFilter = 'all';
let currentCategoryFilter = 'all';
let currentPriceSortFilter = 'default';

// Función para ordenar productos por precio
function sortProductsByPrice(products, sortOrder) {
    if (sortOrder === 'default') {
        return products; // Mantener orden original (por ID)
    }
    
    const sortedProducts = [...products]; // Crear copia para no modificar el original
    
    if (sortOrder === 'asc') {
        return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
        return sortedProducts.sort((a, b) => b.price - a.price);
    }
    
    return sortedProducts;
}

// Función para aplicar filtros combinados
function applyFilters() {
    let filteredProducts = filterProductsByBrandAndCategory(currentBrandFilter, currentCategoryFilter);
    
    // Aplicar ordenamiento por precio
    filteredProducts = sortProductsByPrice(filteredProducts, currentPriceSortFilter);
    
    renderProducts(filteredProducts);
}

// Función para manejar el filtrado por marca
function handleBrandFilter(brand) {
    currentBrandFilter = brand;
    
    // Actualizar botones de marca
    document.querySelectorAll('.brand-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-brand="${brand}"]`).classList.add('active');
    
    // Aplicar filtros
    applyFilters();
}

// Función para obtener marcas por categoría
function getBrandsByCategory(category) {
    const brandsByCategory = {
        'vinos': [
            { id: 'luigi-bosca', name: 'Luigi Bosca' },
            { id: 'catena', name: 'Catena' },
            { id: 'escorihuela', name: 'Escorihuela' },
            { id: 'trumpeter', name: 'Trumpeter' },
            { id: 'andeluna', name: 'Andeluna' },
            { id: 'rutini', name: 'Rutini' },
            { id: 'alamos', name: 'Alamos' },
            { id: 'trapiche', name: 'Trapiche' },
            { id: 'don-david', name: 'Don David' },
            { id: 'casa-herrero', name: 'Casa de Herrero' },
            { id: 'alma-mora', name: 'Alma Mora' },
            { id: 'gran-enemigo', name: 'Gran Enemigo' },
            { id: 'judas', name: 'Judas' }
        ],
        'licores': [
            { id: 'johnnie-walker', name: 'Johnnie Walker' },
            { id: 'jameson', name: 'Jameson' },
            { id: 'havana-club', name: 'Havana Club' },
            { id: 'bacardi', name: 'Bacardi' },
            { id: 'absolut', name: 'Absolut' },
            { id: 'grey-goose', name: 'Grey Goose' },
            { id: 'bombay', name: 'Bombay' },
            { id: 'tanqueray', name: 'Tanqueray' },
            { id: 'jose-cuervo', name: 'José Cuervo' },
            { id: 'don-julio', name: 'Don Julio' },
            { id: 'hennessy', name: 'Hennessy' },
            { id: 'control-c', name: 'Control C' }
        ],
        'cervezas': [
            { id: 'corona', name: 'Corona' },
            { id: 'heineken', name: 'Heineken' },
            { id: 'stella-artois', name: 'Stella Artois' },
            { id: 'patagonia', name: 'Patagonia' },
            { id: 'quilmes', name: 'Quilmes' },
            { id: 'andes', name: 'Andes' },
            { id: 'antares', name: 'Antares' },
            { id: 'temple', name: 'Temple' },
            { id: 'kross', name: 'Kross' }
        ],
        'champagne': [
            { id: 'moet-chandon', name: 'Moët & Chandon' },
            { id: 'veuve-clicquot', name: 'Veuve Clicquot' },
            { id: 'chandon', name: 'Chandon' },
            { id: 'mumm', name: 'Mumm' },
            { id: 'norton', name: 'Norton' },
            { id: 'martini', name: 'Martini' },
            { id: 'freixenet', name: 'Freixenet' },
            { id: 'cruzat', name: 'Cruzat' },
            { id: 'dom-perignon', name: 'Dom Pérignon' },
            { id: 'bianchi', name: 'Bianchi' }
        ]
    };

    if (category === 'all') {
        // Retornar todas las marcas de todas las categorías
        const allBrands = [];
        Object.values(brandsByCategory).forEach(brands => {
            brands.forEach(brand => {
                if (!allBrands.find(b => b.id === brand.id)) {
                    allBrands.push(brand);
                }
            });
        });
        return allBrands;
    }

    return brandsByCategory[category] || [];
}

// Función para actualizar los filtros de marca según la categoría
function updateBrandFilters(category) {
    const brandFilterContainer = document.getElementById('brand-filter-buttons');
    if (!brandFilterContainer) return;

    // Obtener marcas de la categoría
    const brands = getBrandsByCategory(category);
    
    // Limpiar filtros existentes (excepto "Todas las Marcas")
    brandFilterContainer.innerHTML = '<button class="brand-filter-btn active" data-brand="all">Todas las Marcas</button>';
    
    // Agregar marcas específicas
    brands.forEach(brand => {
        const button = document.createElement('button');
        button.className = 'brand-filter-btn';
        button.setAttribute('data-brand', brand.id);
        button.textContent = brand.name;
        button.addEventListener('click', function() {
            handleBrandFilter(brand.id);
        });
        brandFilterContainer.appendChild(button);
    });

    // Agregar "Otras Marcas" al final
    const otherButton = document.createElement('button');
    otherButton.className = 'brand-filter-btn';
    otherButton.setAttribute('data-brand', 'otras');
    otherButton.textContent = 'Otras Marcas';
    otherButton.addEventListener('click', function() {
        handleBrandFilter('otras');
    });
    brandFilterContainer.appendChild(otherButton);
}

// Función para manejar el ordenamiento por precio
function handlePriceSortFilter(sortOrder) {
    currentPriceSortFilter = sortOrder;
    
    // Actualizar botones de ordenamiento
    document.querySelectorAll('.price-sort-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-sort="${sortOrder}"]`).classList.add('active');
    
    // Aplicar filtros
    applyFilters();
}

// Función para manejar el filtrado por categoría (actualizada)
function handleCategoryFilter(category) {
    currentCategoryFilter = category;
    currentBrandFilter = 'all'; // Resetear filtro de marca
    
    // Actualizar botones de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // Actualizar filtros de marca según la categoría
    updateBrandFilters(category);
    
    // Aplicar filtros
    applyFilters();
}

// Exportar funciones para uso en otros archivos
window.productManager = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    searchProducts,
    renderProducts,
    filterProducts,
    showProductModal,
    closeProductModal,
    calculateDiscountedPrice,
    getProductsByBrand,
    filterProductsByBrandAndCategory,
    handleBrandFilter,
    handleCategoryFilter,
    handlePriceSortFilter,
    getBrandsByCategory,
    updateBrandFilters,
    sortProductsByPrice,
    applyFilters
};