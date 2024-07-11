"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a master's degree from UNC-Chapel Hill in 2018, I started my career as an intern and a full-time software engineer at AIG, which is a Finance and insurance corporation. Over the years, I have worked in multiple domains, such as healthcare, telecom, banking, and insurance. I have also worked on multiple POCs for my business clients using cutting-edge tech stacks. I also had an opportunity to mentor junior developers, get them up to speed, and guide them on the best practices by setting the bar high for coding standards. My core stack is Angular, React, Next.js, Node.js, and MongoDB, along with knowledge of Java microservices. I am also familiar with TypeScript and Express JS. I am always looking to learn new technologies. I am currently looking for a full-time position as a senior software developer.


      </p>

      <p>
      I enjoy playing badminton, swimming, binge-watching movies, and Netflix when not coding. I also enjoy learning new things and technologies and keeping myself updated. I am currently learning about the evolving technologies related to AI & ML and business strategies related to real estate and AgTech.
      </p>
    </motion.section>
  );
}
