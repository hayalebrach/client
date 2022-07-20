
import './App.css';

import {Routes,Route, Outlet} from "react-router";
import Login from "./Login";
import SignIn from './SignIn';
import Courses from "./Courses";
import BuyTickets from "./BuyTickets";
import Cart from './Cart';
import About from "./About";
import Profile from"./Profile";
import GuessNavBar from './GuessNavBar';

import MainManagerNavBar from './MainManagerNavBar';
import UserNavBar from "./UserNavBar";
import ManagerEntery from "./ManagerEntery";
import AllPools from './AllPools';
import AllUsers from './AllUsers';
import AllManagers from './AllManagers';
// import cardUpdate from './cardUpdate';
// import courseUpdate from './courseUpdate';
// import addSale from './addSale';

//import ManagerNavBar from './ManagerNavBar';
import AddPool from "./AddPool";
import ManagerNavBar from "./ManagerNavBar";

function App() {
  
    return(
          <>
        <div className="App" >

       {/* <MainManagerNavBar /> */}
       {/* <UserNavBar /> */}
       
       <Outlet></Outlet>
       {/* <ManagerNavBar /> */}
    
       <Routes >
        <Route path="" element={<GuessNavBar/>}/>
        <Route path="users" element={<AllUsers/>}/>
        <Route path="signIn" element={<SignIn/>}/>
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
