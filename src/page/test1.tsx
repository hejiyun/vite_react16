
import {useState} from 'react'
import {Link,useOutletContext} from "react-router-dom";

export default function Test(): any {
    const [obj, setObj,childef] = useOutletContext<[object, Function,Function]>();
    const [count, setCount] = useState(0)
    const toParrentclick = () => {
        console.log('提供给父元素调用的方法child1')
    }
    return (
        <div className="Test">
             <p onClick={ () => childef(toParrentclick)}>测试父组件调用子组件方法</p>
            <h1><Link to="/">children + React</Link></h1>
            <button onClick={() => setCount((count) => count + 1)}>
            1count is {count}
            </button>
        </div>
    );
}