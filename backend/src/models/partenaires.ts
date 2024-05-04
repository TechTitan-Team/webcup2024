import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const modelPartenaire = {
  getAll: async () => {
    return prisma.partenaires.findMany({
      include: {
        command: {
          include: {
            user: true,
          },
        },
      },
    });
  },
  getByType: async (isValid:boolean) => {
    console.log(isValid)
    return prisma.partenaires.findMany({
      where: {
        isValid: isValid
      }
    });
  },
  getOne: async (id: number) => {
    return prisma.partenaires.findUnique({
      where: { id: id },
      include: {
        command: {
          include: {
            user: true,
          },
        },
      },
    });
  },
  create: async (
    number: number,
    name: string,
    image: string,
    price: number,
    location: string,
    description: string,
    password: string,
    type: string,
    email: string, 
    pers_min: number, 
    pers_max: number
  ) => {
    const res = await prisma.partenaires.create({
      data: {
        number,
        name,
        email,
        image,
        price,
        location,
        description,
        password,
        type,
        pers_min, 
        pers_max
      },
    });
    return res;
  },
  update: async (
    id: number,
    number: number,
    name: string,
    image: string,
    price: number,
    location: string,
    description: string,
    password: any,
    type: string,
    email: string,
    pers_min: number | null, 
    pers_max: number | null
  ) => {
    const res = await prisma.partenaires.update({
      where: { id: id },
      data: {
        number,
        name,
        email,
        image,
        price,
        location,
        description,
        password,
        type,
        pers_min, 
        pers_max
      },
    });
    return res;
  },
  approve: async (
    id: number,
    isValid: boolean
  ) => {
    const res = await prisma.partenaires.update({
      where: { id: id },
      data: {
        isValid
      },
    });
    return res;
  },
  delete: async (id: number) => {
    return await prisma.partenaires.delete({
      where: { id: id },
    });
  },
  getByEmail: async (email: string) => {
    return await prisma.partenaires.findUnique({
      where: { email: String(email) },
    });
  },
};

export default modelPartenaire;
