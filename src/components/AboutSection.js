import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animtaion";

import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              We work to make{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}> come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.{" "}
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="camera guy" />
      </Image>
    </About>
  );
};

export default AboutSection;
