import { useInvitation } from "../../shared/hooks/useInvitation";
import { ImageFadeGrid } from "./ImageFadeGrid";

export function GallerySection() {
  const { gallery } = useInvitation();

  if (!gallery.enabled) return null;

  return (
    <section className="px-6 py-3 text-center">
      <h2 className="text-lg font-playfair italic text-title mt-8">
        {gallery.title}
      </h2>

       <ImageFadeGrid
            images={gallery.images }
            />
      
    </section>
  );
}