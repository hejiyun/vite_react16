
import { createSlice } from '@reduxjs/toolkit';

// 创建一个接口类型， 方便指定store数据的类型定义及各属性的type.
// 可以看做是为你即将设定的对象和对象里的各项数据设置一个可以被ts精准辨识的类型，防止使用时发生类型错误的问题
export interface testState {
  count: number; // 设定即将被创建的对象拥有count属性，指代计数次数 并且该属性只接收数字类型的数据
  opreateName: Array<string>  // 设定即将被创建的对象拥有opreateName属性，指代操作类型，并且该属性是一个
  // 由且只能是字符串组成的数组
}

// 创建需要存储在redux中的数据对象，
const initialState: testState = {
    count: 0,
    opreateName: [ "add", "del", 'edit', 'search']
};

// 创建一个 Slice
export const test = createSlice({
  // 命名空间
  name: 'test',

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    //创建修改count的方法
    setCount(state, { payload }){
      console.log(payload, '方法传递的修改值');
      state.count = payload.count;
    }
  },
});

// 导出 reducers 方法
export const { setCount } = test.actions;

// 默认导出
export default test.reducer;