// import { sepCorto, sepLargo } from "./separadores.js";

(() => {
  type Persona = {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    estatura: number;
    peso: number;
    escribe: boolean;
  };

  const persona: Persona = {
    primerNombre: "Juan",
    segundoNombre: "Carlos",
    primerApellido: "Varela",
    segundoApellido: "Iglesias",
    estatura: 1.71,
    peso: 100,
    escribe: true,
  };

  let { primerNombre, estatura, escribe } = persona;
  console.log(primerNombre);
  console.log(estatura);
  console.log(escribe);

  /**
   * Accediedno a las propiedades de un objeto tipado
   * en una  función:
   */

  const showpersona1 = (persona: Persona): void => {
    console.log(persona.primerApellido);
  };

  showpersona1(persona);

  /**
   * Desestructuración de argumentos:
   */

  const showpersona2 = ({ estatura, escribe } = persona): void => {
    console.log({ estatura });
    console.log({ escribe });
  };

  const showpersona3 = ({
    primerNombre,
    segundoNombre,
    ...resto
  } = persona): void => {
    console.log({ primerNombre });
    console.log({ segundoNombre });
    console.log({ resto });
  };
})();
