"use strict";
(() => {
    class StringData {
        constructor(input) {
            this.output = " ";
            this.input = input;
        }
        transformarInput() {
            console.log((this.output = this.input));
        }
        mostrarOutput(output1) {
            console.log((this.output = output1));
        }
    }
    const PRUEBA = new StringData("Esta es la primera prueba");
    console.log(PRUEBA.mostrarOutput("test"));
    const TEXTO1 = new StringData("Este es el primer texto");
    // TEXTO1.mostrarInput();
})();
//# sourceMappingURL=clasesTS-5.js.map