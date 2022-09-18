import * as actionType from "../actions";

const initialState = {
    //המערך המזויף של כרטיסים
    Cards:
    [
        {type:"5 כניסות",price:120},
        {type:"10 כניסות",price:170},
        {type:"20 כניסות",price:200},
        {type:"50 כניסות",price:400}
    ],
    //המערך המזויף של הקורסים
    Courses:
    [
        {name:"שחיה",email:"lieli@gmail.com",phone:"5333255"},
        {name:"ספורט",email:"chayush@gmail.com",phone:"05222552"},
        {name:"ריצה",email:"sivani@gmail.com",phone:"0202225"},
        {name:"לחימה",email:"sapirush@gmail.com",phone:"0325522"}
    ],
    //הכרטיס המבוקש
    Card:null,
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

    sale_arr:[],
   
    
    
    cart:[],
    courses_arr:[],
    num:7
}
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
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
                  usersArr:[...action.payload]
                };
                //עדכון משתמש
          case actionType.UPDATE_USER:
              return{
                  ...state,
                  currentUser:action.payload
              };
          //התחברות-login
          case actionType.LOGIN:
            return {
                ...state,
                currentUser:action.payload
             };


        //   //עדכון מחיר לכרטיס
        //   case actionType.UPDATE_CARD:
        //       console.log("UPDATE_CARD");
        //   return{
        //      ...state,
        //      Card:action.payload
        //   } 



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
                Courses:[...action.payload]
            };
        }
        
        //הוספת כרטיס
        case actionType.ADD_CARD:{
            return{
                
                 ...state,
                 Cards:[...action.payload]

            };
        }       

        //מחיקת בריכה
        case actionType.DELETE_POOLS:
            let newArr2=[...state.pools_arr];
            for(let i=0;i<newArr2.length;i++){
                if(newArr2[i].Id===action.payload){
                    console.log("hola"+newArr2[i]);
                    newArr2.pop(newArr2[i]);
                }
            }
            return{
                ...state,
                pools_arr:[...newArr2]
            }

        
        //ממוצע של כל ההזמנות
        
        //רכישת כרטיסים
        case actionType.CHOOSE_CARD:return state;
        //בחירת קורסים
        case actionType.CHOOSE_COURS:return state;
        //הצגת כרטיסים
        case actionType.GET_CARDS:return state;
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