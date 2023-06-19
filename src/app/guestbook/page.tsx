'use client'

import GuestbookItem from "@/components/guestbook/GuestbookItem";
import Guestbook from "@/components/guestbook/GuestbookStyle";
import Pagination from "@/components/common/Pagination/Pagination";


export default function GuestbookView() {
  return (
    <>
     <Guestbook.Container>
      <Guestbook.Title>Guestbook</Guestbook.Title>
        <ul>
         <GuestbookItem />
        </ul>
        <Pagination currentPage={1} lastPage={5}/>
     </Guestbook.Container>
    </>
  )
}
