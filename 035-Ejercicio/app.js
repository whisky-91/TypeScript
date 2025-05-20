"use strict";
class InventarioPadre {
    constructor(productName, costPrice, sellingPrice) {
        this.productName = productName;
        this.costPrice = costPrice;
        this.sellingPrice = sellingPrice;
        console.log("Ejecutado constructor Inventario (Padre)");
    }
    calculoGanancias() {
        return this.sellingPrice - this.costPrice;
    }
}
let testerPadre = new InventarioPadre("patatas", 0.5, 0.7);
console.log({ testerPadre });
let resultadoTester = testerPadre.calculoGanancias();
console.log("Resultado", resultadoTester);
class oFertaHijo extends InventarioPadre {
    constructor(productName, costPrice, sellingPrice, stockMinimEnKg, inventarioEnKg) {
        super(productName, costPrice, sellingPrice);
        this.stockMinimEnKg = stockMinimEnKg;
        this.inventarioEnKg = inventarioEnKg;
        console.log("Ejecutado constructor ofertaHijo");
    }
    generarOferta(porcentaje) {
        if (this.inventarioEnKg >= this.stockMinimEnKg) {
            return this.sellingPrice - (this.sellingPrice * porcentaje) / 100;
        }
        else {
            console.log("No hay stock suficiente");
            return this.sellingPrice;
        }
    }
}
let testerHijo = new oFertaHijo("platanos", 0.6, 1.5, 100, 160);
console.log({ testerHijo });
resultadoTester = testerHijo.calculoGanancias();
console.log({ resultadoTester });
let resultadoOfertas = testerHijo.generarOferta(15);
console.log({ resultadoOfertas });
// class PruebaNieto extends oFertaHijo {
// }(
// )
/**
 * AÑADIDO: Usa la vía explicada en clase (añadir el getter que retrae los numeros
 * que recibe la clase padre a un array externo y lo mando a las clases hijas y asi
 * con ellas y las clases nieto etc.
 */
//# sourceMappingURL=app.js.map