import { Prisma, PrismaClient } from "@prisma/client";
import { connect } from "http2";
const prisma = new PrismaClient();

const modelCommands = {
  getAll: async () => {
    return prisma.commands.findMany({
      include: {
        user: true,
        relation: {
          include: {
            partenaire: true
          }
        }
      },
      orderBy: {
        id: "desc"
      }
    });
  },
  getPartner:  async (id: number) => {
    return prisma.commands.findMany({
      include: {
        user: true,
        relation: {
          where: {
            id_partenaire: id
          },
          include: {
            partenaire: true
          }
        }
      },
      orderBy: {
        id: "desc"
      }
    });
  },
  getOne: async (id: number) => {
    return prisma.commands.findUnique({
      where: { id: id },
      include: {
        user: true,
        relation: {
          include: {
            partenaire: true
          }
        }
      },
    });
  },
  create: async (
    date: string,
    totalPrice: number,
    id_user: number,
  ) => {
    console.log(date);
    const beginDate = new Date(date);
    const res = await prisma.commands.create({
      data: {
        beginDate,
        state: false,
        totalPrice,
        user: {
          connect: {
            id: id_user,
          },
        }
      },
    });
    return res;
  },
  delete: async (id : number) => {
    let result = await prisma.commands.delete({
        where: { id: Number(id) },
    })

    return result
},
};

export default modelCommands;