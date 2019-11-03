import React, { useState, useEffect } from 'react';

import SliderParent from '../components/SliderParent';
import ContentLayout from '../layout/Content';

export default ({ slidesIds, Content, dotsMobileDisabled, arrowsDesktopDisabled }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeActiveSlide = toggler => {
    if (typeof toggler === 'string') {
      switch (toggler) {
        case 'prev':
          if (activeSlide === 0) {
            setActiveSlide(slidesIds.length - 1);
          } else {
            setActiveSlide(activeSlide - 1);
          }
          break;
        case 'next':
          if (activeSlide === slidesIds.length - 1) {
            setActiveSlide(0);
          } else {
            setActiveSlide(activeSlide + 1);
          }
          break;

        default:
          break;
      }
    } else if (typeof toggler === 'number') {
      setActiveSlide(toggler);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      changeActiveSlide('next');
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [activeSlide]);

  return (
    <ContentLayout mobileFull>
      <SliderParent
        activeSlide={activeSlide}
        action={changeActiveSlide}
        slidesIds={slidesIds}
        Content={Content}
        dotsMobileDisabled={dotsMobileDisabled}
        arrowsDesktopDisabled={arrowsDesktopDisabled}
      />
    </ContentLayout>
  );
};
