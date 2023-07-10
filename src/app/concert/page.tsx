'use client'
import moment from "moment";

export default function ConcertView() {


  return (
    <>
      <h1>Concert Info</h1>
      <ul>
        <li>
          <h2>title</h2>
          <p>context</p>
          <span>{moment().format('YYYY-MM-DD')}</span>
        </li>
      </ul>
    </>
  )
  
}
