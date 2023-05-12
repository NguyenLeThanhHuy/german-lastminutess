import prisma from '@/app/libs/prismadb';

export default async function getDuhoc() {
   try {
      const sub = await prisma.duhoc.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
