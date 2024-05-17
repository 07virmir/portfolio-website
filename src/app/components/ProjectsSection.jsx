"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Automated Grocery Ordering",
    description: "Collaborative automated grocery ordering app integrating Kroger and Splitwise APIs.",
    image: "/images/projects/grocery.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/07virmir/grocery_automation",
  },
  {
    id: 2,
    title: "Musicle",
    description: "Daily musical guessing game leveraging Spotify's library, designed to challenge and expand your music knowledge.",
    image: "/images/projects/musicle.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/07virmir/Musicle",
  },
  {
    id: 3,
    title: "Soccer Position Prediction",
    description: "Soccer play prediction tool using LSTM models and manim visualizations for sports analytics and training.",
    image: "/images/projects/soccer.png",
    tag: ["All", "Web", "ML"],
    gitUrl: "https://github.com/07virmir/soccer-futures",
  },
  {
    id: 4,
    title: "What the Move",
    description: "Social event planning app with map integration to improve party coordination and communication.",
    image: "/images/projects/wtm.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/07virmir/wtm",
  },
  {
    id: 5,
    title: "Stock Correlation Dashboard",
    description: "Platform for visualizing correlations between stocks using financial metrics.",
    image: "/images/projects/stock.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/07virmir/stock-correlation",
  },
  {
    id: 6,
    title: "Artwork Classification through Low Information Learning",
    description: "Classifying and measuring similarity between artworks using various Deep Learning architectures.",
    image: "/images/projects/painting.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/07virmir/PaintingClassification",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
