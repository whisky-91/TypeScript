(() => {
  /**
   * Caso 1:
   */
  // console.log(nombre1);
  // nombre1 = "Nombre 1: Olga"
  // Consola:
  // Uncaught ReferenceError: nombre1 is not defined
  //  at appJSNativo.js:1:13
  //! Por qué nos da ese error, ¿cree estar renombrando
  //! variable antes de declararla?.
  /**
   * Caso 2:
   */
  // console.log(nombre2);
  // var nombre2 = "Nombre 2: Olga";
  // Consola:
  // Undefined
  /**
   * Caso 3:
   */
  // console.log(nombre3);
  // let nombre3 = "Nombre 3: Olga";
  //Consola:
  // Uncaught ReferenceError: Cannot acces 'nombre3' before
  //      initialization at appJSNative.js:21:33}
})();
