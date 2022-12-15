import { JavaScriptGreeter } from "./Javascript";

describe('JavaScript_greeter and name tests', () => {
  test('greeting with default parameter', () => {
    const greeter = new JavaScriptGreeter('Hello');
    expect(greeter.greet('Jackson')).toBe("console.log(\"Hello, Jackson!\")");
  });
  
  test('JavaScript_greeter and name tests', () => {
    const greeter = new JavaScriptGreeter('Hello');
    expect(greeter.greet('Jake')).toBe("console.log(\"Hello, Jake!\")");

  });
});