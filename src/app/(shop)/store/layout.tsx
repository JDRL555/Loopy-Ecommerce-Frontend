"use client"

import { useUiStore } from '@/shared/store/ui/ui-store'
import Sidebar from '@/shared/components/ui/Sidebar/Index'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function StoreLayout({ children }: Props) {
  const rotate = useUiStore(state => state.rotate)
  return (
    <section className='flex'>
      <Sidebar />
      <div className={`ml-auto ${rotate ? "w-[97%]" : "w-[80%]"}`}>
        { children }
      </div>
    </section>
  )
}