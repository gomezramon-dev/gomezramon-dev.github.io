import { useState, useEffect } from 'react';

/**
 * Custom hook for computing scale factor based on window width.
 * Returns window.innerWidth / baseWidth and updates on resize.
 */
const useScale = (baseWidth: number = 1920): number => {
  const [scale, setScale] = useState(() =>
    typeof window === 'undefined' ? 1 : window.innerWidth / baseWidth,
  );

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / baseWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [baseWidth]);

  return scale;
};

export default useScale;