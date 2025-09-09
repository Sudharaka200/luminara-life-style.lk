import Image from 'next/image';
import LandIcon from './images/location.png'
import HomeIcon from './images/house.png'
import ApartmentIcon from './images/residential.png'
import CabanaIcon from './images/cabana 1.png'
import ShopsIcon from './images/store 1.png'
import OtherIcon from './images/real-estate 1.png'
import section1Img from './images/Group 172.png'
import CategorySwiper from './components/categorySwiper';
import Propertycard from './components/card'

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('./images/bg-img.png')" }}>
        {/* Desktop */}
        <div className='bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 w-full max-w-4xl'>
          <ul className="flex gap-5 flex-wrap justify-center">
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Homes</p>
                <Image src={HomeIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Apartments</p>
                <Image src={ApartmentIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Cabana</p>
                <Image src={CabanaIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Shops</p>
                <Image src={ShopsIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Others</p>
                <Image src={OtherIcon} alt='Land Icon' />
              </div>
            </li>
          </ul>
          <div>
            <form action="">
              <ul className='flex gap-5 flex-wrap justify-center'>
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
        </div>
      </div>
      {/* section 1 */}
      <div className='container mx-auto p-4'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center ">
            <div className="">
              <h1 className='text-2xl'>Why Investors Choose Luminara First ?</h1>
              <p>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>
              <div className='bg-[#086FB1] rounded-md mt-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>5+</h1>
                    <p className='text-white'>Years of Excellence</p>
                  </div>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>120+</h1>
                    <p className='text-white'>Projects Completed</p>
                  </div>
                  <div>

                    {/* section 2 */}       <h1 className='text-5xl font-bold text-white'>5K+</h1>
                    <p className='text-white'>Happy Investors</p>
                  </div>
                  <div>
                    <h1 className='text-5xl font-bold text-white'>10+</h1>
                    <p className='text-white'>Premium Locations Covered</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center p-6">
            <h1 className="text-white text-2xl">
              <Image src={section1Img} alt='' />
            </h1>
          </div>
        </div>
      </div>
      {/* section 1 */}

      {/* section 2 */}
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl'>Featured Residences</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever </p>
      </div>
      <CategorySwiper />

      {/* Section 3 */}
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl'>Our Popular Residence</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever </p>
        <div>
          <ul className="flex gap-5 ">
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Homes</p>
                <Image src={HomeIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Apartments</p>
                <Image src={ApartmentIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Cabana</p>
                <Image src={CabanaIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Shops</p>
                <Image src={ShopsIcon} alt='Land Icon' />
              </div>
            </li>
            <li>
              <div className='border p-3 '>
                <p>Others</p>
                <Image src={OtherIcon} alt='Land Icon' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <Propertycard
          title="EXPRESS FIVE - MATTEGODA"
          location="Borella"
          price="39,500,000"
          image="/images/Rectangle 103.png"
          beds={3}
          baths={1}
          link="/property/express-five"
        />
        <Propertycard
          title="EXPRESS FIVE - MATTEGODA"
          location="Borella"
          price="39,500,000"
          image="/images/Rectangle 103.png"
          beds={3}
          baths={1}
          link="/property/express-five"
        />
        <Propertycard
          title="EXPRESS FIVE - MATTEGODA"
          location="Borella"
          price="39,500,000"
          image="/images/Rectangle 103.png"
          beds={3}
          baths={1}
          link="/property/express-five"
        />
        <Propertycard
          title="EXPRESS FIVE - MATTEGODA"
          location="Borella"
          price="39,500,000"
          image="/images/Rectangle 103.png"
          beds={3}
          baths={1}
          link="/property/express-five"
        />
      </div>
      {/* Section 3 */}
    </div>
  );
}
