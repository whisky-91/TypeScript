(function () {
    var StringData = /** @class */ (function () {
        function StringData(input) {
            this.output = " ";
            this.input = input;
        }
        StringData.prototype.transformarInput = function () {
            console.log((this.output = this.input));
        };
        StringData.prototype.mostrarOutput = function (output1) {
            console.log((this.output = output1));
        };
        return StringData;
    }());
    var PRUEBA = new StringData("Esta es la primera prueba");
    console.log(PRUEBA.mostrarOutput());
    var TEXTO1 = new StringData("Este es el primer texto");
    TEXTO1.mostrarInput();
})();
