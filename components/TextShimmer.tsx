'use client'

import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { TextShimmer } from '@/components/motion-primitives/text-shimmer'
import { AnimatedNumber } from '@/components/motion-primitives/animated-number';
import { TextRoll } from '@/components/motion-primitives/text-roll';


export  function Loading() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(100);
  }
  return (
    <div className='flex flex-col w-full items-center justify-center' ref={ref}>
    {/* <AnimatedNumber
      className='inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50'
      springOptions={{
        bounce: 0,
        duration: 5000,
      }}
      value={value}
    /> */}
        <TextRoll
      className='text-4xl text-black dark:text-white'
      variants={{
        enter: {
          initial: { rotateX: 0, filter: 'blur(0px)' },
          animate: { rotateX: 90, filter: 'blur(2px)' },
        },
        exit: {
          initial: { rotateX: 90, filter: 'blur(2px)' },
          animate: { rotateX: 0, filter: 'blur(0px)' },
        },
      }}
    >
    Emanuele Farini X Mediolevante
    </TextRoll>
  </div>
    
  );
}
