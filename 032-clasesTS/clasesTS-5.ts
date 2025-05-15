(() => {
  class StringData {
    input: string;
    private output: string = " ";

    constructor(input: string) {
      this.input = input;
    }

    private transformarInput(): void {
      console.log((this.output = this.input));
    }

    public mostrarOutput(output1: string): void {
      console.log((this.output = output1));
    }

    // public mostrarOutput2() {
    //   console.log(this.output);
    // }
  }

  const PRUEBA = new StringData("Esta es la primera prueba");
  console.log(PRUEBA.mostrarOutput("test"));

  const TEXTO1 = new StringData("Este es el primer texto");
  // TEXTO1.mostrarInput();
})();
