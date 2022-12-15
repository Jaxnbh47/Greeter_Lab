import { LoudGreeter } from "../src/Loud";

describe('Loudgreeter and name tests', () => {
    test('greeting with default parameter', () => {
      const greeter = new LoudGreeter('Hello');
      expect(greeter.greet('Jackson')).toBe('Hello, Jackson!!!');
    });
    
    test('Loudgreeter with name tests', () => {
      const greeter = new LoudGreeter('Hello');
      expect(greeter.greet('Jake')).toBe('Hello, Jake!!!');
  
    });
  });