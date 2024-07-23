import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setActiveItem } from "../pages/Experience/reducer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { JcadetState } from "../store";

// A component for an item in an accordian list
export default function AccordionItem({
  panel,
  company,
  role,
  body,
}: {
  panel: String;
  company: String;
  role: String;
  body: any;
}) {
  const expNameStyle = "sm:text-4xl text-3xl text-left text-slate-300 mb-2";
  const text_slate_300 = "rgba(203, 213, 225, 0.2)";

  const dispatch = useDispatch();

  const expanded = useSelector(
    (state: JcadetState) => state.experienceReducer.expanded
  );

  console.log(expanded)

  const handleChange =
    (panel: String) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      dispatch(setActiveItem(newExpanded ? panel : ""));
    };

  return (
    <div>
      <Accordion
        expanded={expanded === panel}
        onChange={handleChange(panel)}
        sx={{
          bgcolor: `${text_slate_300}; blur(5px)`,
          color: `rgb(203, 213, 225)`,
          fontSize: "20px",
          textAlign: "left",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2 className={`${expNameStyle} md:block pr-3`}>{company}</h2>
          <h2 className={`${expNameStyle} italic hidden lg:block`}>
            {role ? `- ${role}` : ""}
          </h2>
        </AccordionSummary>
        <AccordionDetails>{body}</AccordionDetails>
      </Accordion>
    </div>
  );
}
