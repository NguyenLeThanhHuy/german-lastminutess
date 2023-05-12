import prisma from '@/app/libs/prismadb';

export default async function getInfo() {
   try {
      const listings = await prisma.infor.findMany();
      return listings;
   } catch (error: any) {
      throw new Error(error);
   }
}
