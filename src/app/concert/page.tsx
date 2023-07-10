'use client'
import { Concert } from "@/components/concert/ConcertStyle";
import ConcertItem from "@/components/concert/ConcertItem";

export default function ConcertView() {


  return (
    <>
     <Concert.Container>
      <Concert.Title>Concert Info</Concert.Title>
        <Concert.List>
         <ConcertItem />
         <ConcertItem />
         <ConcertItem />
        </Concert.List> 
     </Concert.Container>
    </>
  )
  
}
