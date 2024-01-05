import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Headless UI' }, { name: 'description', content: 'Welcome to Remix!' }]
}

const Index = () => {
  return (
    <section className='space-y-4 p-4'>
      <h1 className='text-6xl font-bold text-primary hover:underline'>Hello world!</h1>
      <p className='text-2xl text-accent'>Welcome to your new Remix app.</p>
      <p className='text-xl'>
        Lets go for a{' '}
        <ChevronRightIcon className='inline-block size-8 cursor-pointer rounded-full p-1 text-primary hover:text-accent' />{' '}
        !
      </p>
    </section>
  )
}
export default Index
