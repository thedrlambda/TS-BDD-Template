import { setWorldConstructor } from "cucumber";
import { Application } from "../../src/Application";

class CustomWorld {
  public variable: number;
  private app: Application;

  constructor() {
    this.variable = 0;
    this.app = new Application();
  }

  setTo(number: number) {
    this.variable = number;
  }

  incrementBy(number: number) {
    this.variable = this.app.plus(this.variable, number);
  }
}

setWorldConstructor(CustomWorld);
