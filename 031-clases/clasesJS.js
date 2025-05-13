(() => {
  class Persona {
    nombre;
    apellido;

    /**
     * Deben declararse primero las propiedades
     * en la clase antes de usarlas dentro del
     * constructor.
     */

    constructor(firstName = "Sin nombre", lastName = "Sin apellidos") {
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
    trabajo;
    constructor(firstName, lastName, job) {
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
