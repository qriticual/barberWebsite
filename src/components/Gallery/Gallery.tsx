import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import "./Gallery.css";

type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  { src: require("../../assets/images/galleryImage1.PNG"), alt: "Bilde 1" },
  { src: require("../../assets/images/galleryImage2.PNG"), alt: "Bilde 2" },
  { src: require("../../assets/images/galleryImage3.PNG"), alt: "Bilde 3" },
  { src: require("../../assets/images/galleryImage4.PNG"), alt: "Bilde 4" },
  { src: require("../../assets/images/galleryImage5.PNG"), alt: "Bilde 5" },
  { src: require("../../assets/images/galleryImage6.PNG"), alt: "Bilde 6" },
];

const Gallery = (props: { changeCanSwipe: Function; }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if( selectedImage != null )
    {
      props.changeCanSwipe(false)
    }
  }, [selectedImage]);

  const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.changedTouches[0].clientX);
  };

  const handleSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setEndX(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (selectedImage && endX - startX > 100) {
      handlePrevious();
    } else if (selectedImage && startX - endX > 100) {
      handleNext();
    }
  };

  const handleNext = () => {
    if (selectedImage && selectedImage < images.length) {
      setSelectedImage(selectedImage + 1);
    } else if (selectedImage === 6) {
      setSelectedImage(1);
    }
  };

  const handlePrevious = () => {
    if (selectedImage && selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    } else if (selectedImage === 1) {
      setSelectedImage(6);
    }
  };

  const handleExit = () => {
    props.changeCanSwipe(true)
    setSelectedImage(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleExit();
    }
  };

  return (
    <div className="gallery-container">
      <div className="title-container">
        <div className="title-stripe title-stripe-left"></div>
        <div className="title-text">Galleri</div>
        <div className="title-stripe title-stripe-right"></div>
      </div>

      <div className="gallery-images-container">
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={index}
            className="gallery-image"
            onClick={() => setSelectedImage(index + 1)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="selected-image-overlay"
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          onClick={handleOutsideClick}
        >
          <img
            src={images[selectedImage - 1].src}
            className="selected-image"
            alt={`Bilde ${selectedImage}`}
          />
          <div className="arrow-container arrow-container-left">
            <FaArrowLeft style={{"scale": "2"}} onClick={handlePrevious} />
          </div>
          <div className="arrow-container arrow-container-right">
            <FaArrowRight style={{"scale": "2"}} onClick={handleNext} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;