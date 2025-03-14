'use client'

import { useRef, useState, use } from 'react';
import { motion } from "motion/react";
import { ThemeToggle } from './theme-toggle';


export function Navbar() {
    
const sections = ['Chi sono', 'Carriera', 'Agenda', 'Contatti'];
const [activeTab, setActiveTab] = useState<number | null>(null);


return (  
    <nav className="sticky top-0 flex w-full h-auto p-4 justify-center bg-background z-10 border-b-[1px] border-muted">
      <div className="relative flex">
        {sections.map((section, index) => (
          <a
            key={index}
            id="nav-link"
            href={`#${section.toLowerCase().replace(' ', '-')}`}
            className="relative text-md px-4 py-2 text-muted-foreground hover:text-foreground transition-colors w-24"
            onMouseEnter={() => setActiveTab(index)}
            onMouseLeave={() => setActiveTab(null)}
          >
            {section}
          </a>
        ))}
          <a
            key={4}
            id="nav-link"
            href={'/curriculum'}
            className="relative text-md px-4 py-2 text-muted-foreground hover:text-foreground transition-colors w-24"
            onMouseEnter={() => setActiveTab(4)}
            onMouseLeave={() => setActiveTab(null)}
          >
            Curriculum
          </a>
        {activeTab !== null && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-muted-foreground"
            layoutId="underline"
            initial={false}
            animate={{
              width: document.getElementById('nav-link')!.offsetWidth,
              x: activeTab * document.getElementById('nav-link')!.offsetWidth!,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
        )}
      </div>
      <ThemeToggle className='ml-auto'/>
    </nav>
    )
}