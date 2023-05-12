import prisma from '@/app/libs/prismadb';

export default async function getLogo() {
   try {
      const logo = await prisma.logo.findMany();
      return logo;
   } catch (error: any) {
      throw new Error(error);
   }
}
