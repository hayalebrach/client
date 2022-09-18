import * as actionType from "../actions";

const initialState = {
   // המערך המזויף של המנהלים
    Managers:
    [
      {id:"1111",name:"ליאל",email:"lieli@gmail.com",password:1212},
      {id:"2222",name:"חיוש",email:"chayush@gmail.com",password:2212},
      {id:"3333",name:"סיווני",email:"sivani@gmail.com",password:121572},
      {id:"4444",name:"ספירוש",email:"sapirush@gmail.com",password:555545}
    ], 
   // המערך של ההרשאות
   
        
   
    //המערך המזויף של כרטיסים
    Cards:
    [
        {type:"5 כניסות",price:120},
        {type:"10 כניסות",price:170},
        {type:"20 כניסות",price:200},
        {type:"50 כניסות",price:400}
    ],
    
    //הכרטיס המבוקש
    Card:null,
    //-------------------------------
    //המערך המזויף של הבריכות
    Pools:
    [
        {id:"1",name:"בריכת האגם",phone:"123456789",address:"צפריר  אור יהודה",pic:'istockphoto-1148844017-1024x1024',dis:"גליל מערבי, אגם מונפורטבריכת שחייה ת",IdUser:"5"},
        {id:"2222",name:"פארק המים שפעים",phone:"123456789",address:"רמלה בן גוריון 15",pic:"istockphoto-1319918284-1024x1024",dis:"תל אביב והמרכז, שפיים פארק המים"},
        {id:"3333",name:"חמי הגעש",phone:"123456789",address:"התמר 13 צפת",pic:"istockphoto-1310081147-1024x1024",dis:"בריכות שחייה, מגלשות מים,, ג'קוזי, סאונה"},
        {id:"4444",name:"בריכת החוף",phone:"123456789",address:"השקד 30 לוד",pic:"istockphoto-1311457374-1024x1024",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי ה,"},
        {id:"5555",name:"בריכת יפה נוף",phone:"123456789",address:"יעד 30 לוד",pic:"istockphoto-1325939237-1024x1024",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי  ה,"},
        {id:"6666",name:"בריכת המים",phone:"123456789",address:"השומר 30 אילת",pic:"swimming-pool-g8bee2e575_1920",dis:"חיפה והכרמל, נשרמרכז בילוי, ספורט ופנאי  ה,"}
    ],
    //המערך של המשתמשים
    usersArr:[],
    //המשתמש הנוכחי
    currentUser:"",
    //בריכה נוכחית
    currentPool:"",
    
    //כל ההרשאות
    Role:[],

    sale_arr:[],
   
    pools_arr:[],
    
    cart:[],
    courses_arr:[],
    num:7
}
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        //הוספת הרשאה
        case actionType.ADD_ROLE:
           return{
               ...state,
               Role:[...state.Role,...action.payload]
           }
        //כל ההרשראות
        case actionType.ALL_ROLE:
            return{
                ...state,
                Role:action.payload
            }
        //הרשמה
        case actionType.SIGNUP:     
        return {
           ...state,
              usersArr:[...state.usersArr,...action.payload]
             
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
                pools_arr:[...action.payload]
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
             }


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
            }
        }
        //הוספת קורס
        case actionType.ADD_COURS:{
            return{
                ...state,
                Courses:[...state.Courses,action.payload]
            }
        }
        //הוספת מנהל
        case actionType.ADD_MANAGER:{
            return{
                
                 ...state,
                 Managers:[...action.payload]

            };
        }
        //הוספת כרטיס
        case actionType.ADD_CARD:{
            return{
                
                 ...state,
                 Cards:[...action.payload]

            };
        }     
        
        //איפוס משתמש
        case actionType.RESET_USER:{
            return{
                ...state,
                 currentUser:"",
                 

            };
        }     

        //הוספת בריכה
        case actionType.ADD_POOLS:
        return {
            ...state,
            Pools:[...action.payload]
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

        case actionType.SAVE_POOL:
            return {
                ...state,
                currentPool:action.payload
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