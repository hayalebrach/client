
import './App.css';

import { Routes, Route, Outlet, useNavigate } from "react-router";
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
import cardUpdate from './cardUpdate';
// import courseUpdate from './courseUpdate';
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
import Test from './test'
import {useDispatch } from 'react-redux'
import {useSelector} from "react-redux";
// shallowEqual, useSelector,
import SignUp from "./SignUp/SignUp";
function App() {
  let nav = useNavigate();
 const disptch=useDispatch();
  
  // const { Cards, Managers } = useSelector(state => ({
  //   Managers: state.Managers,
  //   Cards: state.Cards
  // }), shallowEqual);

  // console.log(Cards, Managers)

  // const { num, current_user } = useSelector(state => ({
  //    num: state.num,
  //    current_user: state.current_user
  // }), shallowEqual);

  // console.log(num, current_user)
  const currentUser=useSelector(state =>state.currentUser)
  console.log(currentUser);

  return (
    <>


      <div className='smallDiv'>
        <img src="../Pic/grocery-store.png" className="img1" onClick={() => nav("./cart")} />
        <img src="../Pic/user.png" className="img2" onClick={() => nav("./profile")} />
        <h3 className='f' onClick={() => nav("./signUp")}>הרשמה</h3>
        <h3 className='f' onClick={() => nav("./login")}>התחברות</h3><br />
      </div>

      <div className="App" >


        <Routes >
          <Route path="" element={<GuessNavBar />} />
          <Route path="GuessNavBar" element={<GuessNavBar />} />
          <Route path="profile/GuessNavBar" element={<GuessNavBar />} />

          <Route path="cart/UserNavBar" element={<UserNavBar />} />

          <Route path="users" element={<AllUsers />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="/signUp/login" element={<Login />} />
          <Route path="login/signUp" element={<SignUp />} />

          <Route path="courseDetails" element={<CourseDetails />} />

          <Route path="home" element={<AllPools />} />
          <Route path="managers" element={<AllManagers />} />
          <Route path="courses" element={<Courses />} />
          <Route path="cart/UserNavBar/courses" element={<Courses />} />

          <Route path="buyTickets" element={<BuyTickets />} />
          <Route path=" cart/UserNavBar/buyTickets" element={<BuyTickets />} />

          <Route path="about" element={<About />} />
          <Route path="cart/UserNavBar/about" element={<About />} />
          <Route path="managerEntery" element={<ManagerEntery />} />
          <Route path="ManagerNavBar" element={<ManagerNavBar />} />
          <Route path="MainManagerNavBar" element={<MainManagerNavBar />} />
          <Route path="UserNavBar" element={<UserNavBar />} />
          <Route path="/UserNavBar/courses" element={<Courses />} />
          <Route path="/UserNavBar/buyTickets" element={<BuyTickets />} />
          <Route path="/UserNavBar/about" element={<About />} />
          <Route path="/UserNavBar/AddPool" element={<AddPool />} />
          <Route path="/courseDetails/courseEnrollment" element={<CourseEnrollment />} />
          <Route path="/buyingForm" element={<BuyingForm />} />

          <Route path="/MainManagerNavBar/managers" element={<AllManagers />} />
          <Route path="/MainManagerNavBar/home" element={<AllPools />} />
          <Route path="/buyingForm/finishBuying" element={<FinishBuying />} />


          <Route path="AddDetailsManager" element={<AddDetailsManager />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cardUpdate" element={<cardUpdate />} />
          <Route path="courseUpdate" element={<courseUpdate />} />
          <Route path="addSale" element={<addSale />} />
          {/* //------------הוספת בריכה------------------------ */}
          <Route path="AddPool" element={<AddPool />} />
          <Route path="AddPool/AddDetailsManager" element={<AddDetailsManager />} />
          <Route path="AddPool/AddDetailsSchedule" element={<AddDetailsSchedule />} />
          <Route path="AddPool/AddDetailsPool" element={<AddDetailsPool />} />
          <Route path="AddPool/AddDetailsCours" element={<AddDetailsCours />} />
          <Route path="AddPool/AddDetailsCard" element={<AddDetailsCard />} />
          <Route path="AddDetailsCours" element={<AddDetailsCours />} />
          <Route path="AddPool/AddDetailsSale" element={<AddDetailsSale />} />

          <Route path="SplitButton" element={<SplitButton />} />
        </Routes>

      </div>

    </>

  );
}

export default App;
