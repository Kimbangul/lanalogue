'use client'

import GuestbookItem from "@/components/guestbook/GuestbookItem";
import Guestbook from "@/components/guestbook/GuestbookStyle";
import Pagination from "@/components/common/Pagination/Pagination";


export default function GuestbookView() {
  return (
    <>
     <Guestbook.Container>
      <Guestbook.Title>Guestbook</Guestbook.Title>
        <Guestbook.List>
         <GuestbookItem idx={1} nickname="nick1" regDate="2023-06-20 19:00:00" content="sample"/>
         <GuestbookItem idx={2} nickname="nick2" regDate="2023-06-15 19:00:00" content="sample"/>
         <GuestbookItem idx={3} nickname="nick3" regDate="2023-06-20 03:00:00" content="sample"/>
        </Guestbook.List>
        <Guestbook.Pagination.Container>
          <Pagination currentPage={1} lastPage={5}/>
        </Guestbook.Pagination.Container>
     </Guestbook.Container>
    </>
  )
}
