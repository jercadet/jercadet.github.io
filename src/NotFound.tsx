import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-9xl">404</h1>
      <h1 className="text-6xl">Page Not Found</h1>
      <p className="text-3xl">
        The page you are looking for does not exist. Sorry!
      </p>
      <Button href="/" size="large" variant="contained" endIcon={<HomeIcon />}>
        Go back Home
      </Button>
    </div>
  );
}
