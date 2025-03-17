'use client'

import { useState, useRef, useEffect } from 'react';
import { motion } from "motion/react";
import { ThemeToggle } from './theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';


export function Navbar() {
    
  const pathname = usePathname();
  const [navLinkRects, setNavLinkRects] = useState<DOMRect[]>([]);
  const navLinksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const sections = [
    { name: 'Home', isAnchor: false, path: '/' },
    { name: 'Curriculum', isAnchor: false, path: '/curriculum' }
  ];
  
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // Update link positions when necessary
  useEffect(() => {
    if (navLinksRef.current.length > 0) {
      const rects = navLinksRef.current
        .filter(Boolean)
        .map(link => link!.getBoundingClientRect());
      setNavLinkRects(rects);
    }
  }, []);

return (  
    <nav className="sticky top-0 flex w-full h-auto p-4 justify-center bg-background z-50 border-b-[1px] border-muted">
      <div className="hidden md:flex relative">
        {sections.map((section, index) => (
          <a
            key={index}
            ref={el => {
              navLinksRef.current[index] = el;
              return undefined;
            }}
            href={section.isAnchor ? `#${section.name.toLowerCase().replace(' ', '-')}` : section.path}
            className={cn("relative text-md px-4 py-2 text-muted-foreground hover:text-foreground transition-colors",
              section.name === 'Curriculum' ? 'w-24 px-2' : 'w-20')}
            onMouseEnter={() => setActiveTab(index)}
            onMouseLeave={() => setActiveTab(null)}
          >
            {section.name}
          </a>
        ))}
        {activeTab !== null && navLinkRects[activeTab] && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-[#3064AC]"
            layoutId="underline"
            initial={false}
            animate={{
              width: navLinkRects[activeTab].width,
              x: navLinkRects[activeTab].left - navLinkRects[0].left
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
        )}
      </div>
    <Sheet>
      <SheetTrigger asChild className='md:hidden'>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle 
          className='mt-6'
          >
            Emanuele Farini X Mediolevante</SheetTitle>
          <SheetDescription className=''>
            Vogliamo mettere qualcosa qui?
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 p-4">
        {sections.map((section, index) => (
          <a
          key={index}
          href={section.isAnchor ? `#${section.name.toLowerCase().replace(' ', '-')}` : section.path}
          className={cn("p-2",
          pathname === section.path ? 'bg-slate-100 rounded-full' : 'text-muted-foreground')}
          >
            {section.name}
          </a>
        ))}
        </div>
      </SheetContent>
    </Sheet>
      <ThemeToggle className='ml-auto'/>
    </nav>
    )
}