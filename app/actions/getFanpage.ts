import prisma from '@/app/libs/prismadb';

export default async function getFanpage() {
   try {
      const sub = await prisma.fanPage.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
