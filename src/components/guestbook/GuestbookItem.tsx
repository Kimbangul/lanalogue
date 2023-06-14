import moment from "moment";

const GuestbookItem =() => {
  return(
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
  )
}

export default GuestbookItem;