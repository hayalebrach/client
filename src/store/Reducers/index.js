
import { actions } from "react-table";
import * as actionType from "../actions";

const initialState = {
    //יום מבוקש
    currentSchedule:"",
    //קורס מבוקש
    currentCours:"",
    //הכרטיס המבוקש
    currentCard: "",
    //המשתמש הנוכחי
    currentUser:"",
    //בריכה נוכחית
    currentPool: "",
    //המערך של המשתמשים
    usersArr: [],
    //הוספת בריכה
    poolsArr: [],
    //כל ההרשאות
    Role: [],
    //כל האיזורים
    Areas: [],
    //כל הימים
    Days: [],
    //מערך הכרטיסים לבריכה מסוימת
    CardsArr: [],
    //מערך הקורסים לבריכה מסוימת
    courses_arr: [],
    //הרשומים לקורס
    CourseToCustomer: [],
    UsersPool:[],
    CallUsArr: [],
    Cart: [],
    //הסטוריית קניות המשתמש
    HistoryUser: [],
    //כל המדריכים
    Guide:[],
    Managers: [],
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        //-------------------כרטיסים---------------------------------------
                //קבלת כרטיס 
                case actionType.GET_CARD: {
                    return {
                        ...state,
                        currentCard:action.payload
                    }
        
                }
                //ייבוא הכרטיסים לבריכה מסוימת
                case actionType.GET_CARDS:
                    return {
                        ...state,
                        CardsArr: action.payload
                    }
        //----------------------בריכה---------------------------------------
        //===============================================================
        //היסטורית משתמש לבריכה מסוימת
        case actionType.GET_HISTORY_OF_USER_TO_POOL: {
            return {
                ...state,
                HistoryUser: action.payload
            }

        }
        // //ייבוא המשתמשים לבריכה מסוימת
        case actionType.GET_USERS_BY_ID_POOL: {
            let newArr6 = action.payload;
            let trueNewArr6 = [];
            let numUser = null;
            let flag = true;
            for (let i = 0; i < newArr6.length; i++) {
                flag = true;
                numUser = newArr6[i].IdUser;
                for (let k = i + 1; k < newArr6.length; k++) {
                    if (numUser == newArr6[k].IdUser)
                        flag = false;
                }
                if (flag == true) {
                    trueNewArr6.push(newArr6[i]);
                }

            }
            return {
                ...state,
                UsersPool: trueNewArr6
            }
        }
  
//מציג בריכות
case actionType.GET_POOLS:
    return {
        ...state,
        poolsArr: [...action.payload]
    };

//מחיקת בריכה
case actionType.DELETE_POOLS:
    let newArr2 = [...state.poolsArr];
    for (let i = 0; i < newArr2.length; i++) {
        if (newArr2[i].Id === action.payload) {
            console.log("hola" + newArr2[i]);
            newArr2.pop(newArr2[i]);
        }
    }
    return {
        ...state,
        poolsArr: [...newArr2]
    }


  //בריכה הנוכחית שנבחרה
        //לא לשנות פונקציה זו!!
        case actionType.SAVE_POOL:
            {
                return {
                    ...state,
                    currentPool: action.payload
                }
            }
//================================================================
        case actionType.GET_SCHEDULE:{
            
            return{
                 ...state,
            currentSchedule:action.payload
            }
        }
        case actionType.GET_GUIDE:{
            let g=[];
            let arr=state.courses_arr;
            console.log(arr);
            for(let i=0;i<action.payload.length;i++){
                
                 if(arr.find(x=>x.IdUser==action.payload[i].Id)!=null);
                      g.push(action.payload[i]);
            }
            console.log(g);
           return{
               ...state,
                Guide:g
           }
        }
        //קבלת קורס על פי ת"ז
        case actionType.GET_COURS:{
            let c=state.courses_arr.find(x=>x.Id==action.payload);
            console.log(c);
            return{
                ...state,
                currentCours:c
            }

        }
        //עדכון משתמש
        case actionType.UPDATE_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        //מקבלת את המשתמש מהמערך שבסטייט
        case actionType.GET_BY_ID_USER:
            let user = null;

            for (let i = 0; i < state.usersArr.length; i++) {
                if (state.usersArr[i].Id == action.payload) {
                    user = state.usersArr[i];
                    state.CallUsArr.push(user);
                }
            }
            return {
                ...state,
                User: user
            }
        //כל הימים
        case actionType.ALL_DAYS:
            return {
                ...state,
                Days: action.payload
            };
        //כל ההרשאות
        case actionType.ALL_ROLE:
            return {
                ...state,
                Role: action.payload
            };
        //מציג קורסים לבריכה
        case actionType.GET_COURSES:
            {
                console.log(action.payload);
            return {
                ...state,
                courses_arr: action.payload
            }};
        //התחברות-login
        case actionType.LOGIN:
            return {
                ...state,
                currentUser: action.payload
            };

        case actionType.GET_BY_ID:
            return {
                ...state,
                User: action.payload
            };
        case actionType.GET_ALL_AREAS: {
            return {

                ...state,
                Areas: action.payload
            };
        }
        //איפוס משתמש
        case actionType.EXIT: {
            return {
                ...state,
                currentUser: "",
                courses_arr: [],
                currentPool: "",
                CardsArr: [],
                Cart:[],
                CourseToCustomer:[]

            };
        }  
        case actionType.COURSE_ENROLLMENT: {
            
            return {
                ...state,
                CourseToCustomer: [...state.CourseToCustomer, action.payload]
            };
        }

        case actionType.COURSES_TO_USER: {
          
            return {
                ...state,
                CourseToCustomer:action.payload
            };
        }
            case actionType.ADD_TO_CART:
            
                return {
                    ...state,
                    Cart:[...state.Cart,action.payload]

                }

                case actionType.DELETE_FROM_CART:{

                    let newArr2 = [...state.Cart];
                    newArr2.pop(action.payload);

                    return {
                        ...state,
                        Cart:newArr2
    
                    }

                }
                case actionType.PURCHASING:
            
                return {
                    ...state,
                    HistoryUser:[...state.HistoryUser,action.payload]

                }
        default: return state;
    }
}
export default reducer;