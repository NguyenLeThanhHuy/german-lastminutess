import { Infor } from '@prisma/client';
import getCategories from './actions/getCategories';
import ClientOnly from './components/ClientOnly';
import Head from './components/Head';
import NavBar from './components/navbar/NavBar';
import './globals.css';
import prisma from '@/app/libs/prismadb';
import getInfo from './actions/getInfo';
import getSlider from './actions/getSlider';

export const metadata = {
   title: 'GERMAN-LASTMINUTEs',
   description: 'Generated by create next app',
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const categories = await getCategories();
   const infor = await getInfo();
   return (
      <html lang="en">
         <body>
            <ClientOnly>
               <Head infor={infor} />
               <NavBar categories={categories} />
            </ClientOnly>
            <div className="">{children}</div>
         </body>
      </html>
   );
}
