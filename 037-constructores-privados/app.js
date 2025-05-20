"use strict";
(() => {
    class NombreCompleto {
        /**
         *  El constructor privado SOLO puede
         * ser llamado desde la propia clase en
         * la que es creado, porque es PRIVADO:
         * @param firstName : string
         * @param lastName : string
         */
        constructor(
        /**
         * Si no declaramos como public las
         * propiedades en el constructor con:
         *  console.log({jcvi})
         *
         * Vamos a obtener:
         *
         * (jcvi: NombreCompleto)
         * jcvi: NombreCompleto
         *    [[Prototype]]: Object
         *  [[Prototype]]: Object
         */
        firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log("Nombre en constructor:", NombreCompleto.instance);
        }
        static callNombreCompleto(nombre, apellido) {
            if (!NombreCompleto.instance) {
                NombreCompleto.instance = new NombreCompleto(nombre, apellido);
            }
            return NombreCompleto.instance;
        }
        static changeName(nombre) {
            NombreCompleto.instance.firstName = nombre;
        }
    }
    // const jcvi = new NombreCompleto("Juan Carlos", "Varela Iglesias");
    // console.log({ jcvi });
    let jc = NombreCompleto.callNombreCompleto(`Juan Carlos`, "Varela Iglesias");
    NombreCompleto.changeName("Paco");
    console.log({ jc });
})();
//# sourceMappingURL=app.js.map