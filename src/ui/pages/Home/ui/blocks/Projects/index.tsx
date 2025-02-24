import { Box, IconButton} from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardProject } from "./ui/components";

import React, { useState } from "react";

import xkartImg from './ui/assets/images/xkart.png';
import sparkImg from './ui/assets/images/spark.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const data = [
  {
    name: "X-Kart Racing Series",
    link: "http://www.xkartrace.com/",
    img: xkartImg
  },
  {
    name: "Spark by Civicnexa Digital Solutions",
    link: "#",
    img: sparkImg,
  },
]




export function Projects() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const totalItems = data.length;

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  const handlePrevious = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleGoToSlide = (slide: number) => {
    if (swiper) swiper.slideTo(slide);
  };

  // const carouselState = {
  //   currentSlide: swiper?.activeIndex || 0,
  //   totalItems,
  // };

  return (
    <Box
      sx={{
        padding: {
          xxs: "20px 16px",
          sm: "20px 80px"
        },
        marginBottom: "96px",
        position: "relative",
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <PageSubtitles subtitle="Projects" />
        
        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            zIndex: 10,
          }}
        >
          <IconButton 
            onClick={handlePrevious}
            sx={{
              border: '1px solid',
              borderColor:  theme => theme.palette.secondary.main,
              backgroundColor: theme => theme.palette.primary.main,
              color: theme => theme.palette.background.default,
              '&:hover': {
                bgcolor:  theme => theme.palette.secondary.main
              },
              zIndex: 10
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton 
            onClick={handleNext}
            sx={{
              border: theme => theme.palette.secondary.main,
              borderColor: theme => theme.palette.secondary.main,
              backgroundColor: theme => theme.palette.primary.main,
              color: theme => theme.palette.background.default,
              '&:hover': {
                bgcolor:  theme => theme.palette.secondary.main
              },
              zIndex: 10
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
      
      <Box sx={{ position: 'relative', width: '100%', marginTop: '80px' }}>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={30}
          onSwiper={setSwiper}
          keyboard={{ enabled: true }}
          breakpoints={{
            // mobile
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // tablet
            464: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // desktop
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  padding: '10px',
                }}
              >
                <CardProject 
                  img={item.img} 
                  href={item.link} 
                  name={item.name} 
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <style>
        {`
          .swiper-slide {
            pointer-events: auto;
          }
          .swiper-wrapper {
            pointer-events: auto;
          }
        `}
      </style>
    </Box>
  );
}
// export function Projects() {
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3,
//           slidesToSlide: 1,
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//           slidesToSlide: 1,
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1,
//         }
//       };
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const totalItems = 5;

//     const handleNext = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
//     };

//     const handlePrevious = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems);
//     };

//     const handleGoToSlide = (slide: number) => {
//         setCurrentSlide(slide);
//     };

//     const carouselState = {
//         currentSlide,
//         totalItems,
//     };

//     return(
//         <Box
//          sx={{
//             padding: {
//               xxs: "20px 16px",
//               sm: "20px 80px"
//             },
//             marginBottom: "96px",
//             position: "relative",
       
//          }}
//         >
//             <PageSubtitles subtitle="Projects" />
//             <Carousel responsive={responsive} 
//              ssr={true} 
//             //  infinite={true}
//             //  autoPlay={true}
//              autoPlaySpeed={4000}
//              keyBoardControl={true}
//              transitionDuration={500}
//              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//              customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
//                 top: {
//                   xxs:'0%',
//                   md:'0'
//                 },
//                 right: {
//                   xxs:'10%',
//                   md:'10%',
//                 },
//                 height: "100px",
//                 width: "fit-content",
//                 display: "flex",
//                 alignItems: "center",
              
//                 gap: 4,
//                 marginTop:'30px'
//               }} goToSlide={handleGoToSlide} carouselState={carouselState}  />}
//              renderButtonGroupOutside={true}
//             >
//                 {data.map((item, index) => (
//                     <Box
//                     key={index}
//                     sx={{
//                       width: '100%', // Make the card occupy full width
//                       height:'100%',
//                       marginTop: '80px', // Add padding around the card
                   
//                     }}
//                   >
//                     {/* <CardComponent img={item.img} link={item.link} name={item.name} /> */}
//                     <CardProject img={item.img} href={item.link} name={item.name} />
//                   </Box>
//                 ))}
//             </Carousel>
//         </Box>
//     )
// }