'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { useEffect, useRef } from 'react';

import theme from '@/utils/Theme';
import info from "@/components/discography/info"
import Discography from '@/components/discography/DiscographyStyle';
import useResize from '@/utils/useResize';

import 'swiper/css';
import { SwiperOptions } from 'swiper';

export default function DiscographyView() {
  const swiperRef = useRef<SwiperType | null>(null);
  const swiper = useSwiper();
  const size = useResize();

  useEffect(()=>{
    if (!size.width) return;
    console.log(swiperRef);
    if(size.width < theme.screenSize.tb) {
       swiperRef.current?.destroy();
    }
    else if (size.width > theme.screenSize.tb && swiperRef.current?.destroyed){
      // swiper.init();
      console.log(swiperRef.current);
    }
  }, [size]);


  const swiperOption : SwiperOptions = {
    spaceBetween: 50,
    slidesPerView:1,
    centeredSlides: true,
    loop: true,
    breakpoints:{
      [theme.screenSize.tb]:{
        slidesPerView:2             
      },
      [theme.screenSize.pc]:{
        slidesPerView:3             
      },
      [theme.screenSize["pc-l"]]:{
        slidesPerView:4
      }
    },

  }

  return (
    <>
    <Discography.Title>Discography</Discography.Title>
    <Discography.Container>
      <Swiper 
      {...swiperOption}     
      onInit={(swiper)=> {
      swiperRef.current = swiper}
    }>
      {
            info.map((el, idx) => {
              return  (
                <SwiperSlide key={`album${idx}`}>
                  <Discography.Item>
                   
                  </Discography.Item>
                  <Discography.Text.Container>
                    <Discography.Text.Title>{el.title}</Discography.Text.Title>
                    <Discography.Text.Release>{el.release}</Discography.Text.Release>
                  </Discography.Text.Container>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </Discography.Container>
    </>
  )
}
