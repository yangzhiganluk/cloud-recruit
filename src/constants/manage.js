/**
 * ===员工管理===
 */


/**
 * ===员工名册===
 */

 //获取员工管理人员统计信息
 export const GET_MANAGE_START = 'GET_MANAGE_START';
 export const GET_MANAGE_END = 'GET_MANAGE_END';
 export const GET_MANAGE_STATISTICS = 'GET_MANAGE_STATISTICS';

 //员工管理人员信息列表查询
 export const LOAD_LIST_START = 'LOAD_LIST_START';
 export const LOAD_LIST_DONE = 'LOAD_LIST_DONE';
 export const LOAD_CREW_LIST = 'LOAD_CREW_LIST';

 //导入excel人员modal
 export const SHOW_UPLOAD_CLERK_MODAL = 'SHOW_UPLOAD_CLERK_MODAL';
 export const HIDE_UPLOAD_CLERK_MODAL = 'HIDE_UPLOAD_CLERK_MODAL';

 //开始上传员工excel
 export const UPLOAD_CLERK_START = 'UPLOAD_CLERK_START';
 export const UPLOAD_CLERK_DONE = 'UPLOAD_CLERK_DONE';
 export const SET_RESETFORM_TRUE = "SET_RESETFORM_TRUE";
 export const SET_RESETFORM_FALSE = "SET_RESETFORM_FALSE";

 //入职人员基本信息查询
export const QUERY_EMPLOYEE_START = 'QUERY_EMPLOYEE_START';
export const QUERY_EMPLOYEE_DONE = 'QUERY_EMPLOYEE_DONE';
export const QUERY_EMPLOYEE_LIST = 'QUERY_EMPLOYEE_LIST';


 /**
 * ===档案管理===
 */

 //档案管理在职人员信息列表
 export const GET_ARCHIVES_START = 'GET_ARCHIVES_START';
 export const GET_ARCHIVES_DONE = 'GET_ARCHIVES_DONE';
 export const GET_ARCHIVES_LIST = 'GET_ARCHIVES_LIST';

 //档案管理离职人员信息列表
 export const GET_LEAVEARCHIVES_START = 'GET_LEAVEARCHIVES_START';
 export const GET_LEAVEARCHIVES_DONE = 'GET_LEAVEARCHIVES_DONE';
 export const GET_LEAVEARCHIVES_LIST = 'GET_LEAVEARCHIVES_LIST';

 //档案管理在职、离职人员数据
 export const GET_ARCHIVES_DATA = 'GET_ARCHIVES_DATA';
 //员工详情
 export const SHOW_CLERK_DETAIL = 'SHOW_CLERK_DETAIL';

 //table数据切换
 export const ARCHIVES_TABLE_DATA = 'ARCHIVES_TABLE_DATA';

 //档案管理个人材料Modal
 export const SHOW_PERSONALMATERIAL_MODAL = 'SHOW_PERSONALMATERIAL_MODAL';
 export const HIDE_PERSONALMATERIAL_MODAL = 'HIDE_PERSONALMATERIAL_MODAL';


 /**
 * ===全员概览===
 */


 //  全员概览-员工性质分布信息
export const GET_EMPLOYEE_QUALITY = 'GET_EMPLOYEE_QUALITY';


 /**
 * ===组织架构===
 */

//  组织架构-部门列表查询
export const GET_DEPARTMENT_LIST = 'GET_DEPARTMENT_LIST';
//  组织架构-根据部门id查询子部门及人员
export const GET_DEPARTMENT_STAFF = 'GET_DEPARTMENT_STAFF';
//  组织架构-添加或者修改部门
export const ADD_EDIT_DEPARTMENT = 'ADD_EDIT_DEPARTMENT';
//  组织架构-删除部门
export const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT';
