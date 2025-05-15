(() => {
  class Persona {
    constructor(
      public firstName: string = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
      public lastName: string = "No lastName",
      public nickName?: string //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
    ) {}

    private getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
})();



//Hacer metodo set para firstName y otro para lastName en la clase padre heredada desde la clase hija.

(() => {
  class PersonaEjercicio {
    constructor(
      public firstName: string = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
      public lastName: string = "No lastName",
      public nickName?: string //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
    ) {}

    private getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    protected setFirstName (newName:string) {
      return this.firstName = newName
    };
  }

  class Niños extends PersonaEjercicio {
    constructor(
      public edad: number,
      public clase: string
    ){
      //super(firstName, lastName)
    }
  }

  let PersEjer1 = new Niños()