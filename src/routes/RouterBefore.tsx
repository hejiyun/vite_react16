import {useNavigate,useLocation,useResolvedPath } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import {urlAuth} from './index'
import {useEffect,useState} from 'react'
const RouterBefore = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    // 先获取当前路由的对象属性
    let curRoute = urlAuth(location.pathname)
    // 然后获取当前状态是否登录
    let Login =sessionStorage.getItem('login')
    // 然后就是进行判断当前路由是否满足登录和权限状态， 满足就继续，不满足就跳转主页或登录页
    if(curRoute && curRoute.auth && Login === 'false'){
      setAuth(false)
      navigate('/')
    }else{
      setAuth(true)
    }
  },[])
  // 如果最后通过了验证， 那么就放置一个子路由占位outlet标签，否则什么都不放。
  return auth?<Outlet/>:null
} 
 
export default RouterBefore