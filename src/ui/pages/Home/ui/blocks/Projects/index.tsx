import { Box } from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardComponent } from "./ui/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppButton } from "@/ui/modules/components/AppButton";
import React from "react";

interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
    goToSlide: (slide: number) => void;
    carouselState: {
        currentSlide: number;
        totalItems: number;
    };
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, ...rest }) => {
const { carouselState: { currentSlide } } = rest;
return (
    <div className="carousel-button-group">
        <AppButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <AppButton onClick={() => next()} />
        {/* <AppButton onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </AppButton> */}
    </div>
);
};

export function Projects() {
    return(
        <Box
         sx={{
            padding: "20px"
         }}
        >
            <PageSubtitles subtitle="Projects" />
            <Carousel responsive={responsive} 
             ssr={true} infinite={true}
             autoPlay={true}
             autoPlaySpeed={1000}
             keyBoardControl={true}
            //  customTransition="all .5"
             transitionDuration={500}
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            //  customButtonGroup={<ButtonGroup />}
            //  renderButtonGroupOutside={true}
            >
                {Array.from({ length: 5}).map((_, index) => (
                    <CardComponent key={index} />
                ))}
            </Carousel>
        </Box>
    )
}