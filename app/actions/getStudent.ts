import prisma from '@/app/libs/prismadb';

export default async function getStudent() {
   try {
      const sub = await prisma.studen.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
