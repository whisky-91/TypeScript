(() => {
  console.log("Interfaces básicas:");
  console.log("===========");

  interface Persona {
    primerNombre: string;
    segundoNombre: string | boolean;
    primerApellido: string;
    segundoApellido: string | boolean;
    getNombreCompleto: (sn) => string;
  }

  let maria: Persona = {
    primerNombre: "María",
    segundoNombre: false,
    primerApellido: "Martinez",
    segundoApellido: false,
    getNombreCompleto: (
      pn: string,
      sn: string | boolean,
      pa: string,
      sa: string | boolean
    ): string => {
      let nombre_completo;

      if (pn) {
        nombre_completo = pn;
      }

      if (sn) {
        nombre_completo = nombre_completo + " " + sn;
      }
    },
  };

  console.log(maria);
})();
