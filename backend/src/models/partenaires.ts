import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const modelPartenaire = {
    getAll: () => {
        return prisma.partenaires.findMany({
            include:{
                command: {
                    include: {
                        user: true
                    }
                }
            }
        })
    },
    getOne: (id: number) =>{
        return prisma.partenaires.findUnique({
            where:{id: id},
            include:{
                command: {
                    include: {
                        user: true
                    }
                }
            }
        })
    },
    create: async(
        number: number,
        name: string,
        image: string,
        price: number,
        location: string,
        description: string,
        password: string,
        type: string,
        email: string
        ) =>{
            const res = await prisma.partenaires.create({
                data:{
                    number,
                    name,
                    email,
                    image,
                    price,
                    location,
                    description,
                    password,
                    type,
                }
            })
            return res
        },
    update: async(
        id: number,
        number: number,
        name: string,
        image: string,
        price: number,
        location: string,
        description: string,
        password: string,
        type: string,
        email: string
        ) =>{
            const res = await prisma.partenaires.update({
                where:{id: id},
                data:{
                    number,
                    name,
                    email,
                    image,
                    price,
                    location,
                    description,
                    password,
                    type,
                }
            })
            return res
        },
        delete: (id: number)=>{
            return prisma.partenaires.delete({
                where:{id: id}
            })
        },
        getByEmail: (email: string)=>{
            return prisma.partenaires.findUnique({
                where: {email: email}
            })
        }
}

export default modelPartenaire;