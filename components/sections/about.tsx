import Image from 'next/image';

import PlasmaGif from '@/assets/images/plasma_gif.gif';

export default function AboutUs() {
    return (
        <section
        id='about-us'
        className='flex  justify-between items-center max-lg:flex-col-reverse  gap-10 w-full max-container'
      >
        <div className='flex-1 flex justify-center items-center'>
          <div className="relative">
            <div className="border border-gray-400 rounded-md bg-white relative z-20">
              <Image src={PlasmaGif} alt="How plasma is used" width={400} unoptimized />
            </div>
            <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 z-10"></div>
          </div>
        </div>

        <div className='flex flex-1 flex-col'>
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                <span className="text-violet-800">Cold Plasma</span> Solutions
                <br />
                for Sustainable Future
            </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            At the forefront of innovation and sustainability, Plasma Innovations
            is your trusted partner in revolutionizing processes and driving
            next-level advancements.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Unleash the transformative power of cold plasma technology with breakthrough
            solutions tailored for agriculture, healthcare, and industry.
          </p>
        </div>

      </section>
    );
}