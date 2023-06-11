import { useRef, useEffect, useState } from 'react';

const Visibility = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      const isVisible = entries[0].isIntersecting;
      setIsVisible(isVisible);
    };

    const newObserver = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    setObserver(newObserver);

    const currentRef = ref.current; // Copy ref.current to a local variable

    if (currentRef) {
      newObserver.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observer]);

  return [ref, isVisible];
};

export default Visibility;
