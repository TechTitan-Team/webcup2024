import { Response, Request } from "express"
import { generateToken } from '../services/services'
import bcrypt from "bcrypt"
import modelCommands from "../models/commands";

const controllerCommands = {
    getAll: async(req: Request, res: Response) =>{
        try{
            let data = modelCommands.getAll()
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }catch(error: any){
            console.log(error);
            res.status(500).send(error.message)
        }
    },
    getOne: async(req: Request, res: Response)=>{
        try{
            let id = req.params.id
            let data = modelCommands.getOne(parseInt(id))
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }catch(error: any){
            console.log(error);
            res.status(500).send(error.message)
        }
    },
    create: async(req: Request, res: Response)=>{
        try{
            let {beginDate, totalPrice, id_user, id_partenaire} = req.body;
            let data = modelCommands.create(
                beginDate,
                parseFloat(totalPrice),
                parseInt(id_user),
                parseInt(id_partenaire)
            )
            if(data)
                {console.log(data);
                
                res.status(200).send(data)}
            else
                res.status(404).send([])
        }catch(error: any){
            console.log(error);
            res.status(500).send(error.message)
        }
    }
}

export default controllerCommands;