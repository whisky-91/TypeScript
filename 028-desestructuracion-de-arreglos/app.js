"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
(() => {
    const miArr = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
    console.log({ miArr });
    let [, provLugo, , provPonte] = miArr;
    console.log({ provLugo });
    console.log({ provPonte });
})();
/**
 * Ejercicio 028-1:
 *
 * let familia = {
 *  padre: "Alfredo",
 *  madre: "Josefina",
 *  hijos: ["Alfredito", "Josefinito", "Paquito", "Luisita", "Carmencita", "Olguita", "Carlitos"]
 * }
 *
 * Desestructura los hijos impares.
 */
let familia = {
    padre: "Alfredo",
    madre: "Josefina",
    hijos: [
        "Alfredito",
        "Josefinito",
        "Paquito",
        "Luisita",
        "Carmencita",
        "Olguita",
        "Carlitos",
    ],
};
let { hijos: [h1, , h3, , h5, , h7], } = familia;
console.log({ h1, h3, h5, h7 });
//# sourceMappingURL=app.js.map