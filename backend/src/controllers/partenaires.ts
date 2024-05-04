import { Response, Request } from "express"
import { generateToken, uploadFile } from '../services/services'
import bcrypt from "bcrypt"
import modelPartenaire from "../models/partenaires"

const controllerPartenaire = {
    getAll: async (req: Request, res: Response) => {
        try {
            let data = await modelPartenaire.getAll()

            if (data)
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
        try {
            const id = req.params.id
            let data = await modelPartenaire.getOne(parseInt(id))
            if (data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)

        }
    },
    update: async (req: Request, res: Response) => {
        try {

            let { email, id, number, name, image, price, location, description, password, type, pers_min, pers_max } = req.body
            let find = await modelPartenaire.getByEmail(email)
            if (find) {
                res.status(403).send("This email is already in use")
            }
            else {
                let saltRounds = 10
                bcrypt.hash(password, saltRounds, async function (err: any, hash: any) {
                    if (err) {
                        res.status(403).send("Registration failed")
                    }
                    let data = await modelPartenaire.update(
                        parseInt(id),
                        parseInt(number),
                        name,
                        image,
                        parseFloat(price),
                        location,
                        description,
                        hash,
                        type,
                        email,
                        pers_min, 
                        pers_max
                    )
                    if (data)
                        res.status(200).send(data)
                    else
                        res.status(200).send([])
                })

            }

        } catch (error: any) {
            console.log(error);
            res.status(500).send(error.message)
        }
    },
    create: async (req: Request, res: Response) => {
        let { email, number, name, price, location, description, password, type, pers_min, pers_max } = req.body
        let url_image : any = null
        console.log(email)
        try {
            if(req.files && req.files.image){
                const src = await uploadFile('./images/', req.files.image,req.body.name.replace(' ','_'))
                if(src){
                    url_image = src
                }
            }
            let find = await modelPartenaire.getByEmail(email)
            if (find) {
                res.status(403).send("This email is already in use")
            }
            else {
                let saltRounds = 10
                bcrypt.hash(password, saltRounds, async function (err: any, hash: any) {
                    if (err) {
                        res.status(403).send("Registration failed")
                    }
                    let data = await modelPartenaire.create(
                        parseInt(number),
                        name,
                        url_image,
                        parseFloat(price),
                        location,
                        description,
                        hash,
                        type,
                        email, 
                        parseInt(pers_min), 
                        parseInt(pers_max)
                    )
                    if (data)
                        res.status(200).send(data)
                    else
                        res.status(200).send([])
                })

            }

        } catch (error: any) {
            console.log(error);
            res.status(500).send(error.message)
        }
    },
    getLogin: async (req: Request, res: Response) => {
        let { email, password } = req.body

        try {
            let partenaire = await modelPartenaire.getByEmail(email)
            if(partenaire) {
                let psw = String(partenaire.password)
                bcrypt.compare(password, psw, function(err: any, verified: any){
                    if (err) return res.status(403).send("Incorrect Password");
                    if (verified) {
                        const token = generateToken(partenaire?.id , partenaire?.email);
                        res.send({
                            partenaire,
                            token
                        });
                    }
                    else {
                        res.status(403).send("Incorrect Password")
                    }
                })
            }
            else {
                res.status(500).send("This partenaire doesn't exist")
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    delete : async(req: Request, res: Response)=>{
        try{
            let id = req.body;
            let data = modelPartenaire.delete(parseInt(id))
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }catch(error: any){
            console.log(error);
            res.status(500).send(error.message)
        }
    }
}

export default controllerPartenaire;