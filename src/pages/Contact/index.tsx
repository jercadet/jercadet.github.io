import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

// link to Material UI Snackbar doc:
// https://mui.com/material-ui/react-snackbar/

export default function Contact() {
  const iconSize = 60;
  const email = "cadet.jer01@gmail.com";
  document.title = "Contact";
  const [sbOpen, setSbOpen] = useState(false);
  const [clipboardStatus, setClipboardStatus] = useState("");

  // handleClose function used from example from Material UI docs on Snackbar
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSbOpen(false);
  };

  // action function used from example from Material UI docs on Snackbar
  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div className="space-y-12">
      <h1 className="text-4xl">Contact Me!</h1>
      <h2 className="text-2xl">Feel free to connect with me!</h2>
      <div className="grid-cols-1 sm:flex sm:space-x-20 lg:space-x-60 space-y-12 sm:space-y-0 justify-center">
        <div>
          <IconButton
            className="hover:text-teal-200"
            rel="noopener noreferrer"
            onClick={() => {
              try {
                navigator.clipboard.writeText(email);
                setClipboardStatus("Copied Email! :)");
              } catch {
                setClipboardStatus("Sorry, unable to copy email this way :(");
              } finally {
                setSbOpen(true);
              }
            }}
          >
            <EmailIcon sx={{ color: "white", fontSize: iconSize }} />
          </IconButton>
          <p>{email}</p>
        </div>
        <div>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jercadet"
            className="hover:text-teal-200"
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
            className="hover:text-teal-200"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: iconSize }} />
          </IconButton>
          <p>linkedin.com/in/cadetj</p>
        </div>
      </div>

      {/* Snackbar component used from example from Material UI docs on Snackbar */}
      <Snackbar
        open={sbOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        message={clipboardStatus}
        action={action}
      />
    </div>
  );
}
