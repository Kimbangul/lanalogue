'use client'
import info from "@/components/discography/info"

export default function DiscographyView() {
  return (
    <>
      <ul>
        {
          info.map((el, idx) => {
            return  (
              <li key={`album${idx}`}>
                <h2>{el.title}</h2>
                <span>{el.release}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
