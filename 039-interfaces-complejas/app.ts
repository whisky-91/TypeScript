(() => {
  console.log("Interfaces complejas:");
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


 const PERSONA: Persona = {
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
  ]
 };

 const Maria: Persona = {
  nombre: "María Monserrat",
  apellidos: "VMiguez Montesano",
  dirección: {
    calle: "Perigos",
    número: "6",
  }
 };

  console.log("----------------------------------------------------------");
  console.log("Ejercicio Inferfaces:");
  console.log("=====================");

  /**
   * * Crea las interfaces necesarias para el siguiente objeto:
   * 
   * *{
   * *  codProducto:,
   * *  nombre: ,
   * *  descripcion: ,
   * *  proveedor: [
   * *    {
   * *      id_proveedor: ,
   * *      nombre: ,
   * *    }
   * *  ],
   * * tiendas: [
   * *    {
   * *      codigo: ,
   * *      ciudad: [
   * *        {
   * *          calle:
   * *          telefono:
   * *        }
   * *      ]
   * *    }
   * *  ]
   * *}
   */

  interface Registro {
    codProducto:number,
    nombre: string,
    descripcion: string,
    proveedor: Proveedor [],
    tiendas: Tiendas []
  };

  interface Proveedor {
    id_proveedor: number,
    nombre: string,
  };

  interface Tiendas {
    codigo: string,
    ciudad: Ciudad []
  };

  interface Ciudad {
    calle: string,
    telefono: number
  };

  const PRODUCTO: Registro = {
    codProducto: 893,
    nombre: "Camiseta Mujer",
    descripcion: "Camiseta manga corta de mujer, licencia Disney" ,
    proveedor: [
      {
        id_proveedor: 2139,
        nombre: "Inditex",
      }
    ],
   tiendas: [
      {
        codigo: "9834-1384erk9",
        ciudad: [
          {
            calle: "Calle Ana Orantes",
            telefono: 981813754
          }
        ]
      },
      {
        codigo: "3482-193ykr0",
        ciudad: [
          {
            calle: "Calle Bovoir",
            telefono: 935829348
          }
        ]
      }
    ]
  }
})();
