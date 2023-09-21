import Auth from '@/components/Auth'
import Nav from '../components/Nav/page'

export default function Home() {
  return (
    <main className='w-full h-screen'>
      <Nav />
      <Auth />
    </main>
  )
}
