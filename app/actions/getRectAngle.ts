import prisma from '@/app/libs/prismadb';

export default async function getRectAngle() {
   try {
      const sub = await prisma.rectAngle.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
