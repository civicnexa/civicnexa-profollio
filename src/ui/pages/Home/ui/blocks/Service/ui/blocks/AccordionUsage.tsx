import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AccordionUsage() {
    // Define unique state for each panel
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    // Handle expansion change
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ width: '100%', backgroundColor: 'transparent',  borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel1' ? <ArrowDownwardIcon  sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ 
                color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px', color: '#A1A4B2', }}>
              01.
            </span>
            Mobile & Web Application Development
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        
  
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel2' ? <ArrowDownwardIcon sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ 
                color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px',color: '#A1A4B2', }}>
              02.
            </span>
            Maintainance and Upgrades of existing Softwares
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
       
       
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel3' ? <ArrowDownwardIcon sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ 
                color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px', color: '#A1A4B2', }}>
              03.
            </span>
            Graphics Designs
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
       
       
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel4' ? <ArrowDownwardIcon sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel4-content"
            id="panel4-header"
            sx={{ 
                color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px',color: '#A1A4B2', }}>
              04.
            </span>
           UI/UX Design
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
       
       
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel5' ? <ArrowDownwardIcon sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel5-content"
            id="panel5-header"
            sx={{ 
                color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px', color: '#A1A4B2', }}>
              05.
            </span>
            Software Consultancy
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
       
       
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
          sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #A1A4B2' }}
        >
          <AccordionSummary
            expandIcon={expanded === 'panel6' ? <ArrowDownwardIcon sx={{ color: '#A1A4B2' }}  /> : <ArrowForwardIcon sx={{ color: '#A1A4B2' }}  />}
            aria-controls="panel6-content"
            id="panel6-header"
            sx={{ 
              color: '#B8BBCC',
              padding: '0',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            <span style={{ fontSize: '12px', marginBottom: '4px', marginRight: '6px', color:'#A1A4B2' }}>
              06.
            </span>
            Third Party Contracts
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#A1A4B2' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
       
       
        </Accordion>

      </div>
    );
  }