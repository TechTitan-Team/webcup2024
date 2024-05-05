import { Response, Request } from "express"
import { generateToken } from '../services/services'
import bcrypt from "bcrypt"
import modelCommands from "../models/commands";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const controllerCommands = {
    getAll: async(req: Request, res: Response) =>{
        try{
            let data = await modelCommands.getAll()
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
            let data = await modelCommands.getOne(parseInt(id))
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
            await modelCommands.create(
                beginDate,
                parseFloat(totalPrice),
                parseInt(id_user),
            ).then(async(data)=>{
                id_partenaire.map(async(items: any)=>{
                    await prisma.relation.create({
                        data:{
                            id_command: data.id,
                            id_partenaire: items.id
                        }
                    })
                })
                res.status(200).send(data)
            })
        }catch(error: any){
            console.log(error);
            res.status(500).send(error.message)
        }
    }
}

export default controllerCommands;