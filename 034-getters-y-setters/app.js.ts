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
