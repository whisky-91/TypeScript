var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    console.log("Ejercicio Clases abstractas:");
    /**
     * ? Crea una clase abstracta con propiedades comunes a todos
     * ? los vehículos, a partir de ella, crea una clase hija que
     * ? añada algunas cosas particulares de un tipo de coche y
     * ? use la clase abstracta como modelo:
     */
    var VehiculosBase = /** @class */ (function () {
        function VehiculosBase(marca, modelo, tipoCombustible) {
            this.marca = marca;
            this.modelo = modelo;
            this.tipoCombustible = tipoCombustible;
            this.marca = marca;
            this.modelo = modelo;
            this.tipoCombustible = tipoCombustible;
        }
        return VehiculosBase;
    }());
    var VehiculosHijo = /** @class */ (function (_super) {
        __extends(VehiculosHijo, _super);
        function VehiculosHijo(marca, modelo, tipoCombustible, insigniaMercedes, bateria) {
            var _this = _super.call(this, marca, modelo, tipoCombustible) || this;
            _this.insigniaMercedes = insigniaMercedes;
            _this.bateria = bateria;
            _this.insigniaMercedes = insigniaMercedes;
            _this.bateria = bateria;
            return _this;
        }
        return VehiculosHijo;
    }(VehiculosBase));
    var mercedesRandom = new VehiculosHijo("Mercedes", "Mercedes-Benz EQC", "Eléctrico", true, "80 kWh de iones de litio");
    console.log({ mercedesRandom: mercedesRandom });
})();
