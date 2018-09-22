import Loadable from 'react-loadable';
import Loading from 'src/views/loading';

export default [
  {
    path: '/index',
    meta: { title: '首页' },
    icon: 'home',
    component: Loadable({
      loader: () => import('src/views/home/index'),
      loading: Loading
    })
  },
  {
    path: '/index1',
    meta: { title: '测试' },
    icon: 'home',
    component: Loadable({
      loader: () => import('src/views/index'),
      loading: Loading
    })
  },
  {
    path: '/test',
    meta: { title: '测试1' },
    icon: 'home',
    routes: [
      {
        path: '/test/index22',
        meta: { title: '测试22' },
        component: Loadable({
          loader: () => import('src/views/index'),
          loading: Loading
        }),
      }
    ]
  },
  {
    path: '/shop',
    meta: { title: '店铺' },
    icon: 'shop',
    routes: [
      {
        path: '/shop/list',
        meta: { title: '店铺列表' },
        component: Loadable({
          loader: () => import('src/views/shop/list'),
          loading: Loading
        })
      },
      // {
      //   path: '/shop/add',
      //   meta: { title: '添加店铺' },
      //   hidden: true,
      //   component: Loadable({
      //     loader: () => import('src/views/shop/add'),
      //     loading: Loading
      //   })
      // },
      {
        path: '/shop/list2',
        meta: { title: '店铺列表13' },
        routes: [
          {
            path: '/shop/list2/list3',
            meta: { title: '店铺列表' },
            component: Loadable({
              loader: () => import('src/views/shop'),
              loading: Loading
            })
          },
          {
            path: '/shop/list2/add',
            meta: { title: '添加店铺' },
            hidden: true,
            component: Loadable({
              loader: () => import('src/views/shop/add'),
              loading: Loading
            })
          }
        ]
      }
    ]
  }
]

const Login = Loadable({ // 登录页
  loader: () => import('src/views/login/index'),
  loading: () => ('')
})
const NoMatch = Loadable({ // 404页面
  loader: () => import('src/views/noMatch/index'),
  loading: Loading
})

export {
  Login,
  NoMatch
}