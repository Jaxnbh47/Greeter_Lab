import { JavaScriptGreeter } from "../src/Javascript";

describe('JavaScript_greeter and name tests', () => {
  test('Hello Jackson returns console.log name', () => {
    const greeter = new JavaScriptGreeter('Hello');
    expect(greeter.greet('Jackson')).toBe("console.log(\"Hello, Jackson!\")");
  });
  
  test('Hello Jake = console.log name', () => {
    const greeter = new JavaScriptGreeter('Hi');
    expect(greeter.greet('Jake')).toBe("console.log(\"Hi, Jake!\")");
  });
});