import { HtmlGreeter} from "./Html";

describe('greeter and name tests', () => {
  test('greeting with default parameter', () => {
    const greeter = new HtmlGreeter('Hello');
    expect(greeter.greet('Jackson')).toBe('<h1>Hello, Jackson!</h1>');
  });
  
  test('greeter with custom parameter', () => {
    const greeter = new HtmlGreeter('Hello');
    expect(greeter.greet('Jake')).toBe('<h1>Hello, Jake!</h1>');

  });
});