import Image from 'next/image';
import LandIcon from './images/location.png'
import HomeIcon from './images/house.png'
import ApartmentIcon from './images/residential.png'
import CabanaIcon from './images/cabana 1.png'
import ShopsIcon from './images/store 1.png'
import OtherIcon from './images/real-estate 1.png'
import section1Img from './images/Group 172.png'

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./images/bg-img.png')" }}>
        {/* Desktop */}
        <div className=''>
          <ul className="flex gap-5">
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
              <ul className='flex gap-5'>
                <li>
                  <label htmlFor="">Property Type</label> <br />
                  <input type="text" name="" id="" className='bg-white border' />
                </li>
                <li>
                  <label htmlFor="">Location</label> <br />
                  <input type="text" name="" id="" className='bg-white border' />
                </li>
              </ul>
              <ul className='flex gap-5'>
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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center p-6">
          <div className="">
            <h1 className='text-2xl'>Why Investors Choose Luminara First ?</h1>
            <p>At Luminara, we go beyond traditional real estate — we create lifestyle-driven investments that combine lasting value with everyday luxury. With over 15 years of experience and more than 120 successfully completed projects, we’ve earned the trust of investors, homeowners, and communities alike. From stunning cabanas to premium apartments and curated land packages, every project is designed to deliver exceptional returns while enriching the way you live.</p>
            <div className='bg-[#086FB1]'>
              <ul>
                <li>
                  <h1>5+</h1>
                  <p>Years of Excellence</p>
                </li>
                <li>
                  <h1>5+</h1>
                  <p>Years of Excellence</p>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>5+</h1>
                  <p>Years of Excellence</p>
                </li>
                <li>
                  <h1>5+</h1>
                  <p>Years of Excellence</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="flex justify-center p-6">
          <h1 className="text-white text-2xl">
            <Image src={section1Img} alt='' />
          </h1>
        </div>
      </div>
      {/* section 1 */}
    </div>
  );
}
