import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import "../styles/ExploreDesigns.css";
import plainShuka from "../assets/plain1.jpg";
import shukaWithBlankets from "../assets/blank1.jpg";

const ExploreDesigns = () => {
  return (
    <div className="explore-designs">
      <Header />
      <motion.div
        className="explore-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Explore Our Designs
        </motion.h1>

        <motion.p
          className="first-paragraph"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find the Maasai Shuka that speaks to you!
        </motion.p>

        <div className="design-options">
          <motion.div
            className="design-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link to="/plain-shukas">
              <div className="design-item">
                <img src={plainShuka} alt="Plain Shukas" />
                <p className="design-text">PLAIN MAASAI SHUKA</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="design-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link to="/shukas-with-blankets">
              <div className="design-item">
                <img src={shukaWithBlankets} alt="Shukas with Blankets" />
                <p className="design-text">MAASAI FLEECE BLANKETS</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreDesigns;
