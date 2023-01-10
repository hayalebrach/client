
import './App.css';

import { Routes, Route, useNavigate } from "react-router";
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
import AllUsers from './AllUsers/AllUsers';
import TheUser from './AllUsers/TheUser';
import TryTable from './AllUsers/TryTable';
import AllManagers from './AllManagers/AllManagers';
// import addSale from './addSale';
import CourseDetails from './CourseDetails/CourseDetails';
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
import CourseEnrollment from "./CourseEnrollment/CourseEnrollment"
import SplitButton from './SplitButton';
import BuyingForm from './BuyingForm/BuyingForm';
import FinishBuying from './FinishBuying/FinishBuying';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
// shallowEqual, useSelector,
import SignUp from "./SignUp/SignUp";
import BuyingHistory from './BuyingHistory/BuyingHistory';
import PoolWeb from './PoolWeb/PoolWeb';
import ShowSchedule from './AddDetailsSchedule/ShowSchedule';
import { Exit, getAllUser } from "../store/Actions/Users";
import { getAllAreas, getAllDays, GetAllPools } from "../store/Actions/Pools";
import { useEffect, useState } from 'react';


import UpdateUser from './UpdateUser/UpdateUser';
// import { UpdateUser } from './UpdateUser/UpdateUser';
//import { shallowEqual, useSelector } from 'react-redux';
import AllCardsToPool from "./UpdateCard/AllCardsToPool";
import UpdateCard from "./UpdateCard/UpdaeCard";
import { CourseToUser } from './CourseToUser/CourseToUser';
import UpdateCours from './UpdateCours/UpdateCours'
import AllCoursToPool from './UpdateCours/AllCoursToPool'
import {SavePlace} from './SavePlace/SavePlace';
import AddDetailsScheduleCours from './AddDetailsScheduleCours/AddDatailsScheduleCours';
function App() {
  useEffect(() => {
    dispatch(GetAllPools());
    dispatch(getAllManagers());
    dispatch(getAllUser());
    dispatch(getAllAreas());

    dispatch(getAllDays());
  }, []);
  const [showDiv, setShowDiv] = useState(false);
  let nav = useNavigate();
  const dispatch = useDispatch();

  const { Schedule, currentUser, currentPool, usersArr,Areas,Pools } = useSelector(state => ({
    currentUser: state.currentUser,
    currentPool: state.currentPool,
    usersArr: state.usersArr,
    Areas: state.Areas,
    Pools:state.poolsArr

  }), shallowEqual);

  const Search = () => {
    
    if(showDiv==false){
      setShowDiv(true);
      document.getElementById("citiesDiv").style.visibility="visible";
    }
    else{
      setShowDiv(false);
      document.getElementById("citiesDiv").style.visibility="hidden";
    }

  }
  let sortPools=[];

  const sortByCity=(areaId)=>{
    
      for (let i = 0; i < Pools.length; i++) 
      if (Pools[i].IdErea == areaId) 
        sortPools.push(Pools[i]);  

      console.log(sortPools);
      
  }

 
  
  // console.log(Cards, Managers)

  // const { num, current_user } = useSelector(state => ({
  //    num: state.num,
  //    current_user: state.current_user
  // }), shallowEqual);

  // console.log(num, current_user)


  return (<>
    <div className='smallDiv'>

      <img src='../Pic/X2.png' className='logo'></img>
      <img src="../Pic/grocery-store.png" className="img1" onClick={() => nav("./cart")} />
      <img src="../Pic/user.png" className="imggg" onClick={() => {
        if (currentUser != "")
          nav("./profile")
        else alert("עליך להתחבר כדי לצפות בפרופיל!")
      }} />
      <h3 className='f' onClick={() => { dispatch(Exit()); nav("./signUp") }}>הרשמה</h3>
      <h3 className='f' onClick={() => { dispatch(Exit()); nav("./login") }}>התחברות</h3><br />

    </div>



    <div className='search'>
      <h3>חיפוש ממוקד</h3>
      <img src="../Pic/down (1).png" className='downImg' onClick={() => Search()}></img>
      <div className='citiesDiv' id="citiesDiv">
        {
          Areas.map(area => <><text onClick={()=>sortByCity(area.Id)}>{area.Name}</text><img src='../Pic/Left.png' className='leftImg'></img> <br /></>)
        }
      </div>

    </div>
    

    {currentUser ? (<><text className='Exit' onClick={() => { dispatch(Exit()); nav("/AllPools") }}>יציאה</text></>) : null}



    <div className="App" >

      <Routes >
        <Route path="" element={<AllPools />} />
        <Route path="GuessNavBar" element={<GuessNavBar />} />
        <Route path="profile/GuessNavBar" element={<GuessNavBar />} />
        <Route path="cart/UserNavBar" element={<UserNavBar />} />
        <Route path="profile/history" element={<BuyingHistory />} />
        <Route path="cart/BuyingForm" element={<BuyingForm />} />
        <Route path="AllPools/poolWeb" element={<PoolWeb />} />
        <Route path="cart/PoolWeb" element={<PoolWeb />} />
        <Route path="cart/BuyingForm/AllPools" element={<AllPools />} />

        <Route path="poolWeb" element={<PoolWeb />} />
        <Route path="MainManagerNavBar/AllUsers" element={<AllUsers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signUp/login" element={<Login />} />
        <Route path="login/signUp" element={<SignUp />} />
        <Route path="courseDetails" element={<CourseDetails />} />
        <Route path="AllPools" element={<AllPools />} />
        <Route path="UserNavBar/AllPools" element={<AllPools />} />

        <Route path="MainManagerNavBar/AllManagers" element={<AllManagers />} />
        <Route path="courses" element={<Courses />} />
        <Route path="poolWeb/courses" element={<Courses />} />
        <Route path="AllPools/poolWeb/courses" element={<Courses />} />
        <Route path="cart/PoolWeb/courses" element={<Courses />} />

        <Route path="ManagerNavBar/courses" element={<Courses />} />

        <Route path="poolWeb/courses" element={<Courses />} />
        <Route path="ManagerNavBar/courses" element={<Courses />} />


        <Route path="cart/UserNavBar/courses" element={<Courses />} />
        <Route path="buyTickets" element={<BuyTickets />} />
        <Route path="cart/UserNavBar/buyTickets" element={<BuyTickets />} />
        <Route path="poolWeb/buyTickets" element={<BuyTickets />} />

        <Route path="AllPools/poolWeb/buyTickets" element={<BuyTickets />} />

        <Route path="about" element={<About />} />
        <Route path="cart/UserNavBar/about" element={<About />} />
        <Route path="AllPools/poolWeb/about" element={<About />} />
        <Route path="poolWeb/about" element={<About />} />

        <Route path="ManagerNavBar/AllCardsToPool" element={<AllCardsToPool />} />
        <Route path="ManagerNavBar" element={<ManagerNavBar />} />
        <Route path="MainManagerNavBar" element={<MainManagerNavBar />} />
        <Route path="UserNavBar" element={<UserNavBar />} />
        <Route path="/UserNavBar/courses" element={<Courses />} />
        <Route path="/UserNavBar/buyTickets" element={<BuyTickets />} />
        <Route path="/UserNavBar/about" element={<About />} />
        <Route path="/poolWeb/courses/courseEnrollment" element={<CourseEnrollment />} />
        <Route path="/buyingForm" element={<BuyingForm />} />
        <Route path="/MainManagerNavBar/managers" element={<AllManagers />} />
        <Route path="/MainManagerNavBar/AllPools" element={<AllPools />} />

        <Route path="buyingForm/finishBuying" element={<FinishBuying />} />
        <Route path="cart/BuyingForm/finishBuying" element={<FinishBuying />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addSale" element={<addSale />} />
        {/* //------------הוספת בריכה------------------------ */}
        <Route path="MainManagerNavBar/AddPool" element={<AddPool />} />
        <Route path="AddPool" element={<AddPool />} />
        <Route path="AddDetailsPool" element={<AddDetailsPool />} />
        <Route path="AddPool/AddDetailsPool" element={<AddPool />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsManager" element={<AddDetailsManager />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsSchedule" element={<AddDetailsSchedule />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsPool" element={<AddDetailsPool />} />
        <Route path="ManagerNavBar/courses/AddDetailsCours" element={<AddDetailsCours />} />
        <Route path="ManagerNavBar/addCourse" element={<AddDetailsCours />} />
        <Route path="ManagerNavBar/AddDetailsSchedule" element={<AddDetailsSchedule />} />

        <Route path="" element={<GuessNavBar />} />
        <Route path="GuessNavBar" element={<GuessNavBar />} />
        <Route path="profile/GuessNavBar" element={<GuessNavBar />} />
        <Route path="cart/UserNavBar" element={<UserNavBar />} />
        <Route path="profile/history" element={<BuyingHistory />} />
        <Route path="AllPools/poolWeb" element={<PoolWeb />} />
        <Route path="profile/CourseToUser/poolWeb" element={<PoolWeb />} />
        <Route path="profile/history/poolWeb" element={<PoolWeb />} />


        <Route path="poolWeb" element={<PoolWeb />} />

        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/signUp/login" element={<Login />} />
        <Route path="login/signUp" element={<SignUp />} />
        <Route path="courseDetails" element={<CourseDetails />} />
        <Route path="AllPools" element={<AllPools />} />
        <Route path="managers" element={<AllManagers />} />
        <Route path="courses" element={<Courses />} />
        <Route path="AllPools/poolWeb/courses" element={<Courses />} />
        <Route path="poolWeb/courses" element={<Courses />} />
        {/* ----------------------------------------------------------------------------- */}
        <Route path="ManagerNavBar/courses" element={<Courses />} />
        <Route path="ManagerNavBar/AllUsers" element={<AllUsers />} />
        <Route path="ManagerNavBar/AllUsers/TheUser" element={<TheUser />} />
        <Route path="ManagerNavBar/UpdateCours" element={<UpdateCours />} />
        {/* ----------------------------------------------------------------------------- */}
        <Route path="cart/UserNavBar/courses" element={<Courses />} />
        <Route path="buyTickets" element={<BuyTickets />} />
        <Route path="cart/UserNavBar/buyTickets" element={<BuyTickets />} />
        <Route path="poolWeb/buyTickets" element={<BuyTickets />} />

        <Route path="AllPools/poolWeb/buyTickets" element={<BuyTickets />} />

        <Route path="about" element={<About />} />
        <Route path="cart/UserNavBar/about" element={<About />} />
        <Route path="AllPools/poolWeb/about" element={<About />} />
        <Route path="poolWeb/about" element={<About />} />
        {/* //====================================================== */}
        {/* <Route path="poolWeb/AddDetailsSchedule" element={<AddDetailsSchedule />} /> */}
        {/* //====================================================== */}
        <Route path="ManagerNavBar" element={<ManagerNavBar />} />
        <Route path="MainManagerNavBar" element={<MainManagerNavBar />} />
        <Route path="UserNavBar" element={<UserNavBar />} />
        <Route path="/UserNavBar/courses" element={<Courses />} />
        <Route path="/profile/CourseToUser" element={<CourseToUser />} />

        <Route path="/UserNavBar/buyTickets" element={<BuyTickets />} />
        <Route path="/UserNavBar/about" element={<About />} />
        <Route path="/courseDetails/courseEnrollment" element={<CourseEnrollment />} />
        <Route path="/buyingForm" element={<BuyingForm />} />
        <Route path="/MainManagerNavBar/managers" element={<AllManagers />} />
        <Route path="/MainManagerNavBar/AllPools" element={<AllPools />} />
        <Route path="/buyingForm/finishBuying" element={<FinishBuying />} />
        <Route path="profile" element={<Profile />} />


        <Route path="addSale" element={<addSale />} />
        {/* //------------הוספת בריכה------------------------ */}
        <Route path="MainManagerNavBar/AddPool" element={<AddPool />} />
        <Route path="AddPool" element={<AddPool />} />
        <Route path="AddDetailsPool" element={<AddDetailsPool />} />
        <Route path="AddPool/AddDetailsPool" element={<AddPool />} />
        <Route path="MainManagerNavBar/AddDetailsManager" element={<AddDetailsManager />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsSchedule" element={<AddDetailsSchedule />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsPool" element={<AddDetailsPool />} />



        <Route path="AddDetailsCard/:flag" element={<AddDetailsCard flag="true" />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsCard/:flag" element={<AddDetailsCard flag="false" />} />
        <Route path="MainManagerNavBar/AddPool/AddDetailsCours/:flag" element={<AddDetailsCours flag="false" />} />
        <Route path="AddDetailsCours/:flag" element={<AddDetailsCours flag="true" />} />
        
        <Route path="AddPool/AddDetailsSale" element={<AddDetailsSale />} />


         <Route path="poolWeb/ShowSchedule" element={<ShowSchedule />} /> 
        <Route path="MainManagerNavBar/AddPool/AddDetailsSale" element={<AddDetailsSale />} />
       
        <Route path="UpdateUser/:flag" element={<UpdateUser flag="false" />} />
        <Route path="UpdateCard/:flag" element={<UpdateCard flag="false" />} />
        <Route path="UpdateCours/:flag" element={<UpdateCours flag="false" />} />
        <Route path="ManagerNavBar/AllCoursToPool" element={<AllCoursToPool />} />
        <Route path="SavePlace" element={<SavePlace/>}/>
        <Route path="ManagerNavBar/AddDetailsScheduleCours" element={<AddDetailsScheduleCours/>}/>
                {/* <Route path="SplitButton" element={<SplitButton />} /> */}
      </Routes>
    </div>



  </>)


}

export default App;
