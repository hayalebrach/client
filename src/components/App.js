
import './App.css';

import { Routes, Route, Outlet } from "react-router";
import Login from "./Login/Login";
import Courses from "./Courses/Courses";
import BuyTickets from "./BuyTickets/BuyTickets";
import Cart from './Cart/Cart';
import About from "./About/About";
import Profile from "./Profile/Profile";
import GuessNavBar from './GuessNavBar';
import AllPools from './AllPools/AllPools';
import MainManagerNavBar from './MainManagerNavBar';
import UserNavBar from "./UserNavBar";
import ManagerEntery from "./ManagerEntery/ManagerEntery";
import AllUsers from './AllUsers/AllUsers';
import AllManagers from './AllManagers/AllManagers';
// import cardUpdate from './cardUpdate';
// import courseUpdate from './courseUpdate';
// import addSale from './addSale';

//import ManagerNavBar from './ManagerNavBar';
import ManagerNavBar from "./ManagerNavBar";
//---------------הוספת בריכה---------------
import AddPool from "./AddPool/AddPool";
import AddDetailsManager from './AddDetailsManager/AddDetailsManager';
import AddDetailsSchedule from './AddDetailsSchedule/AddDetailsSchedule';
import AddDetailsPool from './AddDetailsPool/AddDetailsPool';
import AddDetailsCours from './AddDetailsCours/AddDetailsCours';
import AddDetailsCard from './AddDetailsCard/AddDetailsCard';
import AddDetailsSale from "./AddDetailsSale/AddDetailsSale";
import SplitButton from './SplitButton';
import Test from './test'
function App() {

  return (
    <>
      <Test/>
     <div className="App" >
        
  
     {/*  <Routes >
        <Route path="" element={<GuessNavBar />} />
        <Route path="GuessNavBar" element={<GuessNavBar />} />
        <Route path="users" element={<AllUsers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<AllPools />} />
        <Route path="managers" element={<AllManagers />} />
        <Route path="courses" element={<Courses />} />
        <Route path="buyTickets" element={<BuyTickets />} />
        <Route path="about" element={<About />} />
        <Route path="managerEntery" element={<ManagerEntery />} />
        <Route path="ManagerNavBar" element={<ManagerNavBar />} />
        <Route path="MainManagerNavBar" element={<MainManagerNavBar />} />
        <Route path="UserNavBar" element={<UserNavBar />} />
        <Route path="/UserNavBar/courses" element={<Courses />} />
        <Route path="/UserNavBar/buyTickets" element={<BuyTickets />} />
        <Route path="/UserNavBar/about" element={<About />} />
        <Route path="/UserNavBar/AddPool" element={<AddPool />} />

        <Route path="/MainManagerNavBar/managers" element={<AllManagers />} />
        <Route path="/MainManagerNavBar/home" element={<AllPools />} />



        <Route path="profile" element={<Profile />} />
        <Route path="cardUpdate" element={<cardUpdate />} />
        <Route path="courseUpdate" element={<courseUpdate />} />
        <Route path="addSale" element={<addSale />} />
        //------------הוספת בריכה------------------------
        <Route path="AddPool" element={<AddPool />} />
        <Route path="AddPool/AddDetailsManager" element={<AddDetailsManager />} />
        <Route path="AddPool/AddDetailsSchedule" element={<AddDetailsSchedule />} />
        <Route path="AddPool/AddDetailsPool" element={<AddDetailsPool />} />
        <Route path="AddPool/AddDetailsCours" element={<AddDetailsCours />} />
        <Route path="AddPool/AddDetailsCard" element={<AddDetailsCard />} />
        <Route path="AddDetailsCours" element={<AddDetailsCours />} />
        <Route path="AddPool/AddDetailsSale" element={<AddDetailsSale />} />
        //------------------------------------------------
        <Route path="SplitButton" element={<SplitButton />} />
      </Routes> */}

    </div>  
   
    </>

  );
}

export default App;
