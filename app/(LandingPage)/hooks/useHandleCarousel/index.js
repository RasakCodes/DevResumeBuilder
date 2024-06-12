import { useEffect, useRef, useState } from "react";

export const useHandleCarousel = (widthPercentage) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScrollIntervalId, setAutoScrollIntervalId] = useState(null);

  const calculateScrollDistance = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth; // Use scrollWidth to get total width
      const scrollDistance =
        (carouselWidth * parseInt(widthPercentage, 10)) / 100;
      return scrollDistance;
    }
    return 0;
  };

  const distance = calculateScrollDistance() || 400;
  const scroll = (direction) => {
    if (carouselRef.current) {
      if (direction === "left") {
        carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" }); // Scroll to the beginning
      } else {
        carouselRef.current?.scrollBy({ left: distance, behavior: "smooth" }); // Scroll right
      }
    }
  };

  const startAutoScroll = (autoScrollInterval = 3000) => {
    if (!autoScrollIntervalId) {
      const newIntervalId = setInterval(() => {
        if (carouselRef.current) {
          const maxScrollLeft =
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          const isAtEnd =
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
            carouselRef.current.scrollWidth;

          if (isAtEnd) {
            scroll("left"); // Scroll to the beginning
          } else {
            scroll("right"); // Scroll right
          }
        }
      }, autoScrollInterval);
      setAutoScrollIntervalId(newIntervalId);
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalId) {
      clearInterval(autoScrollIntervalId);
      setAutoScrollIntervalId(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;

        const index = Math.round(scrollLeft / distance);
        setActiveIndex(index);
      }
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      stopAutoScroll(); // Stop auto-scrolling when the component unmounts
    };
  }, [distance]);

  return {
    scroll,
    carouselRef,
    activeIndex,
    startAutoScroll,
    stopAutoScroll,
  };
};
