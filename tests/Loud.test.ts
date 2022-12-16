import { LoudGreeter } from "../src/Loud";

describe('LoudGreeter', () => {
  let loudGreeter: LoudGreeter;

  beforeEach(() => {
    loudGreeter = new LoudGreeter('Grant');
  });

  test('greet without calling addVolume', () => {
    let greeter = new LoudGreeter('Hello')
    expect(greeter.greet("Jackson")).toEqual('Hello, Jackson!!');
  });

  test('greet after calling addVolume once', () => {
    let greeter = new LoudGreeter('Hello')
    greeter.addVolume();
    expect(greeter.greet("Jackson")).toEqual('Hello, Jackson!!!');
  });

  test('greet after calling addVolume multiple times', () => {
    let greeter = new LoudGreeter('Hello')
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Jackson")).toEqual('Hello, Jackson!!!!!');
  });
});