"use client";

import { useEffect, useState } from 'react';
import Propertycard from '../components/card';
import axios from 'axios';

type Post = {
  _id: string | number;
  title: string;
  coverImg: string;
  price: string | number;
  location: string;
  beds: number;
  baths: number;
};

function Page() {
  const [post, setPost] = useState<Post[]>([]);
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [filtered, setFiltered] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/post`)
      .then((res) => {
        setPost(res.data.realestate);
        setFiltered(res.data.realestate);
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle Search click
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    let result = post;

    if (category) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (district) {
      result = result.filter(
        (p) => p.location.toLowerCase() === district.toLowerCase()
      );
    }

    if (priceRange) {
      const [min, max] = (() => {
        switch (priceRange) {
          case "0-5m":
            return [0, 5_000_000];
          case "5m-10m":
            return [5_000_000, 10_000_000];
          case "10m-20m":
            return [10_000_000, 20_000_000];
          case "20m-50m":
            return [20_000_000, 50_000_000];
          case "50m-100m":
            return [50_000_000, 100_000_000];
          case "100m+":
            return [100_000_000, Infinity];
          default:
            return [0, Infinity];
        }
      })();

      result = result.filter(
        (p) => Number(p.price) >= min && Number(p.price) <= max
      );
    }

    setFiltered(result);
  };

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
          <form onSubmit={handleSearch}>
            <div className="mt-6 bg-white/60 backdrop-blur-md border border-white/30 p-5 rounded">
              <ul className="flex gap-5 flex-wrap justify-center">
                <li>
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-[#464545] mb-1 text-center"
                  >
                    Real Estate
                  </label>
                  <select
                    id="RealEstate"
                    name="RealEstate"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-75 rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="Lands">Lands</option>
                    <option value="Homes">Homes</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Cabanas">Cabanas</option>
                    <option value="Shops">Shops</option>
                    <option value="Others">Others</option>
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
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-75 rounded-lg border border-[#464545]/40 bg-white px-3 py-2 text-[#464545] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#464545] focus:border-[#464545] transition-colors duration-200 hover:border-[#464545] appearance-none"
                  >
                    <option value="">Select District</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambanthota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kaluthara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunagala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Rathnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Vavuniya">Vavuniya</option>
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
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
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
                  <button type='submit' className="bg-[#086FB1] text-white py-2 px-15 rounded hover:bg-[#087cc7] transition ">
                    Search
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>

        {/* Properties */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
          {filtered.map((p) => (
            <div key={p._id}>  
              <Propertycard
                title={p.title}
                location={p.location}
                price={String(p.price)}
                image={p.coverImg}
                beds={p.beds}
                baths={p.baths}
                link={`/PropertyHome/${p._id}`}
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
