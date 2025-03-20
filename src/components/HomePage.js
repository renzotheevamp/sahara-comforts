import React from "react";
import "../styles/style.css";
import logo from "../assets/image.png";
import {
  FaShoppingCart,
  FaPhone,
  FaEnvelope,
  FaBinoculars,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home">
      <motion.img
        src={logo}
        alt="Sahara Comfort Logo"
        className="home-logo"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="first-heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Cultural Masaai Blanket
      </motion.h1>

      <Carousel />
      <p className="first-paragraph">
        Authentic Maasai Shukas, beautifully crafted and sourced directly from
        Kenya📍experience tradition in every weave!
      </p>

      <motion.div
        className="buttons"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <Link to="/explore-our-designs">
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <FaBinoculars />
            Explore Our Designs
          </motion.button>
        </Link>

        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaShoppingCart />
          Order Now
        </motion.button>
        <motion.h1
          className="second-heading"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Customer Support
        </motion.h1>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaEnvelope />
          Reach Us{" "}
        </motion.button>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FaPhone />
          Call US
        </motion.button>
      </motion.div>

      <div className="social-icons">
        <FaEnvelope />
        <FaPhone />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Homepage;
