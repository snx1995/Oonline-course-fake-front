import Vue from 'vue'
import Router from 'vue-router'

import HomeMain from "../home/components/HomeMain";

import course from "./course";
import videoRouter from "./videoRouter";
import testRouter from "./testRouter";
import userCenterRouter from "./userCenterRouter";
import blogRouter from "./blog/blogRouter";
import writeBlogRouter from "./blog/writeBlogRouter";

import VueCookies from "vue-cookies";
Vue.use(Router);
Vue.use(VueCookies);


export default new Router({
  routes: [
    {
      path: "/",
      component: HomeMain
    },
    course,
    videoRouter,
    userCenterRouter,
    blogRouter,
    writeBlogRouter,
    testRouter,
  ]
})
