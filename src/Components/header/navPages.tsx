import { List, ListItem } from "@mui/material";
import React from "react";
import { sitePages } from "../../Database";
import { useSelector } from "react-redux";
import { JcadetState } from "../../store";

// Type for page containing the link and title of the page
type pageType = {
  link: string;
  title: string;
};

// Subcomponent for the header that builds the links to the other pages
export default function NavPages({ alignment }: any) {
  // List of pages with their links and title
  const pages: pageType[] = sitePages;

  const active = useSelector(
    (state: JcadetState) => state.pageReducer.title
  );

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
