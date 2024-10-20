import * as React from 'react';
import AccordionComponent from '../components/AccordionComponent';
import { Box } from '@mui/material';

const data = [
  {
    summaryText: "Mobile & Web Application Development",
    detailedText: "We develop both Mobile App and Web App software solutions, leveraging cutting-edge technologies to address your unique business challenges and drive operational efficiency."
  },
  {
    summaryText: "Maintainance and Upgrades of existing Softwares",
    detailedText: "We provide continuous support and enhancement services, ensuring that your software remains up-to-date, secure, and optimized for peak performance."
  },
  {
    summaryText: "Graphics Designs",
    detailedText: "Our creative team delivers visually striking and impactful designs that resonate with your brand identity, helping you stand out in the competitive market."
  },
  {
    summaryText: "UI/UX Design",
    detailedText: "We craft intuitive and engaging user interfaces and experiences tailored to meet your business goals and user needs, ensuring seamless interaction and aesthetic appeal."
  },
  {
    summaryText: "Software Consultancy",
    detailedText: "Our expert consultants offer strategic guidance to help you make informed decisions on technology adoption, process improvement, and digital transformation."
  },
  {
    summaryText: "Third Party Contracts",
    detailedText: " If you've secured a contract but lack the expertise or resources to execute it, we step in to deliver top-tier solutions on your behalf. Our team ensures seamless execution and project management, allowing you to meet your client's expectations while maintaining your business reputation."
  },
]

export default function AccordionUsage() {
    // Define unique state for each panel
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    // Handle expansion change
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Box>
        {data.map((item,index) => (
          <AccordionComponent
            expanded={expanded === `panel${index + 1}`} 
            onChange={handleChange} 
            panelId={`panel${index + 1}`}
            summaryText={item.summaryText}
            detailsText={item.detailedText}
            index={index + 1}
            key={index}
          />
        ))}
      </Box>
    );
  }