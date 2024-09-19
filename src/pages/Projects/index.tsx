import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../reducer";
import AccordionItem from "../../Components/accordionItem";
import { projects } from "../../Database";
import { bodies } from "./projects";

// Page containing my personal projects
export default function Projects() {
  const titleStyle = "sm:text-5xl text-4xl text-left text-slate-400 mb-4";

  const dispatch = useDispatch();
  dispatch(setActivePage("Projects"));

  return (
    <div>
      <div className="mb-5 space-y-2">
        <h1 className={titleStyle}>Projects</h1>
        {projects.map((project, idx) => (
          <AccordionItem
            key={idx}
            panel={project.id}
            title={project.name}
            subtitle={""}
            // Experiences in experiences.tsx need to be in the same order as experiences.json
            body={bodies.find((xp) => xp.id === project.id)?.body}
          />
        ))}
      </div>
    </div>
  );
}
