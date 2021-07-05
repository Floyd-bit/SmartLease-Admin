export default [
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
            name: '注册结果页',
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
                name: '分析页',
                icon: 'smile',
                path: '/dashboard',
                component: './Dashboard',
              },
              {
                path: '/accounts',
                name: '个人页',
                icon: 'crown',
                routes: [
                  {
                    name: '个人设置',
                    icon: 'smile',
                    path: '/accounts/accountsettings',
                    component: './AccountSettings',
                  },
                  {
                    path: '/accounts/account',
                    name: '个人中心',
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
                path: '/shop',
                name: '商家页',
                icon: 'crown',
                routes: [
                  {
                    name: '查询表格',
                    icon: 'table',
                    path: '/shop/list',
                    component: './TableList',
                  },
                ]
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
