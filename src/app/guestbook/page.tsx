'use client'

import moment from "moment";
import Guestbook from "@/components/guestbook/GuestbookStyle";


export default function GuestbookView() {
  return (
    <>
     <Guestbook.Container>
      <h1>Guestbook</h1>
        <ul>
          <li>
            <h2>방명록 타이틀</h2>
            <span>닉네임</span>
            <span>{moment().fromNow()}</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, fugiat! Ea quia quae soluta, perferendis rerum iste eaque non tempore facilis esse, aspernatur eveniet porro expedita vero illo nam possimus.</p>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
     </Guestbook.Container>
    </>
  )
}
