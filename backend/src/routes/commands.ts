import express from "express"
import { isValid } from "../../midlleware/middleware"
import controllerCommands from "../controllers/commands"

const routerCommands = express.Router()

routerCommands.get("/", controllerCommands.getAll)
routerCommands.get("/partner/:id", controllerCommands.getPartner)
routerCommands.get("/:id", controllerCommands.getOne)
routerCommands.post("/create", controllerCommands.create)
routerCommands.delete("/:id", controllerCommands.delete)

export default routerCommands;