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
  
    //Realestate get all Post
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/post`)
      .then(res => {
        console.log('API response:', res.data);
        setPost(res.data.realestate);
      })
      .catch(err => console.error(err));

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/news`)

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
            <div className="mt-6 bg-white/60 backdrop-blur-md border border-white/30 p-5 rounded">
                        <ul className="flex gap-5 flex-wrap justify-center">
                          <li>
                                <label
                                    htmlFor="district"
                                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                                >
                                    Location
                                </label>
                                <select
                                    id="district"
                                    name="district"
                                    className="w-75 rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                                >
                                    <option value="">Select District</option>
                                    <option>Ampara</option>
                                    <option>Anuradhapura</option>
                                    <option>Badulla</option>
                                    <option>Batticaloa</option>
                                    <option>Colombo</option>
                                    <option>Galle</option>
                                    <option>Gampaha</option>
                                    <option>Hambantota</option>
                                    <option>Jaffna</option>
                                    <option>Kalutara</option>
                                    <option>Kandy</option>
                                    <option>Kegalle</option>
                                    <option>Kilinochchi</option>
                                    <option>Kurunegala</option>
                                    <option>Mannar</option>
                                    <option>Matale</option>
                                    <option>Matara</option>
                                    <option>Monaragala</option>
                                    <option>Mullaitivu</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Polonnaruwa</option>
                                    <option>Puttalam</option>
                                    <option>Ratnapura</option>
                                    <option>Trincomalee</option>
                                    <option>Vavuniya</option>
                                </select>
                            </li>
                            <li>
                                <label
                                    htmlFor="district"
                                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                                >
                                    Location
                                </label>
                                <select
                                    id="district"
                                    name="district"
                                    className="w-75 rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                                >
                                    <option value="">Select District</option>
                                    <option>Ampara</option>
                                    <option>Anuradhapura</option>
                                    <option>Badulla</option>
                                    <option>Batticaloa</option>
                                    <option>Colombo</option>
                                    <option>Galle</option>
                                    <option>Gampaha</option>
                                    <option>Hambantota</option>
                                    <option>Jaffna</option>
                                    <option>Kalutara</option>
                                    <option>Kandy</option>
                                    <option>Kegalle</option>
                                    <option>Kilinochchi</option>
                                    <option>Kurunegala</option>
                                    <option>Mannar</option>
                                    <option>Matale</option>
                                    <option>Matara</option>
                                    <option>Monaragala</option>
                                    <option>Mullaitivu</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Polonnaruwa</option>
                                    <option>Puttalam</option>
                                    <option>Ratnapura</option>
                                    <option>Trincomalee</option>
                                    <option>Vavuniya</option>
                                </select>
                            </li>


                            <li>
                                <label
                                    htmlFor="priceRange"
                                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                                >
                                    Price Range
                                </label>
                                <select
                                    id="priceRange"
                                    name="priceRange"
                                    className="w-full rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                                >
                                    <option value="">Select Price Range</option>
                                    <option value="0-5m">Under Rs. 5 Million</option>
                                    <option value="5m-10m">Rs. 5 – 10 Million</option>
                                    <option value="10m-20m">Rs. 10 – 20 Million</option>
                                    <option value="20m-50m">Rs. 20 – 50 Million</option>
                                    <option value="50m-100m">Rs. 50 – 100 Million</option>
                                    <option value="100m+">Over Rs. 100 Million</option>
                                </select>
                            </li>

                            <li className="flex items-center mt-4">
                                <button className="bg-[#086FB1] text-white py-2 px-15 rounded hover:bg-[#087cc7] transition ">
                                    Search
                                </button>
                            </li>
                        </ul>
                    </div>
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
