﻿export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
          {
            name: 'register',
            path: '/user/userregister',
            component: './UserRegister',
          },
          {
            name: 'results',
            icon: 'smile',
            path: '/user/userregisterresult',
            component: './UserRegisterResult',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                name: 'analysis',
                icon: 'smile',
                path: '/dashboard',
                component: './MainPage',
              },
              {
                path: '/accounts',
                name: 'account',
                icon: 'crown',
                routes: [
                  {
                    name: 'settings',
                    icon: 'smile',
                    path: '/accounts/accountsettings',
                    component: './AccountSettings',
                  },
                  {
                    path: '/accounts/account',
                    name: 'center',
                    icon: 'smile',
                    component: './AccountCenter',
                  },
                ],
              },
              {
                path: '/',
                component: './Welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'profile',
                path: '/detail',
                component: './OrderDetail',
                hidden: true,
              },
              {
                path: '/shop',
                name: 'list',
                icon: 'crown',
                routes: [
                  {
                    name: 'table-list',
                    icon: 'table',
                    path: '/shop/list',
                    component: './TableList',
                  },
                  {
                    name: 'basic-list',
                    icon: 'smile',
                    path: '/shop/goodslist',
                    component: './GoodsLIst',
                  },
                  {
                    name: 'search-list',
                    icon: 'smile',
                    path: '/shop/commentslist',
                    component: './CommentsList',
                  },
                  {
                    name: 'good-type-list',
                    icon: 'smile',
                    path: '/shop/goodstypelist',
                    component: './GoodsTypeList',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
