import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useDispatch } from "react-redux";
import { setActivePage } from "../reducer";

// Page containing my personal projects
export default function Projects() {
  const titleStyle = "sm:text-5xl text-4xl text-left text-slate-300 mb-4";
  const expNameStyle = "sm:text-4xl text-3xl text-left text-slate-400 mb-2";
  const text_slate_300 = "rgba(203, 213, 225, 0.2);";
  const text_slate_400 = "rgb(148 163 184)";
  const dispatch = useDispatch();
  dispatch(setActivePage("Projects"));

  const [expanded, setExpanded] = React.useState<String>("");

  const handleChange =
    (panel: String) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };

  return (
    <div>
      <div className="mb-5">
        <h1 className={titleStyle}>Projects</h1>
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
              documents and doing a lot of my own testing by using impersonating
              customers and employees in a content manager. There was a plethora
              of things to learn, such as the content manager they used to
              impersonate fake employees and patients to troubleshoot the
              website.
              <br />
              <br />
              Because it was my first co-op, I wanted to take as much advantage
              of this opportunity. I met with different employees at Optum
              across different departments in and out of the software team. I
              was also getting used to the workflow of a software engineering
              role. There were daily standups and the team was set up for
              two-week sprints. It was interesting to finally be in a
              professsional environment, and I'm grateful for the opportunity to
              expereienece this while I was in college. My co-op involved a lot
              of self-advocacy. I always asked for more responibilites I could
              take on. I also did many things on my own accord to take advantage
              of this opportunity, such as learning and networking.
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
              100 employees engineering rowing machines. It felt a bit unusual
              to have a software role in a home workout company.
              <br />
              <br />
              I was working on the front-end of an internal website they used to
              use and manage their database. The database contained data such as
              user data, videos, and events. The company was originally using a
              command line interface (CLI) to manipulate data in the database.
              It was cumbersome and time-consuming, especially for the
              non-technical teams. The internal website I was taking a part in
              developing was replacing the CLI. The process of developing these
              webpages was very independent and required a lot of
              self-management. I took part in the user story creation,
              wireframing, and development of multiple pages for the front-end.
              <br />
              <br />
              They prioritized quality, so I never had any due dates. However, I
              still managed my time well and developed the webpages timely. In
              fact, I was told by my supervisors that I completed the webpages
              faster than they anticipated. Thus, they allowed me to complete 2
              extra webpages after finishing the work that was originally
              planned for the 6-month co-op duration. My work on the internal
              website helped different teams in the company, specifically the
              Workout Experience team and Customer Service team. I was estatic
              to hear how the internal website I worked on helped other
              employees and how happy they were to use it and not the CLI
              anymore.
              <br />
              <br />I worked on the front-end of the internal website in
              TypeScript, React, Node.js, and Next.js. They had Next.js in their
              tech stack and showed how using it improved the performance of the
              website. Thus, I learned Next.js for the first 2 weeks of the
              co-op while refreshing myself with TypeScript and React.js. At
              Hydrow, they also taught me about responsive design. I used
              TailwindCSS and Material UI to implement responsive designs for
              the webpages I developed. A lot of the TypeScript and React.js I
              know now resulted from working with it and learning it during this
              co-op. Outside of technical knowledge, I learned a lot about the
              importance of collaboration in Software Development. I worked a
              lot with other employees from the back-end team and other teams
              outside of software, like the Experience team and Customer Support
              team. Hydrow gave me a valuable experience in collaboration, web
              development, and general company culture.
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
              As a Resident Assistant, I had many responsibilities, especially
              with 4 semesters of freshman residents. Each semester, I had
              between 40-55 residents I was responsible for. The main
              responisibility was ensuring the safety of my residents. I
              answered any questions they had about campus or Northeastern,
              provided them with safety resources, resolved conflicts, and
              ensured the cleanliness and safety of the dorm. However, I also
              designed posters, planned events, coordinated with other RAs,
              connected with residents, resolved conflicts, and did safety
              checks for residents' rooms, among many other tasks.
              <br />
              <br />
              This position had a lot of responibilites, but it was very
              rewarding. I formed a lot of connections, broke out of my shell,
              and developed my leadership skills. I also created a community
              that values inclusivity and respect for others. This was all done
              while balancing classes, homework, and extracurriculars. Being an
              RA was tough, but very rewarding.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
