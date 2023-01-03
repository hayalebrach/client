
import { actions } from "react-table";
import Cart from "../../components/Cart/Cart";
import * as actionType from "../actions";

const initialState = {
    //קורס מבוקש
    currentCours:"",
    //הכרטיס המבוקש
    currentCard: "",
   //כל הקורסים
    AllCourses:[],
    //המערך של המשתמשים
    usersArr: [],
    //המשתמש הנוכחי
    currentUser:"",
    //בריכה נוכחית
    currentPool: "",
    //הוספת בריכה
    poolsArr: [],
    //כל ההרשאות
    Role: [],
    //כל האיזורים
    Areas: [],
    //כל הימים
    Days: [],
    //המערך של הלוח זמנים
    Schedule: [],
    //מערך הכרטיסים לבריכה מסוימת
    CardsArr: [],
    //מערך הקורסים לבריכה מסוימת
    courses_arr: [],
    //הרשומים לקורס
    CourseToCustomer: [],

    CallUsArr: [],

    sale_arr: [],

    User: null,
    Cart: [],
    //משתמשים לבריכה
    UsersPool: [],
    //הסטוריית קניות המשתמש
    HistoryUser: [],
    //כל המדריכים
    Guide:[],
    Managers: [],


    num: 7
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_GUIDE:{
            console.log("אני פה");
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
            //עדכון מחיר לקורס
            case actionType.UPDATE_COURS:
                {
                    console.log(action.payload);
                    let newArr3 = state.courses_arr;
                    let cours=newArr3.find(x=>x.Id==action.payload.Id);
                    newArr3.pop(cours);
                    newArr3.push(action.payload);
                    return {
                        ...state,
                        courses_arr: newArr3   
                    }
                }
        //מחיקת קורס

        case actionType.DELETE_COURSE: {
            alert("קורס זה נמחק מרשימת הקורסים לבריכה זו");
        }
        //קבלת כרטיס על פי ת"ז
        case actionType.GET_BY_ID_CARD: {
            return {
                ...state,
                currentCard:action.payload
            }

        }
        //היסטורית משתמש לבריכה מסוימת
        case actionType.GET_HISTORY_OF_USER_TO_POOL: {
            return {
                ...state,
                HistoryUser: action.payload
            }

        }
        //ייבוא המשתמשים לבריכה מסוימת
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
        //מחיקת כרטיס
        case actionType.DELETE_CARD: {
            alert("כרטיס זה נמחק מרשימת הכרטיסים לבריכה זו");
        }
       
        //עדכון כרטיס
        case actionType.UPDATE_CARD:
            
            let newArr5 = [...state.CardsArr];
            for (let i = 0; i < newArr5.length; i++) {
                if (newArr5[i].Id == action.payload.Id) {
                    newArr5[i] = action.payload;
                }
            }
            return {
                ...state,
                CardsArr: newArr5
            }
        //ייבוא הכרטיסים לבריכה מסוימת
        case actionType.GET_CARDS:
            return {
                ...state,
                CardsArr: action.payload
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
        //הוספת לוח זמנים למערך שבstate החיצוני
        case actionType.ADD_SCHEDULE_TO_ARRAY:
            return {
                ...state,
                Schedule: [...state.Schedule, action.payload]
            }
        //כל הימים
        case actionType.ALL_DAYS:
            return {
                ...state,
                Days: action.payload
            };
        //הוספת בריכה
        case actionType.ADD_POOL: {
            return {

                ...state,
                poolsArr: [...state.poolsArr, action.payload],
                currentPool: action.payload
            };
        }
        //כל האיזורים
        case actionType.ALL_EREAS:
            return {
                ...state,
                Erea: action.payload
            };

        //הוספת הרשאה
        case actionType.ADD_ROLE:
            return {
                ...state,
                Role: [...state.Role, ...action.payload]
            };
        //כל ההרשאות
        case actionType.ALL_ROLE:
            return {
                ...state,
                Role: action.payload
            };
        //הרשמה
        case actionType.SIGNUP: {
            return {
                ...state,
                usersArr: [...state.usersArr, action.payload],
            };
        }
        //למנהל הראשי-הצגת המשתמשים באתר
        case actionType.GET_USERS:
            return {
                ...state,
                usersArr: action.payload
            };
        //מציג קורסים לבריכה
        case actionType.GET_COURSES:
            return {
                ...state,
                courses_arr: action.payload
            };

            case actionType.GET_All_COURSES:
            return {
                ...state,
                AllCourses:action.payload
            };
            


        //מציג בריכות
        case actionType.GET_POOLS:
            return {
                ...state,
                poolsArr: [...action.payload]
            };


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


        //   //עדכון מחיר לכרטיס
        //   case actionType.UPDATE_CARD:
        //       console.log("UPDATE_CARD");
        //   return{
        //      ...state,
        //      Card:action.payload
        //   } 



        //הוספת מבצע
        case actionType.ADD_SALE: {
            return {
                ...state,
                sale_arr: [...action.payload]
            };
        }
        //הוספת קורס
        case actionType.ADD_COURS: {
            return {
                ...state,
                courses_arr: [...state.Courses, action.payload]
            }
        }

        
        //הוספת מנהל
        case actionType.ADD_MANAGER: {
            return {

                ...state,
                Managers: [...state.Managers, action.payload]
            };
        }

        //כל המנהלים
        case actionType.GET_MANAGERS: {
            return {

                ...state,
                Managers: action.payload
            };
        }

        case actionType.GET_ALL_AREAS: {
            return {

                ...state,
                Areas: action.payload
            };
        }
        
        //הוספת כרטיס
        case actionType.ADD_CARD: {
            return {
                ...state,
                CardsArr: [...state.CardsArr, action.payload]
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

            case actionType.SAVE_POOL_BY_ID:
            {
                const index = state.poolsArr.findIndex(x => x.Id == action.payload)

                return {
                    ...state,
                    currentPool: state.poolsArr[index],
                }
            }

            
        // מציאת בריכה לפי שם
        case actionType.SEARCH_POOL: {
            let pool = null;
            for (let i = 0; i < state.poolsArr.length; i++) {
                if (state.poolsArr[i].Name == action.payload)
                    pool = state.poolsArr[i];


            }

            return {
                ...state,
                currentPool: pool
            }
        }
        //ממוצע של כל ההזמנות

        //בריכה הנוכחית שנבחרה

        case actionType.SAVE_POOL_BY_MANAGER: {
            // let pooll = null;
            const index = state.poolsArr.findIndex(x => x.IdUser == action.payload)
            // for (let i = 0; i < state.poolsArr.length; i++)
            //     if (state.poolsArr[i].IdUser == action.payload)
            //         pooll = state.poolsArr[i];

            return {

                ...state,
                currentPool: state.poolsArr[index]
            }
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
                CourseToCustomer:[...action.payload]
            };
        }

        


        //עדכון מחיר לקורס
        case actionType.UPDATE_COURS:
            {
                let newArr3 = state.courses_arr;
                for (let i = 0; i < newArr3.length; i++) {
                    if (newArr3[i].Id == action.payload.Id)
                        newArr3[i] = action.payload;
                }
                return {
                    ...state,
                    courses_arr: newArr3

                }
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
            



        
        //בחירת קורסים
        case actionType.CHOOSE_COURS: return state;
        //למנהל הבריכה -הצגת ההזמנות מבריכה מסוימת
        case actionType.GET_ORDERS: return state;

        //תשלום בכרטיס אשראי
        case actionType.PAY_CRADIT_CARD: return state;

        //עדכון שעות
        case actionType.UPDATE_HOUR: return state;
        default: return state;
    }
}
export default reducer;