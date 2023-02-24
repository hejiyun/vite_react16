import {useRoutes} from "react-router-dom";
import { Suspense, lazy } from 'react'
import KeepAlive from 'react-activation'
import App from '../App'
import test1 from '@/page/test1'
// KeepAlive标签一定一定要加id！！！
// 要缓存的路由不能懒加载！！!
//如果懒加载的话第一次点击不能渲染出组件,要缓存的路由不能懒加载！！
//   const App = lazy(() => import("../App")) 
// 在嵌套关系中， 默认路由用path:''指代，即只访问父路由的情况下， outlet处子路由会显示默认子路由
// children中的子路由起始不需要加/， 通过 父路由地址/子路由地址可访问对应子页面
// 这里暂定为有name的需要缓存
const routes = [
  {
    name: 'fdjj',
    path: '/',
    auth:false,
    component: App
  },
  { 
    path: '/test',
    auth:false,
    component:lazy(() => import('@/page/test')),
    children:[
      {
        name:'123444',
        path: 'test1',
        auth:false,
        component:test1,
      },
      {
        path: 'test2',
        auth:false,
        component:lazy(() => import('@/page/test2')),
      },
      {
        path: 'test3',
        auth:false,
        component:lazy(() => import('@/page/test3')),
      },
      // 默认路由
      {
        path: '',
        auth:false,
        component:test1,
      },
    ]
  },
  { 
    path: '*',
    auth:false,
    component:lazy(() => import('@/page/error/NotFound'))
  },
 { 
    path: '/redirect',
    auth:false,
    component: lazy(() => import('@/page/Redirect/Redirect')),
  }
]
 
// 路由处理方式
const generateRouter = (routers:any) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
   
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      {
        item.name ? ( <KeepAlive id={item.name}>
            <item.component />
        </KeepAlive>) : (<item.component />)
      }
    </Suspense>
    return item
  })
}
 
const Router = () => useRoutes(generateRouter(routes))

//根据路径获取路由
const getUrlAuth = (routers:any, path:String)=>{
  for (const item of routers) {
    if (item.path === path) return item
    if (item.children) {
      const target:any = getUrlAuth(item.children, path)
      if (target) return target
    }
  }
  return null
}
const urlAuth = (path:String)=>{
  let auth = null
  auth = getUrlAuth(routes,path)
  return auth
}

export{ Router,urlAuth}