"use strict";
(() => {
    console.log("Interfaces para las funciones:");
    console.log("=============================");
    ;
    let suma;
    suma = (a, b) => {
        return a + b;
    };
    function Suma(a, b) {
        return a + b;
    }
    ;
    // let prueba: FuncionDosNumeros = Suma(0,9)
    let sumar = function sumatory(a, b) {
        return a + b;
    };
    let resp = sumar(3, 3);
    console.log(resp);
    console.log(typeof sumar);
    //También se podría de forma indirecta a través de una variable
    // objeto en lugar de una variable igualada a la función directamente:
    const miObj = {
        Suma(a, b) { return a + b; }
    };
    console.log(`Objeto con interfaz y función nombrada:`, miObj.Suma(3, 9));
    console.log("Ejemplo JC:");
    console.log("============");
    ;
    let dosNombres;
    function saludar() {
        return "holaaaa";
    }
})();
//# sourceMappingURL=app.js.map