import prisma from '@/app/libs/prismadb';

export default async function getSlider() {
   try {
      const slide = await prisma.slide.findMany();
      return slide;
   } catch (error: any) {
      throw new Error(error);
   }
}
