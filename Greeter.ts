class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  };

  greet(name: string) {
    return `${this.greeting}, ${name}!`;
  };
};
//how to test if your ts works**
export { Greeter};