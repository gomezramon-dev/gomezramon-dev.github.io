import { useRef } from "react";

const useSetImage = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const handleSetImage = (src: string) => () => {
    if (imageRef.current) imageRef.current.src = src;
  };

  return { imageRef, handleSetImage };
};

export default useSetImage;