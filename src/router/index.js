import Loadable from 'react-loadable';
import React from 'react'

export default [
  {
    path: '/index',
    meta: { title: '首页' },
    icon: 'home',
    breadcrumbName: '首页',
    component: Loadable({
      loader: () => import('src/views/index'),
      loading: () => (<div>66</div>)
    })
  },
  {
    path: '/index1',
    meta: { title: '测试' },
    icon: 'home',
    component: Loadable({
      loader: () => import('src/views/index'),
      loading: () => (<div>66</div>)
    })
  },
  {
    path: '/index11',
    meta: { title: '测试1' },
    icon: 'home',
    component: Loadable({
      loader: () => import('src/views/index'),
      loading: () => (<div>66</div>)
    }),
    routes: [
      {
        path: '/index22',
        meta: { title: '测试22' },
        component: Loadable({
          loader: () => import('src/views/index'),
          loading: () => (<div>66</div>)
        }),
      }
    ]
  },
  {
    path: '/shop',
    // exact: true,
    meta: { title: '店铺' },
    icon: 'shop',
    // component: Loadable({
    //   loader: () => import('src/views/shop'),
    //   loading: () => (<div>66</div>)
    // }),
    routes: [
      {
        path: '/shop/list',
        meta: { title: '店铺列表' },
        component: Loadable({
          loader: () => import('src/views/shop/list'),
          loading: () => (<div>66</div>)
        }) 
      },
      {
        path: '/shop/list2',
        meta: { title: '店铺列表13' },
        component: Loadable({
          loader: () => import('src/views/shop'),
          loading: () => (<div>66</div>)
        }),
        routes: [
          {
            path: '/shop/list1',
            meta: { title: '店铺列表' },
            component: Loadable({
              loader: () => import('src/views/test'),
              loading: () => (<div>66</div>)
            })
          }
        ]
      }
    ]
  }
]