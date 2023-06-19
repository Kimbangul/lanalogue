'use client'
import PaginationStyle from "@/components/common/Pagination/PaginationStyle";
import { PaginationPropsType } from "@/components/common/Pagination/type";

const Pagination = ({currentPage, lastPage} : PaginationPropsType) => {

  return(
    <PaginationStyle.Container>
      {
        Array(lastPage).fill('').map((el, idx)=>{
          return(
            <PaginationStyle.Button 
              active={idx+1 === currentPage} 
              key={`pagination${idx}`}>
              {idx+1}
            </PaginationStyle.Button>
          )
        })
      }
     </PaginationStyle.Container>
  )
}

export default Pagination;