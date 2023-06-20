import moment from "moment";
import Guestbook from "@/components/guestbook/GuestbookStyle";
import { GuestbookItemPropsStyle } from "@/components/guestbook/type";

const GuestbookItem = ({nickname, regDate, idx, content } : GuestbookItemPropsStyle) => {
  return(
    <Guestbook.Item.Container>
      {/* <Guestbook.Item.Title>방명록 타이틀</Guestbook.Item.Title> */}
      <Guestbook.Item.InfoContainer>
       <Guestbook.Item.TextContainer>
         <Guestbook.Item.Nickname>{nickname}</Guestbook.Item.Nickname>
        <Guestbook.Item.Time>{moment(regDate).fromNow()}</Guestbook.Item.Time>
       </Guestbook.Item.TextContainer>
       <Guestbook.Control.Container>
        <Guestbook.Control.Item>수정</Guestbook.Control.Item>
        <Guestbook.Control.Item>삭제</Guestbook.Control.Item>
      </Guestbook.Control.Container>
      </Guestbook.Item.InfoContainer>
      <Guestbook.Item.Contents>
        {content}
      </Guestbook.Item.Contents>
  </Guestbook.Item.Container>
  )
}

export default GuestbookItem;