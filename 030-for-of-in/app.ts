// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  console.log("for...of => ARREGLOS");

  type MyArr = string[];

  type Persona = {
    nombre: string;
    edad: number;
  };

  let arrPersonas = [persona1, persona2, persona3];

  console.log("for...in => OBJETOS");

  let persona1: Persona = {
    nombre: "Andrea",
    edad: 25,
  };

  let persona2: Persona = {
    nombre: "Beatriz",
    edad: 35,
  };

  let persona3: Persona = {
    nombre: "Celia",
    edad: 45,
  };
})();
