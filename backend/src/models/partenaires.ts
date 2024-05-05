import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const modelPartenaire = {
  getAll: async () => {
    return prisma.partenaires.findMany({
      include: {
        relation: {
          include: {
            commands: true,
          },
        },
      },
    });
  },
  getLimit: async (limit: number) => {
    return prisma.partenaires.findMany({
      take: limit,
      orderBy: {
        id: "desc"
      }
    });
  },
  getByType: async (isValid:boolean) => {
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
        relation: {
          include: {
            commands: true,
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
    filter: (service: string, pers: number, location: string | undefined) => {
        let whereCondition: Prisma.partenairesWhereInput = {
            type: service,
            AND:[
              {
                pers_min: {
                  lte: pers
              }
              },
            {
              pers_max: {
                gte: pers
            }
            }
            ]
        };
    
        if (location !== 'undefined') {
            console.log(location);
            
            whereCondition = {
                ...whereCondition,
                location: location
            };
        }
    
        return prisma.partenaires.findMany({
            where: whereCondition,
            include: {
                relation: {
                    include: {
                        commands: true
                    }
                }
            }
        });
    }
};

export default modelPartenaire;
