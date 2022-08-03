import {saveUser } from "../../store/Actions/Users";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { useEffect } from "react";

const Exit = (props) => {

    useEffect(()=>{
        props.saveUser(null);
        
    },[])

    
    return(<>
    <div>התנתקות</div>
  
    </>)
 }
 const mapStateToProps =(state)=>{
     return{
          user:state.currentUser
     }
 }
 export default connect(mapStateToProps,{saveUser})(Exit);