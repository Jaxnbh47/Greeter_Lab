import { Greeter } from "../src/Greeter";

class LoudGreeter extends Greeter {
 private extra = "!!";

  addVolume() {
    this.extra += "!";
  }

  greet(name: string) {
    return `${this.greeting}, ${name}${this.extra}`;
  }
}

export { LoudGreeter };