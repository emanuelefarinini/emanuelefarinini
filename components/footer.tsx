'use client'
import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/emanuelefarinini/' : '';
export function Footer() {
  return (
    <footer className="bg-[#3064AC] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Bottom links */}
        <div className="  border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          {/* Right side - Credits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-2 md:flex md:flex-row gap-2 justify-between items-start md:items-center"
          >
                <span className='flex flex-col gap-2 text-sm'>© 2025 Farinini X Genova. <p>Tutti i diritti riservati.</p></span>
                <div className='flex flex-row flex-wrap gap-1 text-sm '>
                    <p className='inline-block '>
                    Committente: Emanuele Farinini
                    </p>
                </div>
                
                <div className="hidden md:flex space-x-4">
                    <a href="https://www.linkedin.com/in/emanuele-farinini-609a0a147/" className="hover:text-gray-200 transition">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedinIn className="h-6 w-6"/>
                    </a>
                </div>
                <div className="md:hidden flex flex-row items-center space-x-4 w-full justify-between col-span-2">
                  <div className="sticky h-12 w-12 md:h-12 md:w-12 rounded-full shadow-lg ">
                      <Image
                        src={`${basePath}/Bucci-NM.png`} // Ensure correct path
                        alt="Orgoglio Liguria"
                        fill
                        className="rounded-full object-fill ml-auto"
                      />
                    </div>
                    <a href="https://www.linkedin.com/in/emanuele-farinini-609a0a147/" className="hover:text-gray-200 transition">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedinIn className="h-6 w-6"/>
                    </a>
                    
                </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
