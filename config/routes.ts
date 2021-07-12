/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 20:19:49
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-12 10:05:58
 */
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
                path: '/',
                component: './MainPage',
              },
              {
                path: '/goods',
                name: 'goods',
                icon: 'crown',
                routes: [
                  {
                    name: 'goodsTypeList',
                    icon: 'smile',
                    path: '/goods/goodstypelist',
                    component: './GoodsTypeList',
                  },
                  {
                    name: 'addgoods',
                    icon: 'smile',
                    path: '/goods/addgoodsform',
                    component: './AddGoodsForm',
                  },
                ],
              },
              {
                path: '/pictures',
                name: 'pictures',
                icon: 'crown',
                routes: [
                  {
                    name: 'album',
                    icon: 'smile',
                    path: '/pictures/listsearchprojects',
                    component: './ListSearchProjects',
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
              /*
      {
        name: 'profile',
        path: '/detail',
        component: './OrderDetail',
        hidden: true,
      },
      */
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
