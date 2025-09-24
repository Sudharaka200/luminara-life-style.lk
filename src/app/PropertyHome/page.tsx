"use client"
import CoverImg from '@/../public/images/Rectangle 109.png'
import Image from 'next/image'
import ProfileImg from '@/../public/images/Rectangle 183.png'
import { MapPin, Bed, Bath } from "lucide-react";
import CarosalHome from '../components/carosalHome';
import GridImg1 from '@/../public/images/Rectangle 193.png'
import GridImg2 from '@/../public/images/Rectangle 195.png'
import Propertycard from '../components/card'

const myImages = [
  "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  "https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/57134553-0077-4e93-8cfd-58895d271ef8/homeowners-insurance-facebook.jpg",
  "https://www.thebraggingmommy.com/wp-content/uploads/2020/06/house-home-real-estate-1100x728.png",
  "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  "https://www.thebraggingmommy.com/wp-content/uploads/2020/06/house-home-real-estate-1100x728.png",
  "https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/57134553-0077-4e93-8cfd-58895d271ef8/homeowners-insurance-facebook.jpg",
  "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jZucxO0YhsnXc3qJ_MVbuG0Mb5wItI-2Jw&s",
  "https://www.tasteofhome.com/wp-content/uploads/2022/02/GettyImages-175259322-scaled-e1644008212418.jpg",
  "https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/57134553-0077-4e93-8cfd-58895d271ef8/homeowners-insurance-facebook.jpg",
  "https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/57134553-0077-4e93-8cfd-58895d271ef8/homeowners-insurance-facebook.jpg",
  "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jZucxO0YhsnXc3qJ_MVbuG0Mb5wItI-2Jw&s",
  "https://www.tasteofhome.com/wp-content/uploads/2022/02/GettyImages-175259322-scaled-e1644008212418.jpg",
];

function page() {
    return (
        <>
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
                <Image
                    src={CoverImg}
                    alt="section3"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className='container mx-auto'>
                <Image src={ProfileImg} alt='' />
                <h1 className='text-2xl font-bold'>Gampaha - Elemint Suites</h1>
                <div className='flex gap2'>
                    <MapPin size={16} className="mr-1" />
                    <p className=''>Gampaha</p>
                </div>
                  <div className='w-full'>
                    <CarosalHome images={myImages} />
                  </div>
            </div>

            <div className='container mx-auto'>
                <div className='flex'>
                    <h1>27,200,000 </h1>
                    <h1> LKR</h1>
                </div>
                <p>PER UNIT UPWARDS</p>
                <p>Welcome to Elemint Suites by Prime Lands an exquisite housing project nestled in the heart of Gampaha. With a captivating scenic lake view. Our project offers a collection of six types of individual houses ranging from single-story to two-story designed to cater to your every need. Choose from our 2 or 3-bedroom houses each thoughtfully crafted to provide a comfortable and modern living experience, with sizes ranging from 855 square feet to 1974 square feet.Welcome to Elemint Suites by Prime Lands an exquisite housing project nestled in the heart of Gampaha. With a captivating scenic lake view. Our project offers a collection of six types of individual houses ranging from single-story to two-story designed to cater to your every need. Choose from our 2 or 3-bedroom houses each thoughtfully crafted to provide a comfortable and modern living experience, with sizes ranging from 855 square feet to 1974 square feet.Welcome to Elemint Suites by Prime Lands an exquisite housing project nestled in the heart of Gampaha. With a captivating scenic lake view. Our project offers a collection of six types of individual houses ranging from single-story to two-story designed to cater to your every need. Choose from our 2 or 3-bedroom houses each thoughtfully crafted to provide a comfortable and modern living experience, with sizes ranging from 855 square feet to 1974 square feet.</p>
                <ul>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                    <li>Scenic Lake View</li>
                </ul>

                <button>Schedule Free Consultation</button>
            </div>

            <div className='container mx-auto'>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-150"
                    ></iframe>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <Image src={GridImg1} alt='GridImg' />
                        </div>
                        <div>
                            <Image src={GridImg2} alt='' />
                        </div>
                    </div>

                    <div className="w-full h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.52423162401!2d79.8612432!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595d01f52dfb%3A0x8a82a5f5ff2fbea!2sColombo!5e0!3m2!1sen!2slk!4v1694836922337!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <h1>Recomomned</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
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
            </div>  
        </>
    )
}

export default page
