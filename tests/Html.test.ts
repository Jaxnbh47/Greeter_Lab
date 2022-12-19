import { HtmlGreeter} from "../src/Html";

describe('greeter and name tests', () => {
  test('greeting with h1', () => {
    const greeter = new HtmlGreeter('Hello', "h1");
    expect(greeter.greet('Jackson')).toBe('<h1>Hello, Jackson!</h1>');
  });

  test('greeting with default', () => {
    const greeter = new HtmlGreeter('Hello');
    expect(greeter.greet('Jackson')).toBe('<h1>Hello, Jackson!</h1>');
  });
  
  test('greeter with custom parameter h3', () => {
    const greeter = new HtmlGreeter('Hello', "h3");
    expect(greeter.greet('Jake')).toBe('<h3>Hello, Jake!</h3>');

  });
});