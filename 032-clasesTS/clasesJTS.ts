(() => {
  class Persona {
    public nombre: string;
    public apellido: string; //Si no le escribimos el ámbito (public) por defecto nos los hará públicos.

    /**
     * Deben declararse primero las propiedades
     * en la clase antes de usarlas dentro del
     * constructor.
     */

    constructor(
      firstName: string = "Sin nombre",
      lastName: string = "Sin apellidos"
    ) {
      this.nombre = firstName;
      this.apellido = lastName;
    }
  }

  // Instancias de Clase padre PERSONA:

  const manolo = new Persona("Manolo", "Martínez");
  console.log({ manolo });

  const fernando = new Persona("Fernando", "Fernandez");
  console.log({ fernando });

  console.log("Ejemplo 2: Herencia");

  class TrabajoPersona extends Persona {
    public trabajo: string;
    constructor(firstName: string, lastName: string, job: string) {
      super(firstName, lastName); //Llama al constructor de la clase PADRE.
      this.trabajo = job;
    }
  }

  // Instancias de clase hijo:
  const Olga = new TrabajoPersona("Olga", "Iglesias", "Madre de Juan Carlos");
  console.log({ Olga });
})();

/**
 * Ejercicio 1:
 * Crea la clase PADRE animal, y las clases HIJAS aéreo,
 * terrestre y acuático.
 */

(() => {
  class Animal {
    nombre;
    tipo;
    respiracion;
    constructor(nombre = "noName", type, breathe = "unknow") {
      this.nombre = nombre;
      this.tipo = type;
      this.respiracion = breathe;
    }
  }

  class Terrestre extends Animal {
    alimentacion;
    constructor(nombre, type = terrestre, breathe, comida) {
      super(nombre, type, breathe);
      this.alimentacion = comida;
    }
  }

  class Acuatico extends Animal {
    numAletas;
    constructor(nombre, type = Acuatico, breathe, alet = 3) {
      super(nombre, type, breathe);
      this.numAletas = alet;
    }
  }

  class Aereo extends Animal {
    alas;
    constructor(nombre, type = Aereo, breathe, wings = true) {
      super(nombre, type, breathe);
      this.alas = wings;
    }
  }

  console.log("Instancias de las clases:");

  const generico = new Animal();
  console.log({ generico });

  const genTerrestre = new Terrestre(
    "Caballo",
    "Terrestre",
    "Pulmonar",
    "hervíboro"
  );
  console.log({ genTerrestre });

  const genAcuatico = new Acuatico("Pez Globo", "Acuatico", "Branquias");
  console.log({ genAcuatico });

  const genAereo = new Aereo("Gaviota", "Aereo", "Pulmonar");
  console.log({ genAereo });
})();

console.log("================================");
console.log("Carpeta033: ClasesTS-3.js");
console.log("================================");

class VehiculosConRuedas {
  private poseeRuedas: boolean;
  public tipo: string;

  constructor(tipo: string, poseeRuedas?: boolean) {
    this.tipo = tipo;
    this.poseeRuedas = true;
  }
}
/**
 * forma corta de inicializar prop.
 *
 * se ace directamente desde el constructor,
 * a excepcion de la s ppdades statics.
 */
const coche = new VehiculosConRuedas("Vehiculo");
console.log({ coche });
