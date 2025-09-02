import Image from 'next/image';
import LandIcon from './images/location.png'

export default function Home() {
  return (
    <div className="">
      <div>a
        {/* Desktop */}
        <div>
          <ul className="flex gap-5">
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            <li>
              <div className='border p-3 '>
                <p>Lands</p>
                <Image src={LandIcon} alt='Land Icon'/>
              </div> 
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
