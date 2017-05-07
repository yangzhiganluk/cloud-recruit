import * as types from 'constants/login';
import Md5 from 'blueimp-md5';
import {AjaxByPost} from 'utils/ajax';

import store from 'store';
import extend from 'lodash/extend';
import pick from 'lodash/pick';

// Login type
// const USER_LOGIN = {type:types.USER_LOGIN};
const LOGIN_START = {type:types.LOGIN_START};
const LOGIN_DONE = {type:types.LOGIN_DONE};

export const userLogin = (userInfo={},context) => (dispatch,getState) => {
    dispatch(LOGIN_START);
    userInfo.password = Md5(userInfo.password);
    AjaxByPost('/web/login',{
        head: {
            transcode: 'L0001'
        },
        data: userInfo
    })
    .then(res=>{
        if(typeof res === 'object'){
            const data = pick(res,['token','tokenKey']);
            store.set('token',data);
            context.router.push('/');
            // dispatch(extend({},USER_LOGIN,{token:data}));
        }else{
            dispatch(LOGIN_DONE);
        }
    });
}

export const hideLoading = () => (dispatch,getState) => {
    dispatch(LOGIN_DONE);
}

