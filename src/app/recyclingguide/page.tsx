"use client";
import React from "react";
import Navbar from "../Header/Navbar";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import RecyclingGuide from "./RecyclingGuide";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-4 py-8">
          <RecyclingGuide />
        </div>
      </motion.div>
    </>
  );
};

export default Page;
