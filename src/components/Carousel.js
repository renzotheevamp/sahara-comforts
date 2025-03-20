import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";

import image1 from "../assets/picnic.jpg";
import image2 from "../assets/NkoroiCrafts - Etsy.jpg";
import image3 from "../assets/picnic2.jpg";
import image4 from "../assets/shuka on seat (1).jpg";
import image5 from "../assets/GUEST_66b586c5-0f26-4b3f-98c2-2842165807b3.avif";
import image6 from "../assets/shuka on seat (3).jpg";

const carouselData = [
  {
    image: image1,
    title: "Cultural Maasai Blanket",
    description:
      "Experience the rich heritage of the Maasai culture with these handcrafted blankets.",
  },
  {
    image: image2,
    title: "Handwoven Textiles",
    description:
      "Each fabric tells a story, woven by skilled artisans using traditional techniques.",
  },
  {
    image: image3,
    title: "Outdoor Picnic Vibes",
    description:
      "Perfect for your next adventure, our blankets are designed for both comfort and style.",
  },
  {
    image: image4,
    title: "Luxury Handmade Shuka",
    description:
      "Add a touch of elegance to your home with our premium Maasai Shuka.",
  },
  {
    image: image5,
    title: "Maasai Craftsmanship",
    description:
      "A timeless piece representing generations of craftsmanship and artistic expression.",
  },
  {
    image: image6,
    title: "Traditional Yet Modern",
    description:
      "A perfect fusion of heritage and contemporary fashion for everyday use.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
