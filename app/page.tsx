'use client'

import { Loading } from '@/components/loading-component';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const scrollContainerRef = useRef(null);

  // Scroll animation setup with adjusted offset
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"] // Changed to better track the entire container
  });
  
  // Transform for the cover animation - coming from bottom
  const coverY = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "0%"]
  );
  
  // Opacity for the points on the cover
  const pointsOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    [0, 1]
  );

  // Fade out the fixed content to reveal the scrollable content - adjusted timing
  const fixedContentOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5], // Changed to happen earlier in the scroll
    [1, 0]
  );

  // Fade in the scrollable content - adjusted timing to match fixed content fade out
  const scrollableContentOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5], // Synchronized with fixed content fade out
    [0, 1]
  );

  // Z-index control for fixed and scrollable content
  const fixedContentZIndex = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51], // Switch at the end of the transition
    [10, 10, -1]
  );

  const scrollableContentZIndex = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51], 
    [1, 1, 10]
  );

  return (
    <>
      {/* Step 1: Show Loading Component */}
      <Loading />
      
      {/* Step 2: Main content appears after loading */}
      <div className='relative'>
        {/* Scrollable container for the entire page */}
        <div ref={scrollContainerRef} className="h-[300vh]"> {/* Increased height for more scroll space */}
        <Navbar/>
          {/* Pinned content container - fades out on scroll */}
          <motion.div 
            className="fixed inset-0 bg-background"
            style={{ 
              opacity: fixedContentOpacity,
              zIndex: fixedContentZIndex
            }}
          >
            
            <div className='w-full h-screen flex items-center'>
              {/* Left side content */}
              <div className='w-1/2 flex justify-center'>
                <div>
                  <h1 className='text-7xl font-bold mb-1'>
                    Emanuele Farini 
                  </h1> 
                  <h3 className='text-2xl font-medium text-[#3064AC]'>
                    Mediolevante
                  </h3>
                </div>
              </div>
              
              {/* Right side with image */}
              <div className='relative w-1/2 h-full'>
                <Image
                  src="/Lele.png"
                  alt="Profile Image"
                  layout="fill"
                  objectFit="scale-down"
                  objectPosition="right"
                  className='absolute bottom-0 right-0'
                />
                
                {/* Cover that comes from bottom with points */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-full h-full bg-background flex flex-col justify-center px-8"
                  style={{ 
                    y: coverY
                  }}
                >
                  <motion.div style={{ opacity: pointsOpacity }}>
                    <h2 className="text-3xl font-bold mb-6 text-[#3064AC]">Expertise</h2>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#3064AC] mr-3"></div>
                        <span className="text-xl">Geopolitical Analysis</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#3064AC] mr-3"></div>
                        <span className="text-xl">Strategic Planning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#3064AC] mr-3"></div>
                        <span className="text-xl">International Relations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#3064AC] mr-3"></div>
                        <span className="text-xl">Public Speaking</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </div>           
            </div>
          </motion.div>
          
          {/* Content that appears after scrolling - positioned for proper reveal */}
          <motion.div 
            className="w-full h-full px-8"
            style={{ 
              opacity: scrollableContentOpacity,
              zIndex: scrollableContentZIndex,
              position: 'absolute',
              top: '140vh', // Position it after the first viewport height
              left: 0,
              right: 0
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Chi Sono</h2>
              <p className="text-lg mb-4">
                Mi occupo di analisi geopolitica e sviluppo di relazioni internazionali.
              </p>
              <p className="text-lg mb-4">
                Con un background in scienze politiche e relazioni internazionali, ho maturato esperienza 
                nell'analisi delle dinamiche globali e regionali, con particolare focus sul Mediterraneo 
                e Medio Oriente.
              </p>
              <p className="text-lg mb-8">
                Il mio approccio combina ricerca analitica con competenze strategiche per fornire 
                insight approfonditi sulle complesse realtà politiche contemporanee.
              </p>
              
              <h2 className="text-4xl font-bold mb-6 mt-16">Esperienza</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Mediolevante</h3>
                <p className="text-lg text-[#3064AC]">Analista Senior • 2020 - Presente</p>
                <p className="text-lg mt-2">
                  Coordinamento di progetti di ricerca su dinamiche geopolitiche contemporanee.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Università di Genova</h3>
                <p className="text-lg text-[#3064AC]">Ricercatore • 2018 - 2020</p>
                <p className="text-lg mt-2">
                  Ricerca accademica su politiche internazionali e relazioni diplomatiche.
                </p>
              </div>
              
              {/* Additional content section to ensure there's enough to scroll */}
              <h2 className="text-4xl font-bold mb-6 mt-16">Formazione</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Università di Bologna</h3>
                <p className="text-lg text-[#3064AC]">Laurea Magistrale in Relazioni Internazionali • 2016</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">London School of Economics</h3>
                <p className="text-lg text-[#3064AC]">Master in Global Politics • 2017</p>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 mt-16">Contatti</h2>
              <p className="text-lg mb-2">
                Email: info@emanuelefarini.it
              </p>
              <p className="text-lg mb-2">
                LinkedIn: linkedin.com/in/emanuelefarini
              </p>
              <p className="text-lg mb-24"> {/* Added bottom margin for scrolling space */}
                Twitter: @EmanueleFarini
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}