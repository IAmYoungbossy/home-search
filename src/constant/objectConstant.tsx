import {
  BsMic,
  BsGearWide,
  BsThreeDots,
  BsArrowBarUp,
} from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { CgInfo } from "react-icons/cg";
import { BiPoll } from "react-icons/bi";
import { IoMdRocket } from "react-icons/io";
import { AiOutlineTag } from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi";
import { TbSpeakerphone } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { NoteSVG } from "../assets/Svg/SocialSVG";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiChevronDown, FiLink } from "react-icons/fi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoMoonOutline, IoImageOutline } from "react-icons/io5";

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

export const postOptionsArray = [
  { svg: <NoteSVG />, name: "Post" },
  { svg: <IoImageOutline />, name: "Images & Video" },
  { svg: <FiLink />, name: "Link" },
  { svg: <BiPoll />, name: "Poll" },
  { svg: <BsMic />, name: "Talk" },
];

export const BUTTON_TAGS = [
  { svg: <GrAdd />, name: "Budget" },
  { svg: <GrAdd />, name: "Apartment Size" },
  { svg: <GrAdd />, name: "Location" },
  { svg: <AiOutlineTag />, name: "Deal Status" },
];

export const iconsArray = [
  { icon: <IoMdRocket />, name: "Best" },
  { icon: <HiOutlineFire />, name: "Hot" },
  { icon: <BsGearWide />, name: "New" },
  { icon: <BsArrowBarUp />, name: "Top" },
  { icon: <BsThreeDots />, name: "" },
];
