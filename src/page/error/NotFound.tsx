
import {useEffect} from 'react'
import {useNavigate,useLocation } from "react-router-dom";

export default function NotFound(): any {
    // 获取操作路由跳转对象
    const navigate = useNavigate()
    //获取路由对象
    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        if(location.pathname == '/123'){
            // navigate('/123')  // 跳转到指定路由
        }else{
            navigate('/')  // 跳转到主页
        }
      },[])
    return (
        <div className="NotFount">
            您输入的地址栏未找到匹配的页面
        </div>
    );
}