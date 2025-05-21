(() => {
  console.log("Interfaces y clases:");
  console.log("====================");

  interface IPersona {
    nombre: string,
    apellidos: string,
    profesion: string
  };

  interface IProfesion {
    getProfesion(): void
  };

  /**
   * ? Puedes implementar una o más interfaces:
   */
  class Persona implements IPersona, IProfesion {
    
    /**
     * Para eliminar el error de implementación
     * de la interface IPersona en la clase Persona,
     * las propiedades en el constructor deben llevar
     * "public/private/etc" explícitamente o ser
     * declaradas antes del constructor en la clase.
     * 
     * Si lo declaramos en el constructor, y no usamos
     * explícitamente public/private/etc no se instanciarán
     * hasta que no se haya ejecutado el constructor y
     * por tanto nos dirá que no se ha implementado bien
     * la interfaz IPersona.
     * 
     * Hasta que no se declaren correctamente no podremos
     * usar this.loquesea dentro de la clase.
     * 
     * @param nombre 
     * @param apellidos 
     * @param profesion 
     */
    constructor(
      public nombre: string,
      public apellidos: string,
      public profesion: string
    ){
      this.nombre = nombre,
      this.apellidos = apellidos,
      this.profesion = profesion,
      console.log({nombre, apellidos, profesion }); 
    };
    
    getProfesion():void {
      console.log(`${this.nombre},${this.apellidos},${this.profesion}`);
    }
  }
})();
