import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const scrollStep = -window.scrollY / (500 / 15); // 500 - время прокрутки, 15 - частота обновления кадров
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 5);
    };

    scrollToTop();
  }, [location]);

  return null;
};

export default ScrollToTop;
