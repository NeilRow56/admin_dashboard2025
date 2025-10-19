import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'

export function AdBanner() {
  return (
    <Card className='h-[400px] overflow-hidden lg:h-[200px]'>
      <Link href='/' className='block h-full'>
        <CardContent className='flex h-full flex-col items-center p-0 lg:flex-row'>
          <div className='relative h-full w-1/2'>
            <Image
              className='mx-auto flex'
              src='/logo.png'
              alt='Mobile App Logo'
              height={200}
              width={200}
              objectFit='cover'
            />
          </div>
          <div className='w-1/2 p-4'>
            <CardTitle>Download Our App!</CardTitle>
            <CardDescription>
              Get your analytics anywhere you go.
            </CardDescription>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
