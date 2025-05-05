
import BlogCards from '@/components/blogcards'
import axios from 'axios'
import React from 'react'
import Loading from './loading'
import { getBlogs } from '@/lib/functions'

const Blogs = async () => {

    const data =await getBlogs();
    return (
       <div className='container mx-auto main_section'>
         <div className='px-2 md:px-20'>
         <h2 className="text-2xl md:text-3xl font-bold uppercase">Blogs</h2>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                
                {/* <Suspense fallback={<Loading />}> */}
                    {data?.map((item, index) => (
                        <div key={index} className='mx-auto'>
                            <BlogCards item={item} />
                        </div>
                    ))}
                {/* </Suspense> */}
            </div>
        </div>
       </div>
    )
}

export default Blogs