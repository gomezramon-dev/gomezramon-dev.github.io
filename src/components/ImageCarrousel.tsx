import { useState, useEffect, useRef } from "react";

interface ImageCarrouselProps {
  items: string[];
  /**
   * Auto-play interval in milliseconds (default: 3000)
   */
  interval?: number;
}

const ImageCarrousel = ({ items, interval = 3000 }: ImageCarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % items.length),
      interval
    );
    return () => resetTimeout();
  }, [currentIndex, items.length, interval]);


  return (
    <div className="w-full lg:px-24 xl:px-32 2xl:px-48">
      <div
        className="w-full bg-white border-2 border-secondary rounded-xl relative overflow-hidden aspect-[16/9] filter"
        style={{ filter: "drop-shadow(-2px 4px #241F23)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          
          <img
            src={items[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
         
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              resetTimeout();
              setCurrentIndex(idx);
            }}
            className={`w-4 h-4 rounded-full focus:outline-none ${
              idx === currentIndex ? "bg-secondary" : "bg-gray-300"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarrousel;