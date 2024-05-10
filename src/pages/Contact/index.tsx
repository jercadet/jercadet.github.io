import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

export default function Contact() {
  const iconSize = 60;
  document.title = "Contact";

  return (
    <div className="space-y-12">
      <h1 className="text-4xl">Contact Me!</h1>
      <h2 className="text-2xl">Feel free to connect with me!</h2>
      <div className="grid-cols-1 sm:flex sm:space-x-60 space-y-12 sm:space-y-0 justify-center">
        <div className="space-y-3 pt-1">
          <EmailIcon sx={{ color: "white", fontSize: iconSize }} />
          <p>cadet.jer01@gmail.com</p>
        </div>
        <div>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jercadet"
          >
            <GitHubIcon sx={{ color: "white", fontSize: iconSize }} />
          </IconButton>
          <p>github.com/jercadet</p>
        </div>
        <div>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/cadetj"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: iconSize }} />
          </IconButton>
          <p>linkedin.com/in/cadetj</p>
        </div>
      </div>
      {/* <div className="flex space-x-32 justify-center">
        <p>cadet.jer01@gmail.com</p>
        <p className="pl-6">https://github.com/jercadet</p>
        <p>www.linkedin.com/in/cadetj</p>
      </div> */}
    </div>
  );
}
