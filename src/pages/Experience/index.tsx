import React, { useEffect } from "react";
import { setActivePage } from "../reducer";
import { useDispatch } from "react-redux";
import AccordionItem from "../../Components/accordionItem";
import { experiences } from "../../Database";
import { bodies } from "./experiences";

// Pages containing my work experiences and any other experiences
export default function Experience() {
  const titleStyle = "sm:text-5xl text-4xl text-left text-slate-400 mb-4";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("Experience"));
  }, [dispatch]);

  return (
    <div>
      <div className="mb-5 space-y-2">
        <h1 className={titleStyle}>Experience</h1>
        {experiences.map((exp, idx) => (
          <AccordionItem
            key={idx}
            panel={exp.panel}
            company={exp.company}
            role={exp.role}
            // Experiences in experiences.tsx need to be in the same order as experiences.json
            body={bodies[idx]}
          />
        ))}
      </div>
    </div>
  );
}
