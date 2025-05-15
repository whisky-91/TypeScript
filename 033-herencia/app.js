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
        function Persona(firstName, // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
        lastName, nickName //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
        ) {
            if (firstName === void 0) { firstName = "No firstName"; }
            if (lastName === void 0) { lastName = "No lastName"; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
        }
        Persona.prototype.getFullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        return Persona;
    }());
})();
//Hacer metodo set para firstName y otro para lastName en la clase padre heredada desde la clase hija.
(function () {
    var PersonaEjercicio = /** @class */ (function () {
        function PersonaEjercicio(firstName, // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
        lastName, nickName //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
        ) {
            if (firstName === void 0) { firstName = "No firstName"; }
            if (lastName === void 0) { lastName = "No lastName"; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
        }
        PersonaEjercicio.prototype.getFullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        PersonaEjercicio.prototype.setFirstName = function (newName) {
            return this.firstName = newName;
        };
        ;
        return PersonaEjercicio;
    }());
    var Niños = /** @class */ (function (_super) {
        __extends(Niños, _super);
        function Niños(edad, clase) {
            var _this = this;
            _this.edad = edad;
            _this.clase = clase;
            return _this;
            //super(firstName, lastName)
        }
        return Niños;
    }(PersonaEjercicio));
    var PersEjer1 = new Niños();
});
