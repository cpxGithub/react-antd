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
    path: '/table',
    meta: { title: '表格' },
    icon: 'table',
    component: Loadable({
      loader: () => import('src/views/table/index'),
      loading: Loading
    })
  },
  {
    path: '/upload',
    meta: { title: '上传' },
    icon: 'upload',
    routes: [
      {
        path: '/upload/upload1',
        meta: { title: '上传1' },
        component: Loadable({
          loader: () => import('src/views/upload/upload1'),
          loading: Loading
        })
      }
    ]
  },
  {
    path: '/ant',
    meta: { title: 'ant组件' },
    icon: 'ant-design',
    routes: [
      {
        path: '/ant/tab',
        meta: { title: 'tab标签' },
        component: Loadable({
          loader: () => import('src/views/ant/tab'),
          loading: Loading
        })
      },
      {
        path: '/ant/other',
        meta: { title: '其他' },
        routes: [
          {
            path: '/ant/other/form',
            meta: { title: '表单校验' },
            component: Loadable({
              loader: () => import('src/views/ant/form'),
              loading: Loading
            })
          },
          {
            path: '/ant/other/add',
            meta: { title: '添加实例' },
            hidden: true,
            component: Loadable({
              loader: () => import('src/views/ant/add'),
              loading: Loading
            })
          }
        ]
      }
    ]
  },
  {
    path: '/shop',
    meta: { title: '店铺' },
    icon: 'shop',
    routes: [
      {
        path: '/shop/goods-manage',
        meta: { title: '商品管理' },
        routes: [
          {
            path: '/shop/goods-manage/library',
            meta: { title: '商品库' },
            component: Loadable({
              loader: () => import('src/views/shop/goodManage/library'),
              loading: Loading
            })
          },
          {
            path: '/shop/goods-manage/classify',
            meta: { title: '商品分类' },
            component: Loadable({
              loader: () => import('src/views/shop/goodManage/classify'),
              loading: Loading
            })
          },
          {
            path: '/shop/goods-manage/specification',
            meta: { title: '商品规格' },
            component: Loadable({
              loader: () => import('src/views/shop/goodManage/specification'),
              loading: Loading
            })
          },
          {
            path: '/shop/goods-manage/comment',
            meta: { title: '商品评论' },
            component: Loadable({
              loader: () => import('src/views/shop/goodManage/comment'),
              loading: Loading
            })
          }
        ]
      }
    ]
  },
  {
    path: '/richText',
    meta: { title: '富文本' },
    icon: 'desktop',
    component: Loadable({
      loader: () => import('src/views/richText/index'),
      loading: Loading
    })
  }
]

const Login = Loadable({ // 登录页
  loader: () => import('src/views/login/index'),
  loading: () => ('')
})

export {
  Login
}