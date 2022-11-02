import * as actionType from "../actions";

const initialState = {
    //הכרטיס המבוקש
    currentCard:null,
    //המערך של המשתמשים
    usersArr:[],
    //המשתמש הנוכחי
    currentUser:"",
    //בריכה נוכחית
    currentPool:"",
    //הוספת בריכה
    poolsArr:[],
    //כל ההרשאות
    Role:[],
    //כל האיזורים
    Erea:[],
    //כל הימים
    Days:[],
    //המערך של הלוח זמנים
    Schedule:[],
    //מערך הכרטיסים להריכה מסוימת
    CardsArr:[],
    //מערך הקורסים לבריכה מסוימת
    courses_arr:[],
    sale_arr:[],
    User:null,
    cart:[],
    //משתמשים לבריכה
    UsersPool:[],
    //היסטורית משתמש לבריכה מסוימת
    HistoryUser:[],
    

}
const reducer = (state = initialState, action) => {
   
    switch (action.type) {
        //היסטורית משתמש לבריכה מסוימת
        case actionType.GET_HISTORY_OF_USER_TO_POOL:{
             return{
                 ...state,
                 HistoryUser:action.payload
             }

        }
         //ייבוא המשתמשים לבריכה מסוימת
        case actionType.GET_USERS_BY_ID_POOL:{
            let newArr6=action.payload;
            let trueNewArr6=[];
            let numUser=null;
            let flag=true;
            for(let i=0;i<newArr6.length;i++)
            {
                flag=true;
                 numUser=newArr6[i].IdUser;
                for(let k=i+1;k<newArr6.length;k++){
                    if(numUser==newArr6[k].IdUser)
                              flag=false;
               }
                if(flag==true){
                    trueNewArr6.push(newArr6[i]);
                }
              
            }
            return{
                ...state,
                UsersPool:trueNewArr6
            }
        }
        //מחיקת כרטיס
        case actionType.DELETE_CARD:{
            alert("DELETE_CARD");
        }
        //ייבוא של כרטיס לבריכה על פי ת"ז
        case actionType.GET_BY_ID_CARD:
            let card=null;
            let newArr4=[state.CardsArr];

            for(let i=0;i<newArr4.length;i++){
                if(newArr4[i].Id==action.payload){
                    card=newArr4[i];
                }
            }
            return{
                ...state,
                currentCard:card
            }
          //עדכון כרטיס
          case actionType.UPDATE_CARD:
            let newArr5=[...state.CardsArr];
            for(let i=0;i<newArr5.length;i++){
                if(newArr5[i].Id==action.payload.Id){
                    newArr5[i]=action.payload;
                }
            }
          return{
             ...state,
             CardsArr:newArr5
          } 
        //ייבוא הכרטיסים לבריכה מסוימת
        case actionType.GET_CARDS:
            return{
                ...state,
                CardsArr:action.payload
            }
         //עדכון משתמש
         case actionType.UPDATE_USER:
            return{
                ...state,
                currentUser:action.payload
            };
            
   //מקבלת את המשתמש מהמערך שבסטייט
        case actionType.GET_BY_ID_USER:
            let user=null;
            let newArr=[...state.usersArr];
            for(let i=0;i<newArr.length;i++){
                if(newArr[i].Id==action.payload){
                   user=newArr[i];
                }
            }
            return{
                ...state,
                User:user
            }
        //הוספת לוח זמנים למערך שבstate החיצוני
        case actionType.ADD_SCHEDULE_TO_ARRAY:
            return{
                ...state,
                Schedule:[...state.Schedule,action.payload]
            }
        //כל הימים
        case actionType.ALL_DAYS:
            return{
                ...state,
                Days:action.payload
            };
        //הוספת בריכה
        case actionType.ADD_POOL:{
            return{
                
                 ...state,
                 poolsArr:[...state.poolsArr,action.payload],
                 currentPool:action.payload
            };
        }
        //כל האיזורים
        case actionType.ALL_EREAS:
            return{
                ...state,
                Erea:action.payload
            };
        //הוספת מנהל
        case actionType.ADD_MANAGER:{
            return{
                
                 ...state,
                 usersArr:[...state.usersArr,action.payload],
                 currentUser:action.payload
            };
        }
        //הוספת הרשאה
        case actionType.ADD_ROLE:
           return{
               ...state,
               Role:[...state.Role,...action.payload]
           };
        //כל ההרשראות
        case actionType.ALL_ROLE:
            return{
                ...state,
                Role:action.payload
            };
        //הרשמה
        case actionType.SIGNUP:{
              return {
                  ...state,
                  usersArr:[...state.usersArr,action.payload],
                };
            }
            //למנהל הראשי-הצגת המשתמשים באתר
          case actionType.GET_USERS:
              return {
                  ...state,
                  usersArr:action.payload
                };
          //מציג קורסים לבריכה
           case actionType.GET_COURSES:
                    return {
                        ...state,
                        courses_arr:action.payload
                      };

       //מציג בריכות
        case actionType.GET_POOLS:
            return {
                ...state,
                poolsArr:[...action.payload]
              };
          
         
          //התחברות-login
          case actionType.LOGIN:
            return {
                ...state,
                currentUser:action.payload
             };

        //הוספת מבצע
        case actionType.ADD_SALE:{
            return{
                ...state,
                sale_arr:[...action.payload]
            };
        }
        //הוספת קורס
        case actionType.ADD_COURS:{
            return{
                ...state,
                Courses:[...state.Courses,action.payload]
            }
        }

        //מחיקת קורס
        
        case actionType.DELETE_COURSE:{
            alert("HEREEE");
            let newArr2=[...state.courses_arr];
            alert(state.courses_arr.length);
            for(let i=0;i<state.courses_arr.length;i++){
                if(newArr2[i].Id==action.payload){
                    console.log("hola"+newArr2[i]);
                    newArr2.pop(newArr2[i]);
                }};
                alert("FINISHHH");
                return{...state,
                courses_arr:[...newArr2]}
        }

        //הוספת מנהל
        case actionType.ADD_MANAGER:{
            return{
                
                 ...state,
                 Managers:[...state.Managers,action.payload]
            };
        }
        
        //הוספת כרטיס
        case actionType.ADD_CARD:{
            return{
                 ...state,
                 CardsArr:[...state.CardsArr,action.payload]

            };
        }     
        //איפוס משתמש
        case actionType.EXIT:{
            return{
                ...state,
                 currentUser:"",
                 courses_arr:[null],
                 currentPool:"",

            };
        }     
        //מחיקת בריכה
        case actionType.DELETE_POOLS:
            let newArr2=[...state.poolsArr];
            for(let i=0;i<newArr2.length;i++){
                if(newArr2[i].Id===action.payload){
                    console.log("hola"+newArr2[i]);
                    newArr2.pop(newArr2[i]);
                }
            }
            return{
                ...state,
                poolsArr:[...newArr2]
            }
            //בריכה הנוכחית שנבחרה
            case actionType.SAVE_POOL:
                let pool=null;
                let newArr3=[...state.poolsArr];
                for(let i=0;i<newArr3.length;i++){
                    if(newArr3[i].IdUser==action.payload){
                       pool=newArr3[i];
                       console.log(pool);
                    }
                }
                return{
                    ...state,
                    currentPool:pool
                 }
        //ממוצע של כל ההזמנות
        
        //רכישת כרטיסים
        case actionType.CHOOSE_CARD:return state;
        //בחירת קורסים
        case actionType.CHOOSE_COURS:return state;
        //למנהל הבריכה -הצגת ההזמנות מבריכה מסוימת
        case actionType.GET_ORDERS:return state;
        
        //תשלום בכרטיס אשראי
        case actionType.PAY_CRADIT_CARD:return state;
        //עדכון מחיר לקורס
        case actionType.UPDATE_COURS:return state;
        //עדכון שעות
         case actionType.UPDATE_HOUR:return state;
        default: return state;
    }
}
export default reducer;