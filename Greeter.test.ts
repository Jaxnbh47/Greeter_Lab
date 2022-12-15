import { Greeter} from "./Greeter";

describe('greeter and name tests', () => {
  test('greeting with default parameter', () => {
    const greeter = new Greeter('Hello');
    expect(greeter.greet('Jackson')).toBe('Hello, Jackson!');
  });
  
  test('greeter with custom parameter', () => {
    const greeter = new Greeter('Hello');
    expect(greeter.greet('Jake')).toBe('Hello, Jake!');

  });
});