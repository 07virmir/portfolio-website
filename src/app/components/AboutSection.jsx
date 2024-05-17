"use client";
import React, { useTransition, useState } from "react";
import { FaPython, FaJs, FaReact, FaNodeJs, FaJava, FaSwift, FaDatabase, FaSchool, FaBriefcase } from 'react-icons/fa';
import Image from "next/image";
import TabButton from "./TabButton";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Swift", icon: <FaSwift /> },
  { name: "C", icon: <FaDatabase /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "GraphQL", icon: <FaDatabase /> },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center bg-gray-800 text-white p-1.5 rounded-lg shadow-md">
            <span className="mr-2">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 gap-2">
        {[
          {
            title: (
              <>
                Bachelor's in Computer Science
                <br />
                Georgia Institute of Technology
              </>
            ),
            icon: <FaSchool />
          },
          {
            title: (
              <>
                Master's in Computer Science
                <br />
                Georgia Institute of Technology
              </>
            ),
            icon: <FaSchool />
          }
        ].map((education, index) => (
          <div key={index} className="flex items-center bg-gray-800 text-white p-1 rounded-lg shadow-md">
            <span className="mr-4 ml-2">{education.icon}</span>
            <span className="text-md">{education.title}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="grid grid-cols-1 gap-2">
        {[
          {
            title: (
              <>
                NCR Corporation
                <br />
                Backend Software Engineer Intern
              </>
            ),
            icon: <FaBriefcase />
          },
          {
            title: (
              <>
                AnswerRocket
                <br />
                Fullstack Software Engineer Intern
              </>
            ),
            icon: <FaBriefcase />
          }
        ].map((experience, index) => (
          <div key={index} className="flex items-center bg-gray-800 text-white p-1 rounded-lg shadow-md">
            <span className="mr-4 ml-2">{experience.icon}</span>
            <span className="text-md">{experience.title}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme3.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a backend and fullstack developer with a passion for creating innovative solutions that have
            real-world impact. My expertise lies in designing and implementing robust architectures that 
            drive efficient and high-performance systems. I have a solid foundation in machine learning and deep learning,
            and love the chance to integrate these solutions into my projects. Most of my experience is in Python,
            but I'm also proficient in a multitude of other languages and technologies. As a quick learner and an enthusiastic 
            team player, I'm always looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
