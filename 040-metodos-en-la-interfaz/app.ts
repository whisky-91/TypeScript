(() => {
  console.log("Métodos en la interfaz:");
  console.log("===========");

  interface Persona {
    nombre: string,
    apellidos: string,
    edad?: number | undefined,
    dirección: Dirección,
    nacionalidad?: string [] | undefined,
    telefono?: Telefono[] | undefined 
    // Seguirá dando el fallo de que puede ser tipo 
    // telefono o undefined. Podríamos ponerlo de forma 
    // explícita como en este caso o implícita.
    getCantidadContactos?: ()  => number | undefined
    // otra forma de hacerlo:
    // getCantidadContactos(): number | undefined

    /**
     * !NOTAS JF:
     * 
     * ? Ambas formas son válidas. Como propiedad
     * ? no puedes usar ":" para el tipo de dato
     * ? que el método devuelve.
     * ! getCantidadContactos?: ()  => number | undefined
     * 
     * ? Como método NO puedes usar "=>"
     * ? para el tipo de dato que devuelve.
     * ! getCantidadContactos(): number | undefined
     */
  };

  interface Dirección {
    calle?: string,
    número?: string,
    ciudad?: string
  };

  interface Telefono {
    tipo: string,
    numero: number,
    codIn: number
  }


 const jc: Persona = {
  nombre: "Juan Carlos",
  apellidos: "Varela Iglesias",
  edad: 35,
  dirección: {
    calle: "Perigos",
    número: "6",
    ciudad: "Vigo"
  },
  nacionalidad: [
    'Española',
    'Venezolana'
  ],
  telefono: [
    {
      tipo: "móvil",
      numero: 604039594,
      codIn: 34
    },
    {
      tipo: "fijo",
      numero: 96869459845,
      codIn: 34
    }
  ],
  getCantidadContactos: ()  => {return jc.telefono.length}
 };
})();
