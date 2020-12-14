import React from "react";
import { pageAnimation } from "../animtaion";
import { AnimatePresence, motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <h1> ContactUs </h1>
    </motion.div>
  );
};
export default ContactUs;
