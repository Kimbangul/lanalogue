import { MenuType } from "@/components/layout/header/type";
import { faHouse, faIcons,faMusic, faCompactDisc, faBook, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const menu : MenuType = {
  "home": {
    "link": "/",
    "icon": faHouse,
    "title": "home"
  },
  "introduce": {
    "link": "introduce",
    "icon": faIcons,
    "title": "introduce"
  },
  "member": {
    "link": "#",
    "icon": faPeopleGroup,
    "title": "member"
  },
  "discography":{
    "link": "discography",
    "icon": faCompactDisc,
    "title": "discography"
  },
  "concert info": {
    "link": "#",
    "icon": faMusic,
    "title": "concert"
  },
  "guestbook": {
    "link": "guestbook",
    "icon": faBook,
    "title": "guestbook"
  }
}

export default menu;