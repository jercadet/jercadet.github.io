import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function ProjectComponent() {
  const expNameStyle = "sm:text-4xl text-3xl text-left text-slate-400 mb-2";
  const text_slate_300 = "rgba(203, 213, 225, 0.2);";
  const text_slate_400 = "rgb(148 163 184)";

  const [expanded, setExpanded] = React.useState<String>("");

  const handleChange =
    (panel: String) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          bgcolor: `${text_slate_300}  blur(5px)`,
          color: `${text_slate_400}`,
          fontSize: "20px",
          textAlign: "left",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2 className={`${expNameStyle} md:block pr-3`}>Optum </h2>
          <h2 className={`${expNameStyle} italic hidden lg:block`}>
            {" "}
            - Technology Development Intern
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            My co-op at Optum was my first role within Computer Science. Optum
            is a company under United Health Group, a very big company.
            <br />
            <br />
            My offical role title was "Talent Development Education Intern". I
            was placed on a team working on a health finance website. As a part
            of my role, I worked on updating the website's legal documents and
            doing a lot of my own testing by using impersonating customers and
            employees in a content manager. There was a plethora of things to
            learn, such as the content manager they used to impersonate fake
            employees and patients to troubleshoot the website.
            <br />
            <br />
            Because it was my first co-op, I wanted to take as much advantage of
            this opportunity. I met with different employees at Optum across
            different departments in and out of the software team. I was also
            getting used to the workflow of a software engineering role. There
            were daily standups and the team was set up for two-week sprints. It
            was interesting to finally be in a professsional environment, and
            I'm grateful for the opportunity to expereienece this while I was in
            college. My co-op involved a lot of self-advocacy. I always asked
            for more responibilites I could take on. I also did many things on
            my own accord to take advantage of this opportunity, such as
            learning and networking.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
