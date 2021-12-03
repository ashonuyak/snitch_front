import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import CreatePassword from "../views/CreatePassword";
import ForgotPassword from "../views/ForgotPassword";
import ResetPassword from "../views/ResetPassword";
import CheckEmail from "../views/CheckEmail";
import News from '../views/News';
import Tables from '../views/Tables';
import Insides from '../views/Insides';
import AboutUs from '../views/AboutUs';
import Contacts from '../views/Contacts';

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/CreatePassword",
    name: "CreatePassword",
    component: CreatePassword,
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/CheckEmail",
    name: "CheckEmail",
    component: CheckEmail,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/Tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/Insides",
    name: "Insides",
    component: Insides,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
