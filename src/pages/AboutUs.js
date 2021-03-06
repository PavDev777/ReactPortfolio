import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animtaion";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
