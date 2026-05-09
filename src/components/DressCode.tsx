import { RevealOnScroll } from './RevealOnScroll'

export default function DressCode() {
  return (
    <>
    
       <RevealOnScroll>
              <div className="">
              <img 
              src="/gifts/desscode.gif" 
              alt="gift_desscode" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-sm text-title font-montserratMedium tracking-wider uppercase mt-2">
                dress code
              </h2>

              <p className="md:text-lg text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-10">
                Formal - Elegante
              </p>

            </div>
          </RevealOnScroll>

    </>
  )
}
