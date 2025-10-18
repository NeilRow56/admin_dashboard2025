import React from 'react'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className='bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-md'>
      <div className='container flex h-14 items-center justify-end'>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}
