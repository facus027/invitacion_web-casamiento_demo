import { RevealOnScroll } from "../../components/RevealOnScroll";
import { useInvitation } from "../../shared/hooks/useInvitation";

export function EventDetailsSection() {
  const { event } = useInvitation();

  return (
    <section className="px-6 py-5 text-center space-y-12">
      
       <div>

          <div className="space-y-10">
      <RevealOnScroll>      
            <div className="">
              <img 
              src="/gifts/ceremonia.gif" 
              alt="gift_ceremonia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase mt-2">
                {event.ceremony.title}
              </h2>

              <p className="md:text-lg text-xs font-montserrat text-texto tracking-wide uppercase mt-5 mb-5">
                {event.ceremony.hour} horas <br/>
                {event.ceremony.place} <br/>
                {event.ceremony.address}
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href={event.ceremony.mapUrl}
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-title rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>

            </RevealOnScroll>


            <RevealOnScroll>
            <div className="">
              <img 
              src="/gifts/recepción.gif" 
              alt="gift_recepción" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase mt-2">
                {event.party.title}
              </h2>

              <p className="md:text-lg text-xs font-montserrat text-texto tracking-wide uppercase mt-5 mb-5">
                {event.party.hour} horas <br/>
                {event.party.place} <br/>
                {event.party.address}
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href={event.party.mapUrl}
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-title rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>
      </RevealOnScroll>

          </div>
        </div>
      
    </section>
  );
}