import Guestbook from "@/components/guestbook/GuestbookStyle";

const GuestbookInput = () => {
  return (
    <Guestbook.Input.Container>
      <Guestbook.Input.InfoContainer>
        <Guestbook.Input.Input type="email" /><Guestbook.Input.Input type="password" />
      </Guestbook.Input.InfoContainer>
      <Guestbook.Input.Textarea />
    </Guestbook.Input.Container>
  )
}

export default GuestbookInput;