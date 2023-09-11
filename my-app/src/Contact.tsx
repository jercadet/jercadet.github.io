import Layout from "./components/Layout";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from "@mui/material";

export default function Contact() {
  const iconSize = 60;

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-4xl">Contact Me!</h1>
        <h2 className="text-2xl">Feel free to connect with me!</h2>
        <div className="flex space-x-64 justify-center">
          <EmailIcon sx={{ color: "white", fontSize: iconSize }} />
          <IconButton target="_blank" rel="noopener noreferrer" href="https://github.com/jercadet"><GitHubIcon sx={{ color: "white", fontSize: iconSize }} /></IconButton>
          <IconButton target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cadetj"><LinkedInIcon sx={{ color: "white", fontSize: iconSize }} /></IconButton>
        </div>
        <div className="flex space-x-32 justify-center">
          <p>cadet.jer01@gmail.com</p>
          <p className="pl-6">https://github.com/jercadet</p>
          <p>www.linkedin.com/in/cadetj</p>
        </div>
      </div>
    </Layout>
  )
}
