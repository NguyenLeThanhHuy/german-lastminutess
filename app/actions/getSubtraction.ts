import prisma from '@/app/libs/prismadb';

export default async function getSub() {
   try {
      const sub = await prisma.subtraction.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
