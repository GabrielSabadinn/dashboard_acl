import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import CadastrarCurso from  "@/views/CadastrarCurso.vue";
import DemaisCursos from  "@/views/DemaisCursos.vue";
import informacoesComplementares from "@/views/InformacoesComplementares.vue";
import AulasEAD from "@/views/AulasEAD.vue";
import {getToken} from '../utils/cookie'

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/CadastrarCurso",
    name: "CadastrarCurso",
    component: CadastrarCurso,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/DemaisCursos",
    name: "DemaisCursos",
    component: DemaisCursos,
  },
  {
    path: "/informacoesComplementares",
    name: "informacoesComplementares",
    component: informacoesComplementares,
  },
  {
    path: "/AulasEAD",
    name: "AulasEAD",
    component: AulasEAD,
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

const whiteList = ['Sign In']

router.beforeEach((to, from, next) => {
  const requiresAuth = !whiteList.includes(to.name);
  
  if (requiresAuth) {
    const accessToken = getToken('accessToken');
    if (accessToken) {
   
      next();
    } else {

      next({ name: 'Sign In' });
    }
  } else {

    next();
  }
});

export default router;