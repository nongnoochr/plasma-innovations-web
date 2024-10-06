
import Hero from "@/components/sections/hero";
import NavBar from "@/components/sections/navbar";
import AboutUs from "@/components/sections/about";
import Capabilities from "@/components/sections/capabilities";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className='relative'>
      <NavBar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className='padding'>
        <AboutUs />
      </section>

      <section className='bg-pale-blue padding'>
        <Capabilities />
      </section>

      <section className=' bg-violet-300 padding-x padding-t pb-8'>
        <Footer />
      </section>
 
    </main>
  );
}
