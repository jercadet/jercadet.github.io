import React from "react";
import { Bodies } from "../../utils/types";

const musicCharacter: Bodies = {
  id: "music-character",
  body: (
    <p>
      I joined a fun project already in progress where the user is given a
      character based on one of their top 5 songs from Spotify.
      <br />
      <br />
      At this point, I had most experience with front-end development. However,
      I volunteered to work on the back-end. The back-end was in Python and SQL,
      communicating with Spotify's API. I was familiar with both languages, but
      I didn't have extensive experience in them like with JavaScript. I was
      excited for the chance to work in Python and gain some more experience
      with back-end development. Our group comprised of 3 people, and I had the
      most experience in professional software development due to my two co-ops.
      I worked on debugging the back-end and showed my teammates some standard
      Git/Github skills such as pull requests and branching.
      <br />
      <br />
      Later on, I used this project as an opportunity to work on responsive
      design with CSS by itself before using a framework like Tailwind CSS or
      Bootstrap. I did a small overhaul on the front-end of the project to make
      the design responsive.
    </p>
  )
};

const education = {
  id: "education",
  body: (
    <p>
      I was a part of a team of 3 creating a website imitating the educational
      website Canvas. This project was a capstone study in web development. We
      used TypeScript, React.js, and Redux for the front-end and JavaScript,
      Node.js, Express.js, and Axios for the back-end. We used Mongo DB for the
      database to store users. I had previous experience in web development from
      my previous co-op. I participated in every part of development, but I lead
      the Redux implementation in our full-stack web app. This experience
      fine-tuned my web development capabilities.
    </p>
  ),
};

const spreadsheet = {
  id: "spreadsheet",
  body: (
    <p>
      I worked in a team of 4 creating a spreadsheet desktop app from scratch.
      This experience reflected my Optum co-op in terms of what I learned. Like
      my experience at Optum, this project taught me more about the development
      process and professional aspect of software engineering. Sadly, I learned
      the hard way. We all struggled to complete our parts of the project due to
      our various circumstances once we began coding. I took the lead with very
      limited time left before our due date. I delegated the remaining user
      stories we had developed according to everyone's strengths and what they
      felt comfortable taking on. Because I had the most experience with
      React.js and TypeScript, I also volunteered to help anyone else who had
      trouble with their user stories and debugging. Through our hard work and
      my leadership, we were able to complete our project with a very tight
      deadline.
    </p>
  ),
};

const imageEditor = {
  id: "image-editor",
  body: (
    <p>
      A partner and I worked on an Image editor in Java. We finished this
      project within a month, working tirelessly to test every method and follow
      standard OOD practices. We developed the UI using Java Swing.
      <br />
      <br />
      This project was extremely extensive. We followed SOLID principles and
      thoroughly tested the methods we developed in every class. As long as this
      project was, it taught me a lot about object-oriented principles (OOP). It
      also hammered in OOP concepts into my head, so much so that these
      principles became habitual. I apply object-oriented principles in my
      development work without realizing the specific principles.
      <br />
      <br />
      This was also my first time working on such an extensive project with a
      partner. It was an amazing experience. It taught me a lot about
      collaboration, communication, the importance of planning, and the benefits
      of pair programming. This project was a integral early experience for me
      as a budding software developer.
    </p>
  ),
};

export const bodies: Bodies[] = [
  musicCharacter,
  education,
  spreadsheet,
  imageEditor,
];
