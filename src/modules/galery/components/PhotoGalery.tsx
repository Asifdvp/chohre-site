"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Pluginleri import et
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";

export default function PhotoGalery({ open, setOpen, index, slides }) {
  return (
    <>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
        plugins={[Zoom, Fullscreen]}
        noScroll={{disabled:false}}
        zoom={{
          maxZoomPixelRatio: 3, // max zoom səviyyəsi
          zoomInMultiplier: 2, // hər zoom-da neçə dəfə böyüsün
          doubleTapDelay: 300, // double tap ilə zoom
          scrollToZoom: true, // mouse scroll ilə zoom
        }}
       
      />
    </>
  );
}
