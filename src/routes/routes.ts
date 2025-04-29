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

export const publicRoutes = [
  {
    title: "lendin",
    path: "/",
    component: LendingPage,
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
