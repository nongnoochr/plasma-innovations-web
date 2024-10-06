
import Image from "next/image";
import { capabilities } from "@/libs/constants";

export default function Capabilities() {
  return (
    <section id="capabilities" className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        Our Capabilities
      </h2>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 w-full">
        {
            capabilities.map((capability) => (
                <div key={capability.title} className="flex flex-col items-center max-lg:items-start">

                    <div className="flex justify-center items-center flex-col">
                        <div className="h-[150px]">
                            <Image src={capability.src} alt={capability.title} height={120} className="object-cover" />
                        </div>

                        <h3 className="text-violet-900 font-palanquin text-2xl font-bold mt-6 text-center">{capability.title}</h3>
                        <div className="mt-8 font-montserrat text-lg text-center text-slate-gray h-[100px]">{capability.descriptions}</div>

                    </div>
                    
                </div>
            ))
        }
      </div>


      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
    </section>
  );
}
