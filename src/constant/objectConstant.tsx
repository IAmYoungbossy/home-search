import { CgInfo } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";

export const LOG_IN_PANEL = [
  { icon: <IoMoonOutline />, name: "Dark Mode" },
  { icon: <RxQuestionMarkCircled />, name: "Help Center" },
  {
    icon: <CgInfo />,
    name: "More",
    arrow: <FiChevronDown />,
  },
  {
    icon: <IoNewspaperOutline />,
    name: "Terms & Policies",
    arrow: <FiChevronDown />,
  },
  { icon: <TbSpeakerphone />, name: "Advertise On Reddit" },
  { icon: <IoLogInOutline />, name: "Log In / Sign Up" },
];
