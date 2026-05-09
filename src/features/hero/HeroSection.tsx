import { useInvitation } from "../../shared/hooks/useInvitation";
import { RevealOnScroll } from "../../components/RevealOnScroll";
import { Countdown } from "../../components/Countdown";
import { AddToCalendar } from "../../components/AddToCalendar";

export function HeroSection() {
   const { event, assets, texts } = useInvitation();

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <RevealOnScroll>
        <img
          src={assets.namesImage}
          alt="NombresImg"
          className="w-full h-auto mx-auto object-contain"
        />
      </RevealOnScroll>

      <p className="text-2xl w-full uppercase tracking-wider text-title font-[var(--font-montserrat-medium)] mt-7">
        {event.subtitle}
      </p>

      <Countdown targetDate={event.date} />

      <p className="md:text-lg text-base font-playfair italic text-title mt-7 px-2">
        {texts.intro}
      </p>

      <RevealOnScroll delay={0.3}>

      {/* Agendar fecha */}

        <div className="mt-7">
          <div>
      <img
        src="/gifts/fecha.gif"
        alt="fecha_gif"
        className="mx-auto h-auto w-20 object-contain"
      />
           <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase">Agenda la fecha</h2>
          </div>          
          <img 
             src={assets.dateImage}
             alt="fechaImg"
             className="w-full h-auto mx-auto object-contain mt-2" 
          />
          
          <AddToCalendar />

        </div>
         
      </RevealOnScroll>

    </section>
  );
}