import prisma from '@/app/libs/prismadb';

export default async function getCopyRight() {
   try {
      const sub = await prisma.copyRight.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
