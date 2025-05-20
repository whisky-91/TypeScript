(function () {
    var NombreCompleto = /** @class */ (function () {
        /**
         *  El constructor privado SOLO puede
         * ser llamado desde la propia clase en
         * la que es creado, porque es PRIVADO:
         * @param firstname : string
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
        firstname, lastName) {
            this.firstname = firstname;
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
            // this.NombreCompleto.instance.firstname = nombre;
        };
        return NombreCompleto;
    }());
    // const jcvi = new NombreCompleto("Juan Carlos", "Varela Iglesias");
    // console.log({ jcvi });
    var jc = NombreCompleto.callNombreCompleto("Juan Carlos", "Varela Iglesias");
    jc = NombreCompleto.changeName("Paco");
})();
