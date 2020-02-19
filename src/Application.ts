export class Application {
  constructor() {}

  plus(a: number, b: number) {
    return a + b;
  }

  run(args: string[]) {
    console.log(this.plus(+args[0], +args[1]));
  }
}
