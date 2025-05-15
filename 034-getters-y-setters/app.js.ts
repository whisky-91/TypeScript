(() => {
  class Persona {
    constructor(
      public firstName: string = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
      public lastName: string = "No lastName",
      public nickName?: string //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
    ) {
      console.log("Ejecutado el constructor de Persona");
    }

    private getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
})();

/**
 * Ejercicio:
 *
 * Crea una aplicación que calcule gastos de transporte
 * terrestres y marítimos para la peninsula iberica.
 *
 * La aplicación debe decirme por qué canal/canales se va
 * a hacer el transporte y cuánto cuesta cada una de las
 * posibilidades.
 *
 * Un solo transporte terrestre (camión) puede transportar
 * como máximo 5T.
 *
 * Hacer repositorio comun, subir y trabajar con el
 * repositorio comunitario.
 */
