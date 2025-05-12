"use strict";
// import { sepCorto, sepLargo } from "./separadores.js";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const persona = {
        primerNombre: "Juan",
        segundoNombre: "Carlos",
        primerApellido: "Varela",
        segundoApellido: "Iglesias",
        estatura: 1.71,
        peso: 100,
        escribe: true,
    };
    let { primerNombre, estatura, escribe } = persona;
    console.log(primerNombre);
    console.log(estatura);
    console.log(escribe);
    /**
     * Accediedno a las propiedades de un objeto tipado
     * en una  función:
     */
    const showpersona1 = (persona) => {
        console.log(persona.primerApellido);
    };
    showpersona1(persona);
    /**
     * Desestructuración de argumentos:
     */
    const showpersona2 = ({ estatura, escribe } = persona) => {
        console.log({ estatura });
        console.log({ escribe });
    };
    const showpersona3 = (_a = persona) => {
        var { primerNombre, segundoNombre } = _a, resto = __rest(_a, ["primerNombre", "segundoNombre"]);
        console.log({ primerNombre });
        console.log({ segundoNombre });
        console.log({ resto });
    };
})();
//# sourceMappingURL=app.js.map