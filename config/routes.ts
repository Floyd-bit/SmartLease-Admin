/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 20:19:49
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-19 10:08:10
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
                ],
              },
              {
                path: '/accounts',
                name: 'account',
                icon: 'crown',
                routes: [
                  {
                    name: 'shop',
                    icon: 'smile',
                    path: '/accounts/shop',
                    component: './ShopCenter',
                  },
                  {
                    name: 'myshop',
                    icon: 'smile',
                    path: '/accounts/myshop',
                    component: './MyShop',
                  },
                ],
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                // component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    name: 'storelist',
                    icon: 'smile',
                    path: '/admin/storelist',
                    component: './StoreList',
                    authority: ['admin'],
                  },
                  {
                    name: 'goodsmanage',
                    icon: 'smile',
                    path: '/admin/goodsmanage',
                    component: './GoodsManage',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/transport',
                name: 'transport',
                icon: 'crown',
                routes: [
                  {
                    name: 'addtemplate',
                    path: '/transport/addtemplate',
                    icon: 'smile',
                    component: 'AddLogistics',
                  },
                  {
                    name: 'templateList',
                    path: '/transport/templateList',
                    icon: 'smile',
                    component: 'TemplateList',
                  },
                ],
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
                    name: 'afterlist',
                    icon: 'smile',
                    path: '/shop/afterlist',
                    component: './GoodsList',
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
