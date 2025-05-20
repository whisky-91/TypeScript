"use strict";
(() => {
    console.log("Ejercicio Clases abstractas:");
    /**
     * ? Crea una clase abstracta con propiedades comunes a todos
     * ? los vehículos, a partir de ella, crea una clase hija que
     * ? añada algunas cosas particulares de un tipo de coche y
     * ? use la clase abstracta como modelo:
     */
    class VehiculosBase {
        constructor(marca, modelo, tipoCombustible) {
            this.marca = marca;
            this.modelo = modelo;
            this.tipoCombustible = tipoCombustible;
            this.marca = marca;
            this.modelo = modelo;
            this.tipoCombustible = tipoCombustible;
        }
    }
    class VehiculosHijo extends VehiculosBase {
        constructor(marca, modelo, tipoCombustible, insigniaMercedes, bateria) {
            super(marca, modelo, tipoCombustible);
            this.insigniaMercedes = insigniaMercedes;
            this.bateria = bateria;
            this.insigniaMercedes = insigniaMercedes;
            this.bateria = bateria;
        }
    }
    let mercedesRandom = new VehiculosHijo("Mercedes", "Mercedes-Benz EQC", "Eléctrico", true, "80 kWh de iones de litio");
    console.log({ mercedesRandom });
})();
//# sourceMappingURL=app3.js.map