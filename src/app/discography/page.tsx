'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
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
          slidesPerView={4}
          centeredSlides={true}
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
