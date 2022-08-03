
import './App.css';

import {Routes,Route, Outlet, useNavigate} from "react-router";
import Login from "./Login/Login";
import SignUp from './SignUp/SignUp';
import Courses from "./Courses/Courses";
import BuyTickets from "./BuyTickets/BuyTickets";
import Cart from './Cart/Cart';
import About from "./About/About";
import Profile from"./Profile/Profile";
import GuessNavBar from './GuessNavBar';
import MainManagerNavBar from './MainManagerNavBar';
import UserNavBar from "./UserNavBar";
import ManagerEntery from "./ManagerEntery/ManagerEntery";
import AllPools from './AllPools/AllPools';
import AllUsers from './AllUsers/AllUsers';
import AllManagers from './AllManagers/AllManagers';
import AddPool from "./AddPool/AddPool";
import ManagerNavBar from "./ManagerNavBar";
import CourseDetails from './CourseDetails/CourseDetails';
import CourseEnrollment from './CourseEnrollment/CourseEnrollment';
import BuyingForm from './BuyingForm/BuyingForm';
import FinishBuying from './FinishBuying/FinishBuying';

function App() {
  let nav=useNavigate();
    return(
          <>
          {/* <img src={`Pic/${pool.pic}.jpg`} */}
         
         <div className='smallDiv'>
         <img src="../Pic/grocery-store.png" className="img1" onClick={()=>nav("./cart")}/>
        <img src="../Pic/user.png" className="img2" onClick={()=>nav("./profile")}/>
        <h3 className='f' onClick={()=>nav("./signUp")}>הרשמה</h3>
        <h3 className='f' onClick={()=>nav("./login")}>התחברות</h3><br/>
        </div>
        
        <div className="App" > 
        
       <Outlet></Outlet>
       
       <Routes >
        <Route path="" element={<GuessNavBar/>}/>
        <Route path="users" element={<AllUsers/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="login" element={<Login/>} />
        <Route path="home" element={<AllPools/>}/>
        <Route path="managers" element={<AllManagers/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="buyTickets" element={<BuyTickets/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="managerEntery" element={<ManagerEntery/>}/>
        <Route path="ManagerNavBar" element={<ManagerNavBar/>}/>
        <Route path="MainManagerNavBar" element={<MainManagerNavBar/>}/>
        <Route path="UserNavBar" element={<UserNavBar/>}/>
        <Route path="/UserNavBar/courses" element={<Courses/>}/>
        <Route path="/UserNavBar/buyTickets" element={<BuyTickets/>}/>
        <Route path="/UserNavBar/about" element={<About/>}/>
        <Route path="/UserNavBar/AddPool" element={<AddPool/>}/>
        <Route path="/courseDetails/courseEnrollment" element={<CourseEnrollment/>}/>
        <Route path="/buyingForm" element={<BuyingForm/>}/>
        <Route path="/buyingForm/finishBuying" element={<FinishBuying/>}/>
        <Route path="/courseDetails" element={<CourseDetails/>}/>
        <Route path="/MainManagerNavBar/managers" element={<AllManagers/>}/>
        <Route path="/MainManagerNavBar/home" element={<AllPools/>}/>
         <Route path="profile" element={<Profile/>}/>
        <Route path="cardUpdate" element={<cardUpdate/>}/>
        <Route path="courseUpdate" element={<courseUpdate/>}/>
        <Route path="addSale" element={<addSale/>}/>
        <Route path="AddPool" element={<AddPool/>}/>
      </Routes> 
        
     </div>
     </>   
 
    );
}

export default App;
