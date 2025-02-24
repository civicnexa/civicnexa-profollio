
import React, { useState } from 'react'
import { CardComponent } from '../components/CardComponent'
import { Box, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
// export function TestimonialCarousel() {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     }
//   };
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
//   return (
//     <Box sx={{ position: 'relative', width: '100%' }}>
//       <Carousel 
//         responsive={responsive} 
//         ssr={true} 
//         infinite={true}
//         // autoPlay={true}
//         autoPlaySpeed={4000}
//         keyBoardControl={true}
//         transitionDuration={500}
//         removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//         customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
//            top: {
//             xxs:'-45%',
//             sm: "-50%",
//             md:'35%'
//            },
//            right: {
//             xxs: "-40%",
//             sm: "-45%",
//             md:'8%',
//            },
//            height: "100px",
//            display: "flex",
//            alignItems: "center",
//            justifyContent:{md:'space-between',xxs:'center'},
//            gap: {
//             xxs: 2,
//             xs: 4,
//            },
//            width:'100%',
         
//          }} goToSlide={handleGoToSlide} carouselState={carouselState}  />}
//         renderButtonGroupOutside={true}
//       >
//         {Array.from({ length: 1 }).map((_, index) => (
//           <Box
//             key={index}
//             sx={{
//               width: '100%',
//               height:'100%',
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             <CardComponent />
//           </Box>
//         ))}
//       </Carousel>
//     </Box>
//   );
// }
export function TestimonialCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const testimonials = Array.from({ length: 1 }); // Change length as needed
  const totalItems = testimonials.length;

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  const handlePrevious = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleGoToSlide = (slide: number) => {
    if (swiper) swiper.slideTo(slide);
  };

  const carouselState = {
    currentSlide: swiper?.activeIndex || 0,
    totalItems,
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Swiper
        onSwiper={(swiperInstance: SwiperType) => setSwiper(swiperInstance)}
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        keyboard={{ enabled: true }}
      >
        {testimonials.map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardComponent />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Conditional Navigation Buttons - Only show if more than one slide */}
      {testimonials.length > 1 && (
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
            onClick={handlePrevious}
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
      )}

      {/* Styles for click handling */}
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

