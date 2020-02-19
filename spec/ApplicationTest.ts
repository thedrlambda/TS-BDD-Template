import { expect } from "chai";
import { Application } from "../src/Application";

let app = new Application();
describe("plus", () => {
  it("should return 4", () => {
    expect(app.plus(1, 3)).to.equal(4);
  });
});
