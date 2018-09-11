import Loadable from 'react-loadable';
import React from 'react'

export default [
  {
    path: '/index',
    meta: { title: '首页' },
    component: Loadable({
      loader: () => import('src/views/index'),
      loading: () => (<div>66</div>)
    })
  },
  {
    path: '/shop',
    meta: { title: 'Navigation One' },
    component: Loadable({
      loader: () => import('src/views/shop'),
      loading: () => (<div>66</div>)
    }),
    routes: [
      {
        path: '/shop/list',
        meta: { title: '店铺列表' },
        component: Loadable({
          loader: () => import('src/views/shop'),
          loading: () => (<div>66</div>)
        }),
        routes: [
          {
            path: '/shop/list1',
            meta: { title: '店铺列表1' },
            component: Loadable({
              loader: () => import('src/views/shop'),
              loading: () => (<div>66</div>)
            }),
          }
        ]
      },
      {
        path: '/shop/list2',
        meta: { title: '店铺列表13' },
        component: Loadable({
          loader: () => import('src/views/shop'),
          loading: () => (<div>66</div>)
        })
      }
    ]
  }
]