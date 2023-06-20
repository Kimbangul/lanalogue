'use client';

import { useEffect } from "react";
import Guestbook from "@/components/guestbook/GuestbookStyle";
import useInput from "@/utils/useInput";

const GuestbookInput = () => {
  const email = useInput();
  const password = useInput();
  const textarea = useInput();

  useEffect(()=>{
    console.log(email.inputVal);
    console.log(password.inputVal);
    console.log(textarea.inputVal);
  }, [email.inputVal, password.inputVal, textarea.inputVal]);


  return (
    <Guestbook.Input.Container>
      <Guestbook.Input.InfoContainer>
        <Guestbook.Input.Input 
          type="email"  
          onChange={email.onChangeInput}
          value={email.inputVal}
        />
        <Guestbook.Input.Input
         type="password" 
         onChange={password.onChangeInput}
         value={password.inputVal}
        />
      </Guestbook.Input.InfoContainer>
      <Guestbook.Input.Textarea as="textarea" onChange={textarea.onChangeInput}>
        {textarea.inputVal}
      </Guestbook.Input.Textarea>
      <Guestbook.Input.Button>작성하기</Guestbook.Input.Button>
    </Guestbook.Input.Container>
  )
}

export default GuestbookInput;