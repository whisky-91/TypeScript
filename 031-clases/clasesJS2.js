(() => {
  console.log("******* clasesJS-2.js");
  sepLargo();

  class Animal {
    nombre;
    color;

    constructor(name = "No name", kolor = "No color") {
      this.nombre = name;
      this.color = kolor;
    }

    mostrarNombre() {
      console.log("Soy un/a:", this.nombre, "Método de la clase PADRE");
    }
  }

  class AnimalAereo extends Animal {
    puedeVolar;
    cantAlas;

    constructor(name, kolor, wings = 2) {
      super(name, kolor);
      this.cantAlas = wings;
      this.puedeVolar = true;
    }
  }

  class AnimalTerrestre extends Animal {
    puedeCaminar;
    cantPatas;
    poseePelo;

    constructor(name, kolor, walk = false, legs = 0, hair = false) {
      super(name, kolor);
      this.puedeCaminar = walk;
      this.cantPatas = legs;
      this.poseePelo = hair;
    }
  }

  class AnimalAcuatico extends Animal {
    puedeNadar;
    poseeEscamas;

    constructor(name, kolor, swim = true, scale = true) {
      super(name, kolor);
      this.puedeNadar = swim;
      this.poseeEscamas = scale;
    }

    mostrarEscamas() {
      console.log("Método de la clase HIJA");
      if (this.poseeEscamas) {
        console.log("Tengo escamas");
      } else {
        console.log("NO tengo escamas");
      }
    }
  }

  const animalGenerico_1 = new Animal();
  console.log({ animalGenerico_1 });

  const animalGenerico_2 = new Animal("Perro", "Blanco");
  console.log({ animalGenerico_2 });

  const loro = new AnimalAereo("Loro", "verde", 2);
  console.log({ loro });

  const vaca = new AnimalTerrestre("Vaca", "Pardo", true, 4, true);
  console.log({ vaca });
  vaca.mostrarNombre();

  const tiburon = new AnimalAcuatico("Tiburón", "blanco", true, false);
  console.log({ tiburon });
  tiburon.mostrarEscamas();
})();

/**
 * Versión del código que me ha generado ChatGPT cuando le hemos pedido
 * que lo rehaga en python:
 * ""class Animal:
    def __init__(self, name='No name', color='No color'):
        self.nombre = name
        self.color = color

    def mostrar_nombre(self):
        print(f'Soy un/a: {self.nombre} - Método de la clase PADRE')

    def __str__(self):
        return f'Animal(Nombre: {self.nombre}, Color: {self.color})'


  class AnimalAereo(Animal):
    def __init__(self, name, color, wings=2):
        super().__init__(name, color)
        self.cant_alas = wings
        self.puede_volar = True

    def __str__(self):
        return f'AnimalAereo(Nombre: {self.nombre}, Color: {self.color}, Alas: {self.cant_alas}, Puede Volar: {self.puede_volar})'


  class AnimalTerrestre(Animal):
    def __init__(self, name, color, walk=False, legs=0, hair=False):
        super().__init__(name, color)
        self.puede_caminar = walk
        self.cant_patas = legs
        self.posee_pelo = hair

    def __str__(self):
        return f'AnimalTerrestre(Nombre: {self.nombre}, Color: {self.color}, Puede Caminar: {self.puede_caminar}, Patas: {self.cant_patas}, Posee Pelo: {self.posee_pelo})'


  class AnimalAcuatico(Animal):
    def __init__(self, name, color, swim=True, scale=True):
        super().__init__(name, color)
        self.puede_nadar = swim
        self.posee_escamas = scale

    def mostrar_escamas(self):
        print('Método de la clase HIJA')
        if self.posee_escamas:
            print('Tengo escamas')
        else:
            print('NO tengo escamas')

    def __str__(self):
        return f'AnimalAcuatico(Nombre: {self.nombre}, Color: {self.color}, Puede Nadar: {self.puede_nadar}, Posee Escamas: {self.posee_escamas})'


  # Instancias de las clases
  animal_generico_1 = Animal()
  print(animal_generico_1)

  animal_generico_2 = Animal('Perro', 'Blanco')
  print(animal_generico_2)

  loro = AnimalAereo('Loro', 'Verde', 2)
  print(loro)

  vaca = AnimalTerrestre('Vaca', 'Pardo', True, 4, True)
  print(vaca)
  vaca.mostrar_nombre()

  tiburon = AnimalAcuatico('Tiburón', 'Blanco', True, False)
  print(tiburon)
  tiburon.mostrar_escamas()
""

 */
