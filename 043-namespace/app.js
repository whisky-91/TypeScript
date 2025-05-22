"use strict";
console.log("Namespace:");
console.log("===========");
var mySpace;
(function (mySpace) {
    let variable = 5;
    mySpace.variableExportada = 3;
    function fNombrada() {
        console.log("Estoy en una función nombrada");
    }
    mySpace.fNombrada = fNombrada;
    mySpace.fAnonima = () => {
        console.log(`Estoy en una función anónima`);
    };
    console.log("Ejecutado dentro del NameSpace");
    fNombrada();
    console.log(variable);
    console.log(mySpace.variableExportada);
})(mySpace || (mySpace = {}));
console.log("=========================================");
console.log("Ejecutado FUERA del NameSpace");
// console.log(variableExportada);
// console.log(mySpace.variableExportada);
mySpace.fNombrada();
mySpace.fAnonima();
var calculo;
(function (calculo) {
    let numeros = [];
    calculo.solicitarNumeros = () => {
        let a = Number(prompt("Primer número"));
        let b = Number(prompt("Segundo número"));
        console.log(a, b);
        return { a, b };
    };
    let numerosUsuario = (n1, n2) => {
        numeros.push(n1, n2);
    };
    // numeros = numerosUsuario(res.a, res.b);
})(calculo || (calculo = {}));
let resp = calculo.solicitarNumeros();
//# sourceMappingURL=app.js.map