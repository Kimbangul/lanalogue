import moment from "moment";
import { Concert } from "@/components/concert/ConcertStyle";

const ConcertItem = () => {
  return(
    <Concert.Item.Container>
      <Concert.Item.Inner>
      <Concert.Item.Img>image box</Concert.Item.Img>
      <Concert.Item.TextBox>
        <Concert.Item.Title>title</Concert.Item.Title>
        <Concert.Item.Contents>context</Concert.Item.Contents>
        <Concert.Item.Time>{moment().format('YYYY-MM-DD')}</Concert.Item.Time>
      </Concert.Item.TextBox>
      </Concert.Item.Inner>
   </Concert.Item.Container>
  )
}

export default ConcertItem;