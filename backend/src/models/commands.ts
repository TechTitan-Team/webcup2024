import { Prisma, PrismaClient } from '@prisma/client'
import { connect } from 'http2'
const prisma = new PrismaClient()

const modelCommands = {
    getAll: ()=>{
        return prisma.commands.findMany({
            include:{
                user: true,
                partenaire: true
            }
        })
    },
    getOne: (id: number)=>{
        return prisma.commands.findUnique({
            where:{id:id},
            include:{
                user: true,
                partenaire: true
            }
        })
    },
    create: async(
        date: string,
        totalPrice: number,
        id_user: number,
        id_partenaire: number
    ) =>{
        console.log(date);
        const beginDate = new Date(date)
        const res = await prisma.commands.create({
            data:{
                beginDate,   
                state: false,
                totalPrice,
                user: {
                    connect: {
                        id: id_user
                    } 
                },
                partenaire: {
                    connect: {
                        id: id_partenaire
                    }
                }
            }
        })
        return res
    },
}

export default modelCommands;