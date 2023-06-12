import { SocialType } from "@/components/layout/footer/type";
import social from "@/components/layout/footer/social";
import FooterView from "@/components/layout/footer/FooterView";

const FooterContainer = () => {
  const socialList : SocialType[] = Object.entries(social).map((el) => {
    return {[el[0]]: el[1]}
  });

  return <FooterView social={socialList}/>
}

export default FooterContainer;