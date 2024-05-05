import express from "express"
import { isValid } from "../../midlleware/middleware"
import controllerPartenaire from "../controllers/partenaires";

const routerPartenaire = express.Router();

routerPartenaire.get("/", controllerPartenaire.getAll)
routerPartenaire.get("/:id", controllerPartenaire.getOne)
routerPartenaire.get("/filter/:service/:pers", controllerPartenaire.filter)
routerPartenaire.post("/create", controllerPartenaire.create)
routerPartenaire.post("/login", controllerPartenaire.getLogin)
routerPartenaire.put("/", controllerPartenaire.update)
routerPartenaire.delete("/:id", controllerPartenaire.delete)

routerPartenaire.post("/by-type", controllerPartenaire.getByType)
routerPartenaire.post("/approve", controllerPartenaire.approve)

export default routerPartenaire;