(function () {
    var NombreCompleto = /** @class */ (function () {
        /**
         *  El constructor privado SOLO puede
         * ser llamado desde la propia clase en
         * la que es creado, porque es PRIVADO:
         * @param firstName : string
         * @param lastName : string
         */
        function NombreCompleto(
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
        NombreCompleto.callNombreCompleto = function (nombre, apellido) {
            if (!NombreCompleto.instance) {
                NombreCompleto.instance = new NombreCompleto(nombre, apellido);
            }
            return NombreCompleto.instance;
        };
        NombreCompleto.changeName = function (nombre) {
            NombreCompleto.instance.firstName = nombre;
        };
        return NombreCompleto;
    }());
    // const jcvi = new NombreCompleto("Juan Carlos", "Varela Iglesias");
    // console.log({ jcvi });
    var jc = NombreCompleto.callNombreCompleto("Juan Carlos", "Varela Iglesias");
    NombreCompleto.changeName("Paco");
    console.log({ jc: jc });
})();
