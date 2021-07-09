export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/',
            component: './User/login',
          },
          {
            name: 'register',
            path: '/userregister',
            component: './UserRegister',
          },
          {
            name: 'results',
            icon: 'smile',
            path: '/userregisterresult',
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
                path: '/',
                component: './Dashboard',
              },
              {
                path: '/goods',
                name: 'goods',
                icon: 'crown',
                routes: [
                  {
                    name: '商品列表',
                    icon: 'smile',
                    path: '/goods/goodstypelist',
                    component: './GoodsTypeList',
                  },             
                  {
                    name: '添加商品',
                    icon: 'smile',
                    path: '/goods/addgoodsform',
                    component: './AddGoodsForm',
                  },
                ]
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
