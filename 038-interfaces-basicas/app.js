"use strict";
(() => {
    console.log("Interfaces básicas:");
    console.log("===========");
    let maria = {
        primerNombre: "María",
        segundoNombre: false,
        primerApellido: "Martinez",
        segundoApellido: false,
        getNombreCompleto: (pn, sn, pa, sa) => {
            let nombre_completo;
            if (pn) {
                nombre_completo = pn;
            }
            if (sn) {
                nombre_completo = nombre_completo + " " + sn;
            }
        },
    };
    console.log(maria);
})();
//# sourceMappingURL=app.js.map