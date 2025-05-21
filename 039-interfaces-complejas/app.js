"use strict";
(() => {
    console.log("Interfaces complejas:");
    console.log("===========");
    ;
    ;
    const PERSONA = {
        nombre: "Juan Carlos",
        apellidos: "Varela Iglesias",
        edad: 35,
        dirección: {
            calle: "Perigos",
            número: "6",
            ciudad: "Vigo"
        },
        nacionalidad: [
            'Española',
            'Venezolana'
        ],
        telefono: [
            {
                tipo: "móvil",
                numero: 604039594,
                codIn: 34
            },
            {
                tipo: "fijo",
                numero: 96869459845,
                codIn: 34
            }
        ]
    };
    const Maria = {
        nombre: "María Monserrat",
        apellidos: "VMiguez Montesano",
        dirección: {
            calle: "Perigos",
            número: "6",
        }
    };
    console.log("----------------------------------------------------------");
    console.log("Ejercicio Inferfaces:");
    console.log("=====================");
    ;
    ;
    ;
    ;
    const PRODUCTO = {
        codProducto: 893,
        nombre: "Camiseta Mujer",
        descripcion: "Camiseta manga corta de mujer, licencia Disney",
        proveedor: [
            {
                id_proveedor: 2139,
                nombre: "Inditex",
            }
        ],
        tiendas: [
            {
                codigo: "9834-1384erk9",
                ciudad: [
                    {
                        calle: "Calle Ana Orantes",
                        telefono: 981813754
                    }
                ]
            },
            {
                codigo: "3482-193ykr0",
                ciudad: [
                    {
                        calle: "Calle Bovoir",
                        telefono: 935829348
                    }
                ]
            }
        ]
    };
})();
//# sourceMappingURL=app.js.map