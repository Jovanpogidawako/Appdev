
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Main/Home.vue') },
      { path: '/ecom', component: () => import('pages/Ecom/Ecommerce.vue') },
      { path: '/map', component: () => import('pages/Main/Mapping.vue') },
      { path: '/sched', component: () => import('pages/Main/Scheduling.vue') },
      { path: '/track', component: () => import('pages/Main/Tracking.vue') },
      { path: '/mess', component: () => import('pages/Main/Messaging.vue') },
      { path: '/prof', component: () => import('pages/Main/my_profile.vue') },
      { path: '/details', component: () => import('pages/Main/Details.vue') },
      { path: '/check', component: () => import('pages/Ecom/Checkout.vue') },
      { path: '/cart', component: () => import('pages/Ecom/AddtoCart.vue') },



    ]
  },
  {
    path: '/layout',
    component: () => import('layouts/Layout.vue'),
  },
  {
    path:'/log',
    component: () => import('layouts/Login/Login.vue'),
  },
  {
    path:'/for',
    component: () => import('layouts/Login/Forgot.vue'),
  },
  {
    path:'/reg',
    component: () => import('layouts/Login/Register.vue')
  },
  {
    path:'/admin',
    component: () => import('layouts/Admin.vue'),
    children:[
      { path: '/charts', component: () => import('pages/Main/admin/Charts.vue') },
      { path: '/tables', component: () => import('pages/Main/admin/Tables.vue') },



    ],
  },


]

export default routes
