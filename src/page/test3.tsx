import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '@/store/modules/test';

export default function Test(): any {

     // 通过useDispatch 派发事件
     const dispatch = useDispatch();

     // 通过useSelector直接拿到store中定义的value
     const { count, opreateName } = useSelector((store: any) => store.test);
    console.log(opreateName)
     const [value, setValue] = useState(count);
 
     useEffect(() => {
         // 监听 counter 变化
         console.log(count,'count变化了');
     }, [count])
    return (
        <div className="Test">
            {opreateName}
            <h1><Link to="/">children + React</Link></h1>
            <button onClick={() => {setValue(value + 1); dispatch(setCount({ count: value + 1 }))}}>
            3count is {count}
            </button>
        </div>
    );
}