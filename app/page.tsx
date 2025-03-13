'use client'

import { Loading } from '@/components/loading-component';
import { motion, useTransform, useScroll } from 'motion/react';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';

export default function Home() {


  return (
    <>
      {/* Animazione */}
      <Loading />
      
      {/* La pagina in se ritardata di 5 secondi per l'animazione entrante */}
      <motion.div
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ 
        delay: 5,
        duration: 2,
        ease: 'easeInOut'
      }}
      
    >
       <section className='w-screen h-screen bg-background'>
        <Navbar/>
          <div className='w-full h-full flex items-center'>
            <div className='w-full flex justify-end'>
              <span>
                <h1 className='text-7xl font-semibold mb-1'>
                  Emanuele Farini 
                </h1> 
                <h3 className='text-2xl font-semibold text-[#3064AC]'>
                  Mediolevante
                </h3>
              </span>
            </div>
            <div className='relative w-full h-full'>
              <Image
                src="/Lele.png"
                alt="Emanuele Farini"
                // height={500}
                // width={500}
                layout="fill"
                objectFit="scale-down"
                objectPosition="right"
                className='absolute bottom-0 right-0 z-50'
              />
            </div>           
          </div>
          
      </section>
    </motion.div>
    </>
  );
}