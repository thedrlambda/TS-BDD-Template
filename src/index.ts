import { Application } from "./Application";

let app = new Application();
app.run(process.argv.splice(2));
