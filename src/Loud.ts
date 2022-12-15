import { Greeter } from "../src/Greeter";

class LoudGreeter extends Greeter {
  loud = "!!!";

  addVolume() {
    this.loud += "!";
  }

  greet(name: string) {
    return `${this.greeting}, ${name}${this.loud}`;
  }
}

export { LoudGreeter };