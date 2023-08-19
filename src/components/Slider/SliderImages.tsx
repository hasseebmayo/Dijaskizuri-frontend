import { NextIcon, PrevIcon } from "../../assets/images";
import "./slider.component.scss";
import HeroImage1 from "../../assets/images/HeroImage1.jpg";
import HeroImage2 from "../../assets/images/HeroImage2.jpg";
import HeroImage3 from "../../assets/images/HeroImage3.jpg";
import HeroImage4 from "../../assets/images/HeroImage4.jpg";
import { useEffect, useState } from "react";
const SliderImages = () => {
  const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];
  const sliderImagesText = ["Zgodba o", "Najlepših", "Tvojega", "Življenja"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % images.length);
    }, 3000); // Change slides every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-main-section">
      <div
        className="slider-next-btn"
        onClick={() => {
          setCurrentIndex((prev: number) => {
            if (currentIndex === images.length - 1) {
              return 0;
            }
            return prev + 1;
          });
        }}
      >
        <NextIcon />
      </div>
      <div
        className="slider-prev-btn"
        onClick={() => {
          setCurrentIndex((prev: number) => {
            console.log(prev);
            if (prev === 0) {
              return images.length - 1;
            }
            return prev - 1;
          });
        }}
      >
        <PrevIcon />
      </div>
      <div className="slider-images">
        <div className="slider-images-text">
          {sliderImagesText[currentIndex]}
        </div>
        <img src={images[currentIndex]} alt="HeroImage1" />
      </div>
    </div>
  );
};

export default SliderImages;
