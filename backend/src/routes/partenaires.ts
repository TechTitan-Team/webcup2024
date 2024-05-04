import express from "express"
import { isValid } from "../../midlleware/middleware"
import controllerPartenaire from "../controllers/partenaires";

const routerPartenaire = express.Router();

routerPartenaire.get("/", controllerPartenaire.getAll)
routerPartenaire.get("/:id", controllerPartenaire.getOne)
routerPartenaire.get("/filter/:service/:pers_max/:pers_min/:location", controllerPartenaire.filter)
routerPartenaire.post("/create", controllerPartenaire.create)
routerPartenaire.post("/", controllerPartenaire.getLogin)
routerPartenaire.put("/", controllerPartenaire.update)
routerPartenaire.delete("/", controllerPartenaire.delete)

export default routerPartenaire;