"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export function ThemeToggle({className}:{className?: string}) {
  const { setTheme } = useTheme();

  return (
    
    <div className={cn("bg-muted flex items-center w-fit md:w-auto border-slate-200 rounded-full p-[2px]", className)}>
      <Button size={'sm'} variant={'ghost'} onClick={() => setTheme("light")} className="group rounded-full bg-white dark:bg-transparent hover:bg-white">
        <Sun className="h-[0.8rem] w-[0.8rem] rotate-0 scale-100 dark:-rotate-90  dark:text-muted-foreground/50 transform-gpu duration-500 transition-transition ease-linear" />
      </Button>
      <Button size={'sm'} variant={'ghost'} onClick={() => setTheme("dark")} className="group rounded-full dark:bg-black ">
        <Moon className="h-[0.8rem] w-[0.8rem] rotate-90  dark:rotate-0 dark:scale-100 text-muted-foreground/50 dark:text-white transform-gpu duration-500 transition-transition ease-linear" />
      </Button>
    </div>
       
  );
}