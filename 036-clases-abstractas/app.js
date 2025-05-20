"use strict";
(() => {
    class Persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    const luisa = new Persona("Luisa", "López");
    console.log({ luisa });
    let carmen; //Undefined, no hacemos pasar los valores nombre y apellidos por el constructor, 
    //entonces Carmen queda como undefined.
    // console.log({ carmen });
    carmen = new Persona("Carmen", "Cedeño");
    console.log({ carmen });
    console.log("Haciendo una clase vacía");
    class PersonaV {
        //Posee constructor vacío
        constructor() { }
    }
    {
        console.log("hola");
    }
}
//Nueva instancia de clase con constructor vacío.
);
//Nueva instancia de clase con constructor vacío.
const MANOLOV = new PersonaV;
();
//# sourceMappingURL=app.js.map