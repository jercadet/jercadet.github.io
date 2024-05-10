import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NavPages from "./navPages";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <div className="py-3 border-b-2 border-slate-700">
        <header className="sm:visible sm:relative z-10">
          <nav className="hidden sm:inline-block sm:top-0 sm:left-0 sm:right-0 sm:backdrop-blur">
            <NavPages alignment={"sm:flex sm:justify-center sm:space-x-40"} />
          </nav>
          <div>
            <nav className="sm:hidden">
              <Button onClick={toggleDrawer(true)}>
                <DensityMediumIcon fontSize="large" sx={{ color: "#f5f5f5" }} />
              </Button>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                className="text-slate-400"
              >
                <NavPages alignment={""} />
              </Drawer>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
