import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccordionComponent from '../components/AccordionComponent';

export default function AccordionUsage() {
    // Define unique state for each panel
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    // Handle expansion change
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
     
        <AccordionComponent
        expanded={expanded === 'panel1'} 
        onChange={handleChange} 
        panelId="panel1"
        summaryText="Mobile & Web Application Development"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={1}
        
      />
        <AccordionComponent
        expanded={expanded === 'panel2'}
        onChange={handleChange}
        panelId="panel2"
        summaryText="Maintainance and Upgrades of existing Softwares"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={2}
      />
         <AccordionComponent
        expanded={expanded === 'panel3'}
        onChange={handleChange}
        panelId="panel3"
        summaryText="Graphics Designs"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={3}
      />
        <AccordionComponent
        expanded={expanded === 'panel4'}
        onChange={handleChange}
        panelId="panel4"
        summaryText="UI/UX Design"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={4}
      />
        <AccordionComponent
        expanded={expanded === 'panel5'}
        onChange={handleChange}
        panelId="panel5"
        summaryText="Software Consultancy"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={5}
      />
        <AccordionComponent
        expanded={expanded === 'panel6'}
        onChange={handleChange}
        panelId="panel6"
        summaryText="Third Party Contracts"
        detailsText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        index={6}
      />
  
 

      </div>
    );
  }