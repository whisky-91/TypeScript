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
var InventarioPadre = /** @class */ (function () {
    function InventarioPadre(productName, costPrice, sellingPrice) {
        this.productName = productName;
        this.costPrice = costPrice;
        this.sellingPrice = sellingPrice;
        console.log("Ejecutado constructor Inventario (Padre)");
    }
    InventarioPadre.prototype.calculoGanancias = function () {
        return this.sellingPrice - this.costPrice;
    };
    return InventarioPadre;
}());
var testerPadre = new InventarioPadre("patatas", 0.5, 0.7);
console.log({ testerPadre: testerPadre });
var resultadoTester = testerPadre.calculoGanancias();
console.log("Resultado", resultadoTester);
var oFertaHijo = /** @class */ (function (_super) {
    __extends(oFertaHijo, _super);
    function oFertaHijo(productName, costPrice, sellingPrice, stockMinimEnKg, inventarioEnKg) {
        var _this = _super.call(this, productName, costPrice, sellingPrice) || this;
        _this.stockMinimEnKg = stockMinimEnKg;
        _this.inventarioEnKg = inventarioEnKg;
        console.log("Ejecutado constructor ofertaHijo");
        return _this;
    }
    oFertaHijo.prototype.generarOferta = function (porcentaje) {
        if (this.inventarioEnKg >= this.stockMinimEnKg) {
            return this.sellingPrice - (this.sellingPrice * porcentaje) / 100;
        }
        else {
            console.log("No hay stock suficiente");
            return this.sellingPrice;
        }
    };
    return oFertaHijo;
}(InventarioPadre));
var testerHijo = new oFertaHijo("platanos", 0.6, 1.5, 100, 160);
console.log({ testerHijo: testerHijo });
resultadoTester = testerHijo.calculoGanancias();
console.log({ resultadoTester: resultadoTester });
var resultadoOfertas = testerHijo.generarOferta(15);
console.log({ resultadoOfertas: resultadoOfertas });
var PruebaNieto = /** @class */ (function (_super) {
    __extends(PruebaNieto, _super);
    function PruebaNieto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PruebaNieto;
}(oFertaHijo));
();
