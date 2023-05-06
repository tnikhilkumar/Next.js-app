import { dataBlog } from '../dataBlog';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>BLOG APP</title>
      </Head>

      <main className={'max-w-4xl mx-auto pt-16'}>
       <h1 className='text-4xl font-bold'>Blog Posts, t_nikhilkumar</h1>
       {dataBlog.map((post) => (
        <Link href={`/blog/${post.slug}`} passHref>
           <div className='block my-8 border border-white p-4 rounded-lg hover:bg-white hover:text-black '>
          <h2 className='text-2xl font-bold'>{post.title}</h2>
         <p className='mt-2'>
          {post.content.substring(0, 32)}...
         </p>
         </div>  
         
       </Link> 
        ))}
      </main>
    </div>
  )
}
