import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import ResultPolls from "../views/ResultPolls.vue";
import CastVote from "../views/CastVote.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Test from "../views/Test.vue";


const routes = [
//   { path: "/", component: Home },
//   { path: "/poll/:id", component: Poll }
{
  path:'/login',
  component:Login
},
{
  path:'/signup',
  component:SignUp
},
{
  path:'/',
  component:Home,
   meta: { requiresAuth: true }
},
{
  path:'/create', 
  component:Create,
  meta: { requiresAuth: true }
},

{
path:'/result',
component:ResultPolls,
meta: { requiresAuth: true }
},
{
  path:'/cast-vote/:optionId?',
  name:'CastVote',
  component:CastVote,
  meta: { requiresAuth: true }
},
{
  path:'/motion',
  component:Test,
  meta: { requiresAuth: true }
}
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // redirect to login
  } else {
    // console.log('hhhhh')

    next(); // continue
  }
});

export default router;
