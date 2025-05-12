// import { sepCorto, sepLargo } from "./separadores.js";
(function () {
    var miArr = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
    console.log({ miArr: miArr });
    var provLugo = miArr[1], provPonte = miArr[3];
    console.log({ provLugo: provLugo });
    console.log({ provPonte: provPonte });
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
var familia = {
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
var _a = familia.hijos, h1 = _a[0], h3 = _a[2], h5 = _a[4], h7 = _a[6];
console.log({ h1: h1, h3: h3, h5: h5, h7: h7 });
