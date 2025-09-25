"use client";

import { useEffect, useState } from 'react';
import Propertycard from '../components/card';
import axios from 'axios';



function Page() {
  //Post API
  type Post = {
    _id: string | number;
    title: string;
    coverImg: string;
    price: string | number;
    location: string;
    beds: number;
    baths: number;

  };
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/post/")
      .then(res => {
        console.log('API response:', res.data);
        setPost(res.data.realestate);
      })
      .catch(err => console.error(err));
  }, []);





  return (
    <>
      {/* area 1 */}
      <div className="bg-cover bg-center flex items-center justify-center lg:pt-40 pb-40" style={{ backgroundImage: "url('./images/Group 175.png')" }}>
        <div className='container'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold '>Your Trusted Partner in <br /><span className="text-[#086FB1]">Real Estate</span></h1>
            <p className='mt-3'>The real estate landscape is shifting toward greater transparency in agent commissions following a landmark settlement in August 2024. Buyers and sellers now frequently negotiate flat-fee models or opt for rebate services, allowing for significant cost savings—one Seattle couple saved nearly $97,000, and another seller in Arizona saved around $19,000 by listing on their own.MarketWatchWhy it matters: When crafting testimonials, consider highlighting value-focused stories—client</p>
          </div>
        </div>
      </div>
      {/* area 1 */}

      {/* area 2 */}
      <div className='container mx-auto mt-5'>
        <h1 className='text-5xl font-bold text-center'>Begin Your Real Estate Journey Her</h1>
        <div className='mt-5'>
          <form action="">
            <ul className='flex gap-5 justify-center'>
              <li>
                <label htmlFor="">Property Type</label> <br />
                <input type="text" name="" id="" className='bg-white border' />
              </li>
              <li>
                <label htmlFor="">Location</label> <br />
                <input type="text" name="" id="" className='bg-white border' />
              </li>
              <li>
                <label htmlFor="">Property Type</label> <br />
                <input type="text" name="" id="" className='bg-white border' />
              </li>
              <li> <br />
                <button className='bg-blue-500'>Search</button>
              </li>
            </ul>
          </form>
        </div>

        {/* Properties */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
          {Array.isArray(post) &&
            post.map((p) => (
              <div key={p._id}>   {/* 👈 use _id */}
                <Propertycard
                  title={p.title}
                  location={p.location}
                  price={String(p.price)}
                  image={p.coverImg}
                  beds={p.beds}
                  baths={p.baths}
                  link={`/property/${p._id}`}
                />
              </div>
            ))
          };
          {/* Properties */}
        </div>
      </div>
      {/* area 2 */}
    </>
  )
}

export default Page
