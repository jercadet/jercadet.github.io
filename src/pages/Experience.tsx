import { Button } from "@mui/material";

export default function ExpPage() {
  const hOneStyle = "text-6xl text-left text-slate-300 mb-4";
  const hTwoStyle = "text-5xl text-left text-slate-400 mb-2";

  return (
    <div className="space-y-6 text-left text-lg">
      <div className="flex justify-between">
        <h1 className={hOneStyle}>Co-ops at Northeastern</h1>
      </div>
      <div>
        <h2 className={hTwoStyle}>Optum</h2>
        <p>
          My co-op at Optum was my first role within Computer Science. Optum is
          a company under United Health Group, a very big company.
          <br />
          My offical role title was "Talent Development Education Intern". I was
          placed on a team working on a health finance website. As a part of my
          role, I worked on updating the website's legal documents and doing a
          lot of my own testing by using fake logins. There was a plethora of
          things to learn, such as the system they used to impersonate fake
          employees and patients to troubleshoot the website.
          <br />
          Because it was my first co-op, I wanted to take as much advantage of
          this opportunity. I networked and met with different employees at
          Optum across different departments in and out of the software team. I
          was also getting used to the workflow of a software engineering role.
          There were daily standups and the team was set up for two-week
          sprints. It was interesting to finally be in a professsional
          environment, and I'm grateful for the opportunity to expereienece this
          while I was in college.
        </p>
      </div>
      <div>
        <h2 className={hTwoStyle}>Hydrow</h2>
        <p className="pb-8">
          Hydrow was a big change for me from my previous co-op. Optum was an
          extremely big company. Hydrow was much smaller, having about 100
          employees. Hydrow is a company that makes rowing machines. It felt a
          bit unusual to have a software role in a home workout company.
          <br />
          My offical role was "Software Engineering Co-op". I was working on an
          internal website they used to alter and manage different things like
          software/hardware for tablets, live training videos, and acheivement
          badges. I worked in TypeScript, React, and Next.js. I used Tailwindcss
          and Material UI to work front-end on the webpage. I learned a lot
          about collaboration, and I worked a lot with other employees from the
          back-end team and other teams outside of software, like the experience
          team. My job here was very independent and required a lot of
          self-management. They prioritized quality, so I never had any due
          dates. However, I still got my tasks done quickly and was commended on
          it. Hydrow gave me a valuable experience in collaboration, web
          development, and general company culture.
        </p>
      </div>
      <h1 className={hOneStyle}>Other Experiences</h1>
      <div>
        <h2 className={hTwoStyle}>Resident Assistant (RA)</h2>
        <p>
          As a resident assistant, I had many responsibilities. The main
          responisibility was ensuring the safety of residents. I also created
          posters, planned events, coordinated with other RAs, connecting with
          residents, and checking rooms, among many other tasks. This position
          was very rewarding. I formed a lot of connections and developed my
          leadership skills. I also created a community that values inclusivity
          and respect for others. Being an RA was tough, but very rewarding.
        </p>
      </div>
    </div>
  );
}
