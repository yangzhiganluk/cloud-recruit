import {
    URGENT_TASKS,
    RESUME,
    GET_ENTRY_LIST,
    GET_ENTRY_START,
    GET_ENTRY_DONE,
    TASK_PROGRESS,
    SHOW_MEMO_MODAL,
    HIDE_MEMO_MODAL
} from 'constants/home';

const initialState = {
    // urgentTasks: [], // 紧急任务列表
    resumeData: {}, //简历入库情况
    taskProgress: [], // 任务完成指数
    isEntryLoading: false,
<<<<<<< HEAD
    entryPersonList: [] ,//待入职人员列表
    memoModalVisible:false//添加备忘录状态
=======
    entryPersonList: [], //待入职人员列表
    memoModalVisible: false,
    isMemoLoading: false
>>>>>>> 406718e1556f4ef09b0f06151c6bdd1e3d41be71
};

export default function home(state = initialState,actions){
    switch(actions.type){
        case URGENT_TASKS: 
            return {...state,urgentTasks:actions.urgentTasks};
        case RESUME:
            return {...state,resumeData:actions.resumeData};
        case TASK_PROGRESS:
            return {...state,taskProgress:actions.taskProgress};
        case GET_ENTRY_START:
            return {...state,isEntryLoading:true};
        case GET_ENTRY_DONE:
            return {...state,isEntryLoading:false};
        case GET_ENTRY_LIST:
            return {...state,entryPersonList:actions.entryPersonList};
        case SHOW_MEMO_MODAL:
<<<<<<< HEAD
            return {...state,memoModalVisible:true};
        case HIDE_MEMO_MODAL:
            return {...state,memoModalVisible:false};
=======
            return {...state,memoModalVisible: true,isMemoLoading: true};
        case HIDE_MEMO_MODAL:
            return {...state,memoModalVisible: false,isMemoLoading: false};      
>>>>>>> 406718e1556f4ef09b0f06151c6bdd1e3d41be71
        default: 
            return state;
    }
} 