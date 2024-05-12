import { Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NavPages from "./navPages";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState(document.title);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  return (
    <div className="w-auto">
      <div className="fixed bg-soot/50 backdrop-blur-md top-0 left-0 right-0 py-3 border-b-2 border-slate-700 z-10">
        <header className="sm:visible ">
          <nav className="hidden sm:inline-block">
            <NavPages alignment={"sm:flex justify-center sm:space-x-48 text-xl"} />
          </nav>
            <nav>
          <div className="sm:hidden">
              <div className="flex justify-between ml-4">
                <Button onClick={toggleDrawer(true)}>
                  <DensityMediumIcon
                    fontSize="large"
                    sx={{ color: "#99f6e4", alignItems: "start" }}
                  />
                </Button>
                <h1 className="text-4xl pr-20">{pageTitle}</h1>
                <span />
              </div>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                  WebkitBackdropFilter: "blur(12px)",
                  backdropFilter: "blur(12px)",
                }}
                PaperProps={{
                  sx: {
                    width: "45%",
                    fontSize: "22px",
                    paddingLeft: "24px",
                    paddingTop: "12px",
                    minHeight: "75px",
                    lineHeight: "60px",
                    color: "whitesmoke",
                    backgroundColor: "#202124",
                  },
                }}
              >
                <NavPages alignment={""} />
              </Drawer>
          </div>
            </nav>
        </header>
      </div>
    </div>
  );
}
