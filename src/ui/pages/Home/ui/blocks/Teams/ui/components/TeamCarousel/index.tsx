import React, { useCallback, useState } from 'react'
import { CardComponent } from "../CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
import { ButtonGroup } from '@/ui/modules/components/CarouselCustomComponent';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import {  IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Team1 from '../../assets/images/abiola.jpeg';
import Team2 from '../../assets/images/adebare.jpeg';
import Team3 from '../../assets/images/adeola.jpeg';
import Team4 from '../../assets/images/michael.jpeg';
import Team5 from '../../assets/images/gafar.jpeg';

const data = [
  {
    name: "Balogun Micheal",
    position: "Team Lead",
    link: "https://www.linkedin.com/in/balogun-micheal-7599141a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Team4
  },
  {
    name: "Oladunjoye Abiola",
    position: "Lead Engineer",
    link: "https://www.linkedin.com/in/abiola-oladunjoye-8b61351a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: Team1
  },
  {
    name: "Akinsemoyin Abdul Gafar",
    position: "FrontEnd Engineer",
    link: "https://www.linkedin.com/in/abdul-gafar-akinsemoyin-64450a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Team5

  },
  {
    name: "Ajibade Yakub",
    position: "BackEnd Engineer",
    link: "https://www.linkedin.com/in/yakub-ajibade-3954451b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Team2
  },
  {
    name: "Nweke Chidimma Callisa",
    position: "FrontEnd Engineer",
    link: "https://www.linkedin.com/in/harqheem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
 
  },
  {
    name: "Bamgbelu Adeola",
    position: "Business Support Officer",
    link: "https://www.linkedin.com/in/adeola-bamgbelu-558349279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Team3
  },
  {
    name: "Owolabani Ayobami",
    position: "FrontEnd Developer Intern",
    link: "https://www.linkedin.com/in/owolabani-ayobami-17753b1a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
]


export function TeamCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const handleNext = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={setSwiper}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          464: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{ width: '100%' }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                margin: {
                  md: '0 10px',
                  xxs: '100px 0'
                },
                position: 'relative'
              }}
            >
              <CardComponent 
                name={item.name}
                position={item.position}
                href={item.link}
                image={item.image}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          top: {
            xxs: '0',
            md: '-30%'
          },
          right: '0',
          height: '100px',
          width: 'fit-content',
          alignItems: 'center',
          gap: 4,
          zIndex: 10, 
          pointerEvents: 'auto' 
        }}
      >
        <IconButton 
          onClick={handlePrev}
          sx={{
            border: '1px solid',
            borderColor: theme => theme.palette.secondary.main,
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.background.default,
            '&:hover': {
              bgcolor: theme => theme.palette.secondary.main
            },
            zIndex: 10
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton 
          onClick={handleNext}
          sx={{
            border: '1px solid',
            borderColor: theme => theme.palette.secondary.main,
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.background.default,
            '&:hover': {
              bgcolor:theme => theme.palette.secondary.main
            },
            zIndex: 10
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Keep styles for click handling */}
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

// export function TeamCarousel() {
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
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalItems = 5;

//   const handleNext = () => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
//   };

//   const handlePrevious = () => {
//       setCurrentSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems);
//   };

//   const handleGoToSlide = (slide: number) => {
//       setCurrentSlide(slide);
//   };

//   const carouselState = {
//       currentSlide,
//       totalItems,
//   };

// return (
//   <Box sx={{ position: "relative" }}>
//      <Carousel responsive={responsive} 
//       ssr={true} 
//       infinite={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       keyBoardControl={true}
//      renderDotsOutside={true}
//     //  customTransition="all .5"
//       transitionDuration={500}
//       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//       customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
//         top: {
//           xxs:'0',
//           md:'-30%'
//         },
//         right: "0",
//         height: "100px",
//         width: "fit-content",
//         display: "flex",
//         alignItems: "center",
//         gap: 4
//       }} goToSlide={handleGoToSlide} carouselState={carouselState} />}
//       renderButtonGroupOutside={true}
//     >
//     {data.map((item, index) => (
//       <Box
//           key={index}
//           sx={{ margin: {md:'0 10px',xxs:'100px 0'}, position: 'relative' }}
//       >
//           <CardComponent name={item.name} position={item.position} href={item.link} />
//       </Box>
//     ))}
        
//   </Carousel>
      
//   </Box>
// );
// }


