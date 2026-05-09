import DressCode from "./components/DressCode"
import { LunaDeMielCard } from "./components/LunaDeMielCard"
import { EventDetailsSection } from "./features/eventDetails/EventDetailsSection"
import { GallerySection } from "./features/gallery/GallerySection"
import { HeroSection } from "./features/hero/HeroSection"
import RsvpSection from "./features/rsvp/RsvpSection"

function App() {


  return (
    <>
      <section className="mx-auto w-full md:max-w-md text-center bg-background">

        <HeroSection/>

        <GallerySection/>

        <p className="text-lg font-playfair italic text-title mt-8">Itinerario</p>

        <EventDetailsSection/>

        <LunaDeMielCard/>

        <DressCode/>

        <RsvpSection/>
        
      </section>
    </>
  )
}

export default App
