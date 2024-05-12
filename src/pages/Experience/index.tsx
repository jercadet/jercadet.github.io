import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function Experience() {
  const titleStyle = "sm:text-5xl text-4xl text-left text-slate-300 mb-4";
  const expNameStyle = "sm:text-4xl text-3xl text-left text-slate-400 mb-2";
  const text_slate_300 = "rgba(203, 213, 225, 0.2);";
  const text_slate_400 = "rgb(148 163 184)";
  document.title = "Experience";

  const [expanded, setExpanded] = React.useState<String>("");

  const handleChange =
    (panel: String) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };

  return (
    <div>
      <div className="mb-5">
        <h1 className={titleStyle}>Professional Experience</h1>
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
              was placed on a team working on a health finance website. As a
              part of my role, I worked on updating the website's legal
              documents and doing a lot of my own testing by using fake logins.
              There was a plethora of things to learn, such as the system they
              used to impersonate fake employees and patients to troubleshoot
              the website.
              <br />
              <br />
              Because it was my first co-op, I wanted to take as much advantage
              of this opportunity. I networked and met with different employees
              at Optum across different departments in and out of the software
              team. I was also getting used to the workflow of a software
              engineering role. There were daily standups and the team was set
              up for two-week sprints. It was interesting to finally be in a
              professsional environment, and I'm grateful for the opportunity to
              expereienece this while I was in college.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            bgcolor: `${text_slate_300}  blur(5px)`,
            color: `${text_slate_400}`,
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h2 className={`${expNameStyle} md:block pr-3`}>Hydrow</h2>
            <h2 className={`${expNameStyle} italic hidden lg:block`}>
              - Software Engineer Co-op
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="pb-8">
              Hydrow was a big change for me from my previous co-op. Optum was
              an extremely big company. Hydrow was much smaller, having about
              100 employees. Hydrow is a company that makes rowing machines. It
              felt a bit unusual to have a software role in a home workout
              company.
              <br />
              <br />
              My offical role was "Software Engineering Co-op". I was working on
              an internal website they used to alter and manage different things
              like software/hardware for tablets, live training videos, and
              acheivement badges. I worked in TypeScript, React, and Next.js. I
              used Tailwindcss and Material UI to work front-end on the webpage.
              I learned a lot about collaboration, and I worked a lot with other
              employees from the back-end team and other teams outside of
              software, like the experience team. My job here was very
              independent and required a lot of self-management. They
              prioritized quality, so I never had any due dates. However, I
              still got my tasks done quickly and was commended on it. Hydrow
              gave me a valuable experience in collaboration, web development,
              and general company culture.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-5">
        <h1 className={titleStyle}>Other Experiences</h1>
        <Accordion
          sx={{
            bgcolor: `${text_slate_300}  blur(5px)`,
            color: `${text_slate_400}`,
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h2 className={expNameStyle}>Resident Assistant (RA)</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="pb-8">
              As a resident assistant, I had many responsibilities. The main
              responisibility was ensuring the safety of residents. I also
              created posters, planned events, coordinated with other RAs,
              connecting with residents, and checking rooms, among many other
              tasks. This position was very rewarding. I formed a lot of
              connections and developed my leadership skills. I also created a
              community that values inclusivity and respect for others. Being an
              RA was tough, but very rewarding.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
