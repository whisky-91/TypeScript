(function () {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        return Persona;
    }());
    var luisa = new Persona("Luisa", "López");
    console.log({ luisa: luisa });
    var carmen; //Undefined, no hacemos pasar los valores nombre y apellidos por el constructor, 
    //entonces Carmen queda como undefined.
    // console.log({ carmen });
    carmen = new Persona("Carmen", "Cedeño");
    console.log({ carmen: carmen });
    console.log("Haciendo una clase vacía");
    var PersonaV = /** @class */ (function () {
        function PersonaV() {
        }
        return PersonaV;
    }());
    {
        console.log("hola");
    }
});
//Nueva instancia de clase con constructor vacío.
var MANOLOV = new PersonaV;
();
