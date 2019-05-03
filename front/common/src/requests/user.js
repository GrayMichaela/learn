import request from '../axios'
import {
    host
} from '../host'
const user = {
    list: ({ pageIndex, pageSize }) => request.get(`${host}/user/list`, {
        params: {
            pageIndex, pageSize
        }
    }).then(res => ({ total: res.total, list: res.data })),
    type: {
        list: ({ pageIndex, pageSize }) => request.get(`${host}/user/type/list`, {
            params: {
                pageIndex, pageSize
            }
        }).then(res => ({ total: res.total, list: res.data }))
    }
};
export default user;