import {useDispatch} from "react-redux";
import {AddRole} from ".././store/Actions/Role";
export default function AddDetailsCard() {
    const dispatch=useDispatch();
  let p={
    TypeUser:""
  }

  const change=(e)=>{
    let {name,type,value} = e.target;
    if(type === "number")
    value=+value;
    p[name]=value;
}

  const Send =(e)=>{
    console.log(p)
    dispatch(AddRole({TypeUser:p.TypeUser}));
 }
//  const c=()=>{
//    alert("hcdsgdr")
//    dispatch(AddRole());
//  }
return(
  <>
  <form>
  <label >הוסף תפקיד</label><br/>
  <input type="text"  name="TypeUser" onChange={change}/>
  {/* <input value="yyyyy" type="button" onClick={()=>c()}/> */}
  <input type="button" value="הרשם" className="" onClick={()=>Send()}/>
 </form>

  </>
)

}
