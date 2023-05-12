import prisma from '@/app/libs/prismadb';

export default async function getCategories() {
   try {
      const categories = await prisma.navbar.findMany();
      return categories;
   } catch (error: any) {
      throw new Error(error);
   }
}
