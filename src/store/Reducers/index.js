import * as actionType from "../actions";

const initialState = {
     
    current_user:null,
    pools_arr:[],
    users_arr:[],
    cart:[],
    courses_arr:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        //הרשמה
        case actionType.SIGNUP:     
        return {
           ...state,
             users_arr:[...action.paload]
             
        };   
        //התחברות
        case actionType.LOGIN:
        return {
            ...state,
            current_user:action.paload             
         };       
        //הוספת בריכה
        case actionType.ADD_POOLS:
        return {
            ...state,
            pools_arr:[...action.paload]
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
            return{...state,
                pools_arr:[...newArr2]}
        



        //ממוצע של כל ההזמנות
        
        //רכישת כרטיסים
        case actionType.CHOOSE_CARD:return state;
        //בחירת קורסים
        case actionType.CHOOSE_COURS:return state;
        //הצגת כרטיסים
        case actionType.GET_CARDS:return state;
        //למנהל הבריכה -הצגת ההזמנות מבריכה מסוימת
        case actionType.GET_ORDERS:return state;
        //למנהל הראשי-הצגת המשתמשים באתר
        case actionType.GET_USERS:return state;
        //תשלום בכרטיס אשראי
        case actionType.PAY_CRADIT_CARD:return state;
        //עדכון מחיר לכרטיס
        case actionType.UPDATE_CARD:return state;
        //עדכון מחיר לקורס
        case actionType.UPDATE_COURS:return state;
        //עדכון שעות
         case actionType.UPDATE_HOUR:return state;
        default: return state;
    }
}
export default reducer;