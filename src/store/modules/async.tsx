import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

// 模拟一个正常数据列表请求，获取到结果之后， 将数据填充到redux数据模块中
// 异步 actions
export const getList = createAsyncThunk('async/getList',
    async ({ currentPage = 1, pageSize = 5 }: { currentPage?: number, pageSize?: number, type?: string }) => {
        // 这里不使用await， 模拟异步请求等待时间
        console.log('进来')
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: { list: [1, 2, 3, 4, 5], total: 5 } });
            }, 3000);
        });

        try {
            var [res] = await Promise.all([promise]);
        } catch (error) {
            console.error(error);
        }
        const payload = _.get(res, 'data', { list: [], total: 0 });
        console.log(payload);
        return payload;
    },
);

export interface asyncState {
    total: number;
    list: Array<any>
  }

// 创建需要存储在redux中的数据对象，
const initialState: asyncState = {
    total: 0,
    list: []
};

export const async = createSlice({
    // 命名空间
    name: "async",
    // state
    initialState,
    // 同步 actions
    reducers: {},
    // redux数据模块的监听器， 可以监听这些异步action的状态
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            console.log(payload, 'zheli')
            state.list = payload.list;
            state.total = payload.total;
        })
    }
});

console.log(async)
// 导出 reducers 方法
export const { } = async.actions;

// 默认导出
export default async.reducer;
