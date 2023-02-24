
import {useState} from 'react'
import {Link, Outlet,useNavigate} from "react-router-dom";
import { useParams, useSearchParams,useLocation } from 'react-router-dom'

export default function Test(): any {
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    // 定义需要向子组件传递的对象，并且提供修改对象的方法
    const [obj, setObj] = useState({id:123,list: [1,2,3,4]})
    const childef = (func:Function) => {
        func()
    }
    // const params = useParams();
    // const { id } = params;
    // let [searchParams, setSearchParams] = useSearchParams();
    // const cid = searchParams.getAll('cid');
    // const name = searchParams.get('name');
    // let location = useLocation();
    // const { mid } = location.state;
    // console.log(id, 'params传值')
    // console.log(cid,name, 'search传值')
    // console.log(mid, 'state传值')
    return (
        <div className="Test">
            <p>{obj.id}/{obj.list}</p>
             <button onClick={() => navigate('/test/test1')}>
                分页1
            </button>
            <button onClick={() => navigate('/test/test2')}>
                分页2
            </button>
            <button onClick={() => navigate('/test/test3')}>
                分页3
            </button>
            {/*  使用outlet的context属性传递obj */}
            <Outlet context={[obj, setObj, childef]} />
            <h1><Link to="/">Vite + React</Link></h1>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            
        </div>
    );
}