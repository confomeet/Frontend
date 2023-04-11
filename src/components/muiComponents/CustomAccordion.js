import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "./index";

export default function RoundedWhiteAccordion({
  title,
  children,
  disabled,
  defaultExpanded,
  icon,
  ...props
}) {
  return (
    <Accordion disabled={disabled} defaultExpanded={defaultExpanded} {...props}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          {title}
          {icon}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box width="100%">{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}
