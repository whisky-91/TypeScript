"use strict";
(() => {
    class Persona {
        constructor(firstName = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
        lastName = "No lastName", nickName //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
            console.log("Ejecutado el constructor de Persona");
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
})();
/**
 * Ejercicio:
 *
 * Crea una aplicación que calcule gastos de transporte
 * terrestres y marítimos para la peninsula iberica.
 *
 * La aplicación debe decirme por qué canal/canales se va
 * a hacer el transporte y cuánto cuesta cada una de las
 * posibilidades.
 *
 * Un solo transporte terrestre (camión) puede transportar
 * como máximo 5T.
 *
 * Hacer repositorio comun, subir y trabajar con el
 * repositorio comunitario.
 */
//# sourceMappingURL=app.js.js.map