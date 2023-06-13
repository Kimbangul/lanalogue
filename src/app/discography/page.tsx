'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/utils/Theme';
import info from "@/components/discography/info"
import Discography from '@/components/discography/DiscographyStyle';

import 'swiper/css';

export default function DiscographyView() {
  return (
    <>
    <Discography.Title>Discography</Discography.Title>
    <Discography.Container>
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            [theme.screenSize.tb]:{
              slidesPerView:2             
            },
            [theme.screenSize.pc]:{
            slidesPerView:3             
            },
            [theme.screenSize["pc-l"]]:{
            slidesPerView:4
            }
          }}
      >
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
