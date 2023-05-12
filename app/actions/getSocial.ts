import prisma from '@/app/libs/prismadb';

export default async function getSocials() {
   try {
      const sub = await prisma.social.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
