import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

type pageType = {
    link: string;
    title: string;
  };

export default function NavPages({ alignment }: any) {
    const pages: pageType[] = [
        {link: "/", title: "Home"},
        {link: "/experience", title: "Experience"},
        {link: "/contact", title: "Contact"},
    ]
  return (
    <div>
        <List className={alignment}>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <a href={page.link}>{page.title}</a>
          </ListItem>
        ))}
      </List>
      {/* <ul className={alignment}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
    </div>
  );
}
