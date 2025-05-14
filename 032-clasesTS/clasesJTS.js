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
    var Persona = /** @class */ (function () {
        /**
         * Deben declararse primero las propiedades
         * en la clase antes de usarlas dentro del
         * constructor.
         */
        function Persona(firstName, lastName) {
            if (firstName === void 0) { firstName = "Sin nombre"; }
            if (lastName === void 0) { lastName = "Sin apellidos"; }
            this.nombre = firstName;
            this.apellido = lastName;
        }
        return Persona;
    }());
    // Instancias de Clase padre PERSONA:
    var manolo = new Persona("Manolo", "Martínez");
    console.log({ manolo: manolo });
    var fernando = new Persona("Fernando", "Fernandez");
    console.log({ fernando: fernando });
    console.log("Ejemplo 2: Herencia");
    var TrabajoPersona = /** @class */ (function (_super) {
        __extends(TrabajoPersona, _super);
        function TrabajoPersona(firstName, lastName, job) {
            var _this = _super.call(this, firstName, lastName) || this; //Llama al constructor de la clase PADRE.
            _this.trabajo = job;
            return _this;
        }
        return TrabajoPersona;
    }(Persona));
    // Instancias de clase hijo:
    var Olga = new TrabajoPersona("Olga", "Iglesias", "Madre de Juan Carlos");
    console.log({ Olga: Olga });
})();
/**
 * Ejercicio 1:
 * Crea la clase PADRE animal, y las clases HIJAS aéreo,
 * terrestre y acuático.
 */
(function () {
    var Animal = /** @class */ (function () {
        function Animal(nombre, type, breathe) {
            if (nombre === void 0) { nombre = "noName"; }
            if (breathe === void 0) { breathe = "unknow"; }
            this.nombre = nombre;
            this.tipo = type;
            this.respiracion = breathe;
        }
        return Animal;
    }());
    var Terrestre = /** @class */ (function (_super) {
        __extends(Terrestre, _super);
        function Terrestre(nombre, type, breathe, comida) {
            if (type === void 0) { type = terrestre; }
            var _this = _super.call(this, nombre, type, breathe) || this;
            _this.alimentacion = comida;
            return _this;
        }
        return Terrestre;
    }(Animal));
    var Acuatico = /** @class */ (function (_super) {
        __extends(Acuatico, _super);
        function Acuatico(nombre, type, breathe, alet) {
            if (type === void 0) { type = Acuatico; }
            if (alet === void 0) { alet = 3; }
            var _this = _super.call(this, nombre, type, breathe) || this;
            _this.numAletas = alet;
            return _this;
        }
        return Acuatico;
    }(Animal));
    var Aereo = /** @class */ (function (_super) {
        __extends(Aereo, _super);
        function Aereo(nombre, type, breathe, wings) {
            if (type === void 0) { type = Aereo; }
            if (wings === void 0) { wings = true; }
            var _this = _super.call(this, nombre, type, breathe) || this;
            _this.alas = wings;
            return _this;
        }
        return Aereo;
    }(Animal));
    console.log("Instancias de las clases:");
    var generico = new Animal();
    console.log({ generico: generico });
    var genTerrestre = new Terrestre("Caballo", "Terrestre", "Pulmonar", "hervíboro");
    console.log({ genTerrestre: genTerrestre });
    var genAcuatico = new Acuatico("Pez Globo", "Acuatico", "Branquias");
    console.log({ genAcuatico: genAcuatico });
    var genAereo = new Aereo("Gaviota", "Aereo", "Pulmonar");
    console.log({ genAereo: genAereo });
})();
console.log("================================");
console.log("Carpeta033: ClasesTS-3.js");
console.log("================================");
var VehiculosConRuedas = /** @class */ (function () {
    function VehiculosConRuedas(tipo, poseeRuedas) {
        this.tipo = tipo;
        this.poseeRuedas = true;
    }
    return VehiculosConRuedas;
}());
var coche = new VehiculosConRuedas("Vehiculo");
console.log({ coche: coche });
