import { ValuesController } from "./Controllers/ValuesController.js";

import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  // valuesController = new ValuesController();
  playersController = new PlayersController();
}



window["app"] = new App();
