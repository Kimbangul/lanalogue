'use client'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import  type { Swiper as SwiperType } from 'swiper';
import SwiperInit from 'swiper';
import { useEffect, useRef } from 'react';

import theme from '@/utils/Theme';
import info from "@/components/discography/info"
import Discography from '@/components/discography/DiscographyStyle';
import useResize from '@/utils/useResize';

import 'swiper/css';

export default function DiscographyView() {
  const swiperRef = useRef<SwiperType | null>(null);
  const size = useResize();

  const swiperOption : SwiperProps = {
    spaceBetween: 50,
    slidesPerView:1,
    centeredSlides: true,
    loop: true,
    breakpoints:{
      [theme.screenSize.tb]:{
        slidesPerView:2,
        centeredSlides: false,          
      },
      [theme.screenSize.pc]:{
        slidesPerView:3,      
        centeredSlides: true,       
      },
      [theme.screenSize["pc-l"]]:{
        slidesPerView:4,
        centeredSlides: true,
      }
    },
    onInit:(swiper)=> {
      swiperRef.current = swiper}
  }

  useEffect(()=>{
    if (!size.width) return;

    if(size.width < theme.screenSize.mb) {
       swiperRef.current?.destroy(true, true);
    }
    else if (size.width >= theme.screenSize.mb && swiperRef .current?.destroyed){
      swiperRef.current = new SwiperInit('.swiper', swiperOption);
    }
  }, [size]);

  return (
    <>
    <Discography.Title>Discography</Discography.Title>
    <Discography.Container>
      <Swiper {...swiperOption}>
      {
            info.map((el, idx) => {
              return  (
                <SwiperSlide key={`album${idx}`}>
                  <Discography.Item />
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
