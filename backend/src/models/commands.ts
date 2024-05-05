import { Prisma, PrismaClient } from "@prisma/client";
import { connect } from "http2";
const prisma = new PrismaClient();

const modelCommands = {
  getAll: async () => {
    return prisma.commands.findMany({
      include: {
        user: true,
        relation: true
      },
    });
  },
  getOne: async (id: number) => {
    return prisma.commands.findUnique({
      where: { id: id },
      include: {
        user: true,
        relation: true,
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
};

export default modelCommands;