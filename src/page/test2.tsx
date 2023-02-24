import {useState, useEffect} from 'react'
import {Link, useOutletContext} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getList } from "@/store/modules/async";
import _ from 'lodash';
import type { AnyAction } from "@reduxjs/toolkit";


export default function Test(): any {
    // const context = useOutletContext();
    // 这里注意， 同样需要声明参数类型
    const [obj, setObj,childef] = useOutletContext<[object, Function,Function]>();
    // console.log(context, '传递下来的参数')
    console.log(obj, '传递过来的值',setObj)
    // 获取store中的方法
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList({ currentPage: 2, pageSize: 10}) as unknown as AnyAction);
    }, [])

    const { list, total } = useSelector((store: any) => store.async);

    const toParrentclick = () => {
        console.log('提供给父元素调用的方法')
    }


    return (
        <div className="Test">
            <button onClick={() => setObj((obj:object) => obj={id: 344 , list: [123,213,444]})}>设置传值</button>
            <h1><Link to="/">children + React</Link></h1>
            <p>测试异步actions</p>
            {/* 将子组件中需要被调用的toParrentclick作为形参传递给父组件即可 */}
            <p onClick={ () => childef(toParrentclick)}>测试父组件调用子组件方法</p>
            <div>total: {total}</div>
            <ul style={{ padding: 0 }}>list:
                {_.map(list, (item: number, key: number) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
}