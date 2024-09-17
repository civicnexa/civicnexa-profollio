import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material';


interface AccordionComponentProps {
    expanded: boolean;
    onChange: (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    panelId: string;
    summaryText: string;
    detailsText: string;
    index: number;

  }
const AccordionComponent:React.FC<AccordionComponentProps> = ({ 
  expanded, 
  onChange, 
  panelId, 
  summaryText, 
  detailsText, 
  index, 
}) => {
  // Utility function to format the index
  const formatIndex = (num:number) => num.toString().padStart(2, '0');
  const theme = useTheme();
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange(panelId)}
      sx={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #A1A4B2',  paddingTop:'12px',
        paddingBottom:'12px',}}
    >
      <AccordionSummary
        expandIcon={expanded ? <ArrowDownwardIcon sx={{ color: theme.accordion.accordionTextColor }} /> : <ArrowForwardIcon sx={{ color: (theme) => theme.accordion.accordionTextColor }} />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
        sx={{
          color: theme.accordion.accordionSummaryColor,
          padding:'0',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px', color: theme.accordion.accordionTextColor }}>
          {formatIndex(index)}.
        </span>
        {summaryText}
      </AccordionSummary>
      <AccordionDetails sx={{  color: theme.accordion.accordionTextColor }}>
        {detailsText}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
