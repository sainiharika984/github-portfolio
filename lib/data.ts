import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "UI Software Developer",
    location: "University of California Los Angels (UCLA), CA",
    description:
      "I worked on building the UI using using React js 17 with cutting edge HTML5, JavaScript and CSS3. Worked on the FACET application (Financial Aid cloud environment technology. Worked on Aws lambda functions to invoke the functions/triggers/events of Lambda API",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Total Bank Solutions, NJ",
    description:
      "Worked web application development using Angular 11 with cutting edge HTML5 and CSS3. Developed components in React Js and used React Js to build single page applications. Implemented and wrote an Okta Authentication for the application",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 – Dec 2021",
  },
  {
    title: "UI Software Developer",
    location: "Fidelity Investments, NJ",
    description:
      "Workded on web application development using Angular 8 with cutting edge HTML5 and CSS3. Worked on Fully Paid WorkStation Application In order to maintain the borrow and lend the securities. Involved Webpack as module bundler to preprocess and minify different files such as TypeScript and SASS files",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2018- Sep 2020",
  },
  {
    title: "Java UI Developer",
    location: "State Of Oregon, OR",
    description:
      "Worked on web application development using Angular 4.0 with cutting edge HTML5 and CSS3. Optimized UML design using patterns like DAO. Used Hibernate 3.3.1 for the backend persistence.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2018 – Dec 2018",
  },
  {
    title: "UI Developer",
    location: "BMO Harris Bank, IL",
    description:
      "Web application development using Angular 2.0 with cutting edge HTML5 and CSS. •	Migrated the application from angular Js to Angular 2.0. Handled data from multiple streams to maintain the sequence and their dependencies by using the RXJS operators.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2016 - Mar 2018",
  },
  {
    title: "Java UI Developer",
    location: "Process Weaver, India",
    description:
      "Implemented entire application using Core java, java Collections and Spring MVC design framework. Designed front-end using Java Servlets, JSP, HTML, CSS and JavaScript, utilizing AJAX technology. Involved in developing JSP forms.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2012 – Apr 2014",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "NGRX",
  "Bootstrap",
  "Material UI",
  "Jasmine",
  "Karma",
  "Jest",
  "React Testing Library",
  "Tailwind",
  "MongoDB",
  "Oracle SQL",
  "My SQL",
  "GraphQL",
  "J2EE",
  "Java",
  "Spring Boot",
  "Python",
  "Git",
  "Gitlab",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI CD",
  "SVN",
  "Splunk",
  "SonarQube",
  "Swagger",
  "Confluence",
  "Spring",
  "Struts",
] as const;
