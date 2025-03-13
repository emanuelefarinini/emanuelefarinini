'use client'

import { useRef} from 'react';
import { TextRoll } from '@/components/motion-primitives/text-roll';
import { TextShimmer } from './motion-primitives/text-shimmer';
import { motion } from 'motion/react';

export function Loading() {
  const ref = useRef(null);


  return (
    <>
      {/* Overlay that transitions out */}
      <motion.div 
        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ 
          y: '-100vh', 
          opacity: 0,
        }}
        transition={{ 
          delay: 4,
          duration: 2,
          ease: 'easeInOut'
        }}
      >
        <div className='relative flex flex-col md:flex-row w-full items-center justify-center p-8 gap-4 md:gap-4' ref={ref}>
          <TextShimmer className='font-mono text-4xl' duration={2} spread={5}>
            Emanuele Farini
          </TextShimmer>
          <span className=' text-9xl text-[#3064AC] mb-2'>X</span>
          <TextShimmer className='font-mono text-4xl' duration={2} spread={5}>
            Mediolevante
          </TextShimmer>
          
        </div>
      </motion.div>
    </>
  );
}