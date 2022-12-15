import { Greeter } from "../src/Greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string) {
    return `console.log("${super.greet(name)}")`;
  }
}
export { JavaScriptGreeter };
