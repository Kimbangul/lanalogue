import moment from "moment";
import Guestbook from "@/components/guestbook/GuestbookStyle";

const GuestbookItem =() => {
  return(
    <Guestbook.Item.Container>
      {/* <Guestbook.Item.Title>방명록 타이틀</Guestbook.Item.Title> */}
      <Guestbook.Item.InfoContainer>
       <Guestbook.Item.TextContainer>
         <Guestbook.Item.Nickname>닉네임</Guestbook.Item.Nickname>
        <Guestbook.Item.Time>{moment().fromNow()}</Guestbook.Item.Time>
       </Guestbook.Item.TextContainer>
       <Guestbook.Control.Container>
        <Guestbook.Control.Item>수정</Guestbook.Control.Item>
        <Guestbook.Control.Item>삭제</Guestbook.Control.Item>
      </Guestbook.Control.Container>
      </Guestbook.Item.InfoContainer>
      <Guestbook.Item.Contents>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, fugiat! Ea quia quae soluta, perferendis rerum iste eaque non tempore facilis esse, aspernatur eveniet porro expedita vero illo nam possimus.
      </Guestbook.Item.Contents>
  </Guestbook.Item.Container>
  )
}

export default GuestbookItem;