import prisma from '@/app/libs/prismadb';

export default async function getCourse() {
   try {
      const sub = await prisma.course.findMany();
      return sub;
   } catch (error: any) {
      throw new Error(error);
   }
}
