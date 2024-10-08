import Button from '@/components/button';
import Image from 'next/image';
import DeviceImg from '@/assets/images/device.png';

import { statistics } from '@/libs/constants';

export default function Hero() {
  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-20">
        
        <h1 className="mt-10 font-palanquin text-8xl max-md:text-[62px] max-md:leading-[70px] font-bold">
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-md:text-[48px] max-md:leading-[50px]'>Revolutionizing</span>
          <br />
          <span className="text-violet-900 inline-block mt-3">Plasma</span> Technology
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover cutting-edge plasma innovations in health, industry, and sustainability
        </p>
        
        <Button label="Explore Our Products" to="/#products" />

        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-16">
          {statistics.map(stat => (
            <div key={stat.label + Math.random()}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray w-8 text-sm">{stat.label}</p>
            </div>
          ))
        }
        </div>
      </div>
      
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={DeviceImg}
          alt="Plasma Innovation device"
          width={610}
          height={500}
          className="object-contain relative z-10 pl-10"
         />
      </div>
    </section>
  );
}
