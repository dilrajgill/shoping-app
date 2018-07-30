import { REMOVE_ALL_TODOS,UPDATE_NAME,STEP_1 ,STEP_2, STEP_3 } from './actions';

export interface IAppState {
    lastUpdate: Date;
    myName: string;
    lastFlag: boolean;
    step1: boolean;
    step2: boolean;
    step3: boolean;
}
export const INITIAL_STATE: IAppState = {
    lastUpdate: null,
    myName: 'Initial Name',
    lastFlag:false,
    step1: true,
    step2: false,
    step3: false,

}
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
      case UPDATE_NAME:
            console.log('In swtich: '+UPDATE_NAME);
            console.log('todo:'+action.name);
            return Object.assign({}, state, {
                myName:action.name,
                lastFlag:true,
                lastUpdate: new Date()
            })
         case STEP_1:
            return Object.assign({}, state, {
                step1: true,
                step2: false,
                step3: false,
                lastUpdate: new Date()
            })
           
            case STEP_2:
            return Object.assign({}, state, {
                step1: false,
                step2: true,
                step3: false,
                lastUpdate: new Date()
            })

            case STEP_3:
            return Object.assign({}, state, {
                step1: false,
                step2: false,
                step3: true,
                lastUpdate: new Date()
            })
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                myName: '',
                lastUpdate: new Date()
            })
    }
    return state;
}