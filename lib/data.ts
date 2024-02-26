import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import edutizim from "@/public/edutizim.png";
import salam_taxi from "@/public/salam taxi.jpg";
import mediapark from "@/public/mediapark.png";
import bito from "@/public/bito.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Tashkent, mediapark.uz",
    description:
      "Responsible for creating and maintaining websites, including internet banks, CRM systems, and marketplaces with complex structures and functionalities.",
    date: "November 2023 – Present",
  },
  {
    title: "Frontend Developer",
    location: "Tashkent, unical.uz",
    description:
      "Played a key role in creating and maintaining websites, encompassing internet banks, social networks, and marketplaces with advanced structures and functionalities.",
    date: "March 2022 – November 2023",
  },
  {
    title: "Frontend Mentor",
    location: "Tashkent, Registon IT",
    description:
      "Provided mentorship in frontend development, contributing to the growth and skill development of aspiring developers.",
    date: "March 2023 – September 2023",
  },
  {
    title: "Frontend Developer",
    location: "Tashkent",
    description:
      "Engaged in the creation and maintenance of websites, including internet banks, CRM systems, and marketplaces with intricate structures and functionalities.",
    date: "December 2021 – February 2022",
  },
] as const;

export const projectsData = [
  {
    title: "EduTizim",
    description:
      "I worked as a front-end developer on this startup project for a year. This app helps to learning centers for management, accounting, attendance and more.",
    tags: ["React", "Typescript", "MUI", "Styled-components"],
    imageUrl: edutizim,
  },
  {
    title: "Bito.uz",
    description:
      "Software supply ecosystem that assists in managing all aspects of business (finance, human resources, production, supply chain, services, procurement, and others).",
    tags: ["React", "JavaScript", "Context API", "MUI"],
    imageUrl: bito,
  },
  {
    title: "Taxi app admin",
    description:
      "The Taxi App Admin Panel serves as the centralized control hub for overseeing and managing all operations within the taxi service. With a user-friendly interface, it empowers administrators to efficiently monitor and optimize various aspects of the platform.",
    tags: ["React", "TypeScript", "Leaflet", "React-query"],
    imageUrl: salam_taxi,
  },
  {
    title: "Mediapark.uz",
    description:
      "Develops its own marketplace of consumer electronics, which provides a wide assortment and quick availability of goods throughout the country",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Radix-ui"],
    imageUrl: mediapark,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "MUI/ANTD",
  "Framer Motion",
  "Zustand",
  "Leaflet",
  "Express",
  "PostgreSQL",
  "Node.js",
  "Express",
  "MongoDB",
] as const;
