import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDocTitle } from "../../utils/functions";

type pageType = {
  link: string;
  title: string;
};

export default function NavPages({ alignment }: any) {
  const pages: pageType[] = [
    { link: "/", title: "Home" },
    { link: "/experience", title: "Experience" },
    { link: "/contact", title: "Contact" },
  ];
  const [active, setActive] = useState(getDocTitle());

  useEffect(() => {
    setActive(getDocTitle());
  }, []);

  return (
    <div>
      <List className={alignment}>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <a
              href={page.link}
              className={`${
                active === page.title
                  ? "text-teal-200 underline underline-offset-8"
                  : "text-whitesmoke hover:text-teal-600"
              }`}
            >
              {page.title}
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
