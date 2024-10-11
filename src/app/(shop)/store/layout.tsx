import Header from '@/shared/components/ui/Header/Index'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function StoreLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
    </>
  )
}