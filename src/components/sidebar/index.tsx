'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { divMode } from '@tsparticles/engine';

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName= usePathname();
  return (
    <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center
    flex-col gap-10 py-6 px-2'>
      <div className='flex items-center flex-col justify-content gap-8'>
      <Link className='flex font-bold flex-row'
      href='/'>
        Leios
      </Link>
      <TooltipProvider>
        {menuOptions.map((option) => (
          <div>

          </div>}
      </TooltipProvider>
      </div>
    </nav>
  )
}

export default MenuOptions