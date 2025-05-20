"use strict";
(() => {
    class Persona {
        constructor(firstName = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
        lastName = "No lastName", nickName //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
})();
//Hacer metodo set para firstName y otro para lastName en la clase padre heredada desde la clase hija.
(() => {
    class PersonaEjercicio {
        constructor(firstName = "No firstName", // Si tiene valores por defecto no tenemos que hacerlo opcional (?)
        lastName = "No lastName", nickName //= 'No NickName'// No aparece nunca el mensaje por defecto al ser opcional.
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        setFirstName(newName) {
            return this.firstName = newName;
        }
        ;
    }
    class Niños extends PersonaEjercicio {
        constructor(edad, clase) {
            this.edad = edad;
            this.clase = clase;
            //super(firstName, lastName)
        }
    }
    let PersEjer1 = new Niños();
});
//# sourceMappingURL=app.js.map