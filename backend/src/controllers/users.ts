import { Response, Request } from "express"
import { generateToken, uploadFile } from '../services/services'
import bcrypt from "bcrypt"
import model from "../models/users"
import partnerModel from "../models/partenaires"
import commandModel from "../models/commands"

const controller = {
    getAll: async (req: Request, res: Response) => {
        try {
            let data = await model.getAll()

            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getOne: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try { 
            let data = await model.getOne(id)
           
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send({})
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getByEmail:  async (req: Request, res: Response) => {
        let { email } = req.params

        try { 
            let data = await model.getByEmail(email)

            if(data)
                res.status(200).send(data)
            else
                res.status(200).send({})
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    search:  async (req: Request, res: Response) => {
        let { query, id } = req.body

        try { 
            let data = await model.search(String(query), parseInt(id))

            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getLogin: async (req: Request, res: Response) => {
        let { email, password } = req.body

        try {
            let user = await model.getByEmail(email)
            if(user) {
                let psw = String(user.password)
                bcrypt.compare(password, psw, function(err: any, verified: any){
                    if (err) return res.status(403).send("Incorrect Password");
                    if (verified) {
                        const token = generateToken(user?.id , user?.email);
                        res.send({
                            user,
                            token
                        });
                    }
                    else {
                        res.status(403).send("Incorrect Password")
                    }
                })
            }
            else {
                res.status(500).send("This user doesn't exist")
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    create: async (req: Request, res: Response) => {
        let { name, last_name, email, password, type } = req.body
        console.log(email);
        
        let url_image : any= null
        try {
            console.log(req.files);
            
            if(req.files && req.files.pdp){
                const src = await uploadFile('./images/', req.files.pdp,req.body.name.replace(' ','_'))
                if(src){
                    url_image = src
                }
            }
            let find = await model.getByEmail(email)
            if(find) {
                res.status(403).send("This email is already in use")
            }
            else {
                let saltRounds = 10
                bcrypt.hash(password, saltRounds, async function(err: any, hash: any) {
                    if(err){
                        res.status(403).send("Registration failed")
                    }
                    else {
                        let user = await model.create(name,url_image,type, last_name, email, hash)
                        if(user) {
                            let token = generateToken(user.id, user.email)
                            let response  = {
                                user,
                                token
                            }
                            res.status(200).send(response)
                        }
                        else res.status(500).send("Registration failed")
                    }
                })
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    getLoginByEmail: async (req: Request, res: Response) => {
        let { email } = req.body
        try {
            let user = await model.getByEmail(email)
            if(user) {
                const token = generateToken(user?.id , user?.email);
                res.send({
                    user,
                    token
                });
            }
            else {
                res.status(500).send("This user doesn't exist")
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    update: async (req: Request, res: Response) => {
        let { name, last_name, email } = req.body
        let id = parseInt(req.body.id)
        try { 

            let data = await model.update(name, last_name, email, id)
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    delete: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try { 
            let data = await model.delete(id)
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    dashboard: async (req: Request, res: Response) => {
        try { 
            let allUsers = await model.getAll()
            let allPartner = await partnerModel.getByType(true)
            let allDemand = await partnerModel.getByType(false)
            let recentPartner = await partnerModel.getLimit(6)

            let data = {
                users: allUsers.length,
                partner: allPartner.length,
                demand: allDemand.length,
                recentPartner: recentPartner
            }
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
}

export default controller