import { useState } from "react"
import { RevealOnScroll } from "../../components/RevealOnScroll"
import { RsvpModal } from "./components/RsvpModal"
import { useInvitation } from "../../shared/hooks/useInvitation";


export default function RsvpSection() {
    
    const { rsvp } = useInvitation();
    const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false)

    if (!rsvp.enabled) return null;

  return (

    <>
 <RevealOnScroll>  
            <div className="bg-asistencia p-6 -mt-5 h-auto pb-10">
              <img 
              src="/gifts/asistencia.gif" 
              alt="gift_asistencia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-base text-sm text-title font-montserratMedium tracking-wider uppercase mt-2 mb-5">
                 {rsvp.title}
              </h2>

              <p className="md:text-base text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-10">
                {rsvp.description}
              </p>

             <button
                type="button"
                onClick={() => setIsRsvpModalOpen(true)}
                className="px-4 py-0.5 text-sm uppercase border font-montserrat text-texto border-title rounded-full focus:ring-1"
              >
                {rsvp.buttonText}
              </button>
            </div>

        </RevealOnScroll>

          <RsvpModal
  isOpen={isRsvpModalOpen}
  onClose={() => setIsRsvpModalOpen(false)}
/>
    </>

  )
}
