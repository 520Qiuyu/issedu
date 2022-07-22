import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // 根路径，重定向到首页
  {
    path: "/",
    name:"root",
    redirect(to) {
      return { name: "application" };
    },
  },
  {
    path: "/application",
    name: "application",
    children: [
      // application根路径，重定向到appdashboard
      {
        path: "",
        name:'app_root',
        redirect:()=> {
          return { name: "appcourseintro" };
        },
      },
      // 首页
      {
        path: "appdashboard",
        name: "appdashboard",
        component: () => import("@/views/Home/index.vue"),
      },
      // 课程信息
      {
        path:"appcourseintro",
        name:"appcourseintro",
        component:()=>import("@/views/CourseInfo/index.vue")
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
