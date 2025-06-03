import Jobs from "../pages/lending/jobs";
import {
  Chat,
  Dashboard,
  LendingPage,
  Login,
  Profile,
  SearchUsers,
} from "../pages";
import IRoute from "./types";
import {
  TbHome,
  TbLayoutDashboard,
  TbMessage,
  TbSearch,
  TbUser,
} from "react-icons/tb";
import News from "../pages/lending/news";
import About from "../pages/lending/about";
import Contact from "../pages/lending/contact";

export const publicRoutes = [
  {
    title: "lendin",
    path: "/",
    component: LendingPage,
  },
  {
    title: "Jobs",
    path: "/jobs",
    component: Jobs,
  },
  {
    title: "News",
    path: "/news",
    component: News,
  },
  {
    title: "About",
    path: "/about",
    component: About,
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
];

export const privateRoutes: IRoute[] = [
  // user routes
  {
    title: "Asosiy",
    path: "/",
    component: Dashboard,
    icon: TbHome,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    icon: TbLayoutDashboard,
    isMenu: false,
    isRole: ["user"],
  },
  {
    title: "Profile",
    path: "/profile",
    component: Profile,
    icon: TbUser,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Izlash",
    path: "/search-users",
    component: SearchUsers,
    icon: TbSearch,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Chat",
    path: "/chat",
    component: Chat,
    icon: TbMessage,
    isMenu: true,
    isRole: ["user"],
  },
];
