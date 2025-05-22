console.log("Namespace:");
console.log("===========");

namespace mySpace {
  let variable: number = 5;

  export let variableExportada: number = 3;

  export function fNombrada(): void {
    console.log("Estoy en una función nombrada");
  }

  export let fAnonima = () => {
    console.log(`Estoy en una función anónima`);
  };

  console.log("Ejecutado dentro del NameSpace");

  fNombrada();

  console.log(variable);
  console.log(variableExportada);
}
console.log("=========================================");

console.log("Ejecutado FUERA del NameSpace");

// console.log(variableExportada);
// console.log(mySpace.variableExportada);
mySpace.fNombrada();

mySpace.fAnonima();

namespace calculo {
  let numeros: number[] = [];
  export let solicitarNumeros = () => {
    let a: number = Number(prompt("Primer número"));
    let b: number = Number(prompt("Segundo número"));
    console.log(a, b);
    return { a, b };
  };

  let numerosUsuario = (n1: number, n2: number): void => {
    numeros.push(n1, n2);
  };

  numeros = numerosUsuario(res.a, res.b);
}

let resp = calculo.solicitarNumeros();
