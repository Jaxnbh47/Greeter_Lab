import { Greeter } from "./Greeter";

class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName = "h1") {
    super(greeting);
    this.tagName = tagName;
  };

  greet(name: string) {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  };
};

export { HtmlGreeter };