(() => {
  console.log("Interfaces para las funciones:");
  console.log("=============================");

  interface FuncionDosNumeros {
    (a:number, b: number): number;
  };

  let suma: FuncionDosNumeros;

  suma = (a: number, b: number) => {
    return a+b
  };

  function Suma(a:number, b:number) {
    return a + b
  };

  // let prueba: FuncionDosNumeros = Suma(0,9)

  let sumar: FuncionDosNumeros = function sumatory (a:number, b: number): number {
    return a + b
  };

  let resp = sumar (3, 3);
  console.log(resp);
  console.log(typeof sumar);

  //También se podría de forma indirecta a través de una variable
  // objeto en lugar de una variable igualada a la función directamente:

  const miObj:{Suma:FuncionDosNumeros} = {
    Suma (a,b){return a + b}
  };

  console.log(`Objeto con interfaz y función nombrada:`,miObj.Suma(3,9));

  console.log("Ejemplo JC:");
  console.log("============");

  interface Persona {
    (primerNombre: string, segundoNombre: string): string
  };

  let dosNombres: Persona

  function saludar (){
    return "holaaaa"
  }
})();
