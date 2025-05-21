"use strict";
(() => {
    console.log("Métodos en la interfaz:");
    console.log("===========");
    ;
    ;
    const jc = {
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
        ],
        getCantidadContactos: () => { return jc.telefono.length; }
    };
})();
//# sourceMappingURL=app.js.map