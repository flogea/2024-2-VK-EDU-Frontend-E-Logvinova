import { useRef, useCallback } from 'react';

function useScroll() {
  const elementRef = useRef(null);

  const scrollToElement = useCallback(() => {
    if (elementRef.current !== null) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return [elementRef, scrollToElement];
}

export default useScroll;
