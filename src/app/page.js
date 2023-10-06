import Image from 'next/image'
import HeroSection from './Component/HeroSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[hsl(0,0%,7%)] ">
      <div className='container mx-auto py-4 px-12'>
    <HeroSection/>
    </div> 
    </main>
  )
}
