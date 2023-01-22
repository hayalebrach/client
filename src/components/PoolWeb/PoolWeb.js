

import { fontFamily } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import "./PoolWeb.css"
import 'typeface-quicksand';
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import AddImage from "../AddDetailsPool/addImage";
import { useEffect } from "react";
import { GetTimeOfCoursByIdPool } from "../../store/Actions/Time";


export default function PoolWeb() {
    const currentPool = useSelector(state => state.currentPool);
    const currentUser = useSelector(state => state.currentUser);

  const dispatch=useDispatch();
    useEffect(() => {
          dispatch(GetTimeOfCoursByIdPool(currentPool.Id));
        
      }, [])

    
    const MouseOver = (e) => {
        e.target.style.width = "110px";
        e.target.style.height = "110px";

    }
    const MouseOut = (e) => {
        e.target.style.width = "100px";
        e.target.style.height = "100px";

    }

    return (<>
        {currentUser.IdRole == 2 ? <> <div>
             <h3>{currentPool.Name}</h3><br />
             <img src={`Pic/pin.png`} className="locationIcon" alt="" />  <h3>  <b>{currentPool.Adress}</b></h3>
             <img src={`Pic/${currentPool.Pic}`} alt="" className="PicManager" /><br/>
             <AddImage type="File" Id={currentPool.Id} />
             
        </div>    </> 
        
        
        
        : <>
            <div className="PoolWebDiv">

                <h1>{currentPool.Name}</h1><br />
                <img src={`Pic/pin.png`} className="locationIcon" alt="" />  <h3> מחכים לכם ברחוב <b>{currentPool.Adress}</b></h3>
                <div>
                    <img src={`Pic/${currentPool.Pic}`} alt="" className="Pic" />
                    <div className="savePlace">
                        <img src={"Pic/calendar.png"} alt="" className="savePlaceIcon" /><br /><br />
                        <text>   !רוצים לשחות?      חובה להזמין מקום   </text>
                        <Link to="ShowSchedule" className="navbar-brand"><text className="x1">שריין עכשיו</text></Link>


                    </div>

                    <div className="buyTickets">
                        <img src={"Pic/ticket.png"} className="buyTicketsIcon" alt="" /><br />

                        <Link to="buyTickets" className="navbar-brand" ><text className="x2">לרכישת כרטיסים</text></Link>

                    </div>

                    <div className="wrapper">
                        <h3>? רוצים לשחות כמו מקצוענים</h3>
                        <img src={"Pic/swimming-silhouette.png"} className="savePlaceIcon" alt="" /><br /><br />
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <Link to="courses" className="navbar-brand" ><text >למגוון קורסים</text></Link>
                    </div>

                    <div className="wrapper2">
                        <img src={"Pic/loupe.png"} className="savePlaceIcon" alt="" />
                        <h3>...קצת עלינו</h3>

                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <Link to="about" className="navbar-brand" ><text >לפרטים </text></Link>


                    </div>


                </div>


                <div className="animations_Div">

                    <div className="animation"><figure><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/7.gif" className="animationPic" alt="" loading="lazy" /></figure><div className="elementor-image-box-content"><h4 >מותאם <br />לציבור החרדי</h4></div></div>

                    <div className="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/2.gif" className="animationPic" alt="" loading="lazy" /></figure><div><h4 className="elementor-image-box-title">כסאות נוח <br />במרחבי דשא מוצלים</h4></div></div>

                    <div className="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/6.gif" className="animationPic" alt="" loading="lazy" /></figure><div className="elementor-image-box-content"><h4 > בריכות <br /> ענק לשחייה ושעשוע</h4></div></div>

                    <div className="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/11.gif" className="animationPic" alt="" loading="lazy" /></figure><div className="elementor-image-box-content"><h4 >מגלשת ספירלה<br /> </h4></div></div>

                    <div className="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/5.gif" className="animationPic" alt="" loading="lazy" /></figure><div className="elementor-image-box-content"><h4 > מגלשות <br />אקסטרים</h4></div></div>

                    <div className="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/12.gif" className="animationPic" alt="" loading="lazy" /></figure><div className="elementor-image-box-content"><h4>בריכת פעוטות<br />ומתקני מים</h4></div></div>

                </div >

                <div className="bottomDiv">xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>





            </div>
        </>}

    </>)


}





