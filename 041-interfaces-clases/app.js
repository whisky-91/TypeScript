"use strict";
(() => {
    console.log("Interfaces y clases:");
    console.log("====================");
    ;
    ;
    /**
     * ? Puedes implementar una o más interfaces:
     */
    class Persona {
        /**
         * Para eliminar el error de implementación
         * de la interface IPersona en la clase Persona,
         * las propiedades en el constructor deben llevar
         * "public/private/etc" explícitamente o ser
         * declaradas antes del constructor en la clase.
         *
         * Si lo declaramos en el constructor, y no usamos
         * explícitamente public/private/etc no se instanciarán
         * hasta que no se haya ejecutado el constructor y
         * por tanto nos dirá que no se ha implementado bien
         * la interfaz IPersona.
         *
         * Hasta que no se declaren correctamente no podremos
         * usar this.loquesea dentro de la clase.
         *
         * @param nombre
         * @param apellidos
         * @param profesion
         */
        constructor(nombre, apellidos, profesion) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.profesion = profesion;
            this.nombre = nombre,
                this.apellidos = apellidos,
                this.profesion = profesion,
                console.log({ nombre, apellidos, profesion });
        }
        ;
        getProfesion() {
            console.log(`${this.nombre},${this.apellidos},${this.profesion}`);
        }
    }
})();
//# sourceMappingURL=app.js.map