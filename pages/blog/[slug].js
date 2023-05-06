import { dataBlog } from "@/dataBlog";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {  
    return {
        paths: dataBlog.map((post) => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false,
    } 
}

export async function getStaticProps({ params }) {
    return {
        props: {
            blogPost: dataBlog.find((post) => post.slug === params.slug)  
        }
    }
}

export default function BlogPostPage({ blogPost }) {
    return (
        <div className={''}>
            <Head>
        <title>{blogPost.title}</title>
      </Head>
      <main className="max-w-4xl mx-auto pt-16">
      <Link href='/' passHref>
        <button className="p-2 rounded-full hover:bg-white hover:text-black border border-white mb-4">
            Back to home
        </button></Link>
        <h1 className='text-4xl font-bold'>{blogPost.title}</h1>
        <p className='text-white'>{blogPost.content}</p> 
        
      </main>
        </div>
    )
}