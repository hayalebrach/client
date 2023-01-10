

import { fontFamily } from "@mui/system";
import { useSelector } from "react-redux";
import "./PoolWeb.css"
import 'typeface-quicksand';
import { Link } from "react-router-dom";
import { Container } from "@mui/material";


export default function PoolWeb() {


    const currentPool = useSelector(state => state.currentPool);

    const MouseOver = (e) => {
        e.target.style.width = "110px";
        e.target.style.height = "110px";

    }
    const MouseOut = (e) => {
        e.target.style.width = "100px";
        e.target.style.height = "100px";

    }

    return (
        <>
            <div className="PoolWebDiv">
                
                <h1>{currentPool.Name}</h1><br />
                <img src={`Pic/pin.png`} className="locationIcon" />  <h3>??? מחכים לכם ברחוב <b>{currentPool.Adress}</b>, מה משנה המרחק</h3>

                {/* <PoolNavBar /> */}
                <div>
                    <img src={`Pic/${currentPool.Pic}`} className="Pic" />
                    <div className="savePlace">
                        <img src={"Pic/calendar.png"} className="savePlaceIcon" /><br /><br />
                        <text>   !רוצים לשחות?      חובה להזמין מקום   </text>
                        <Link to="ShowSchedule" className="navbar-brand"><text className="x1">שריין עכשיו</text></Link>


                    </div>

                    <div className="buyTickets">
                        <img src={"Pic/ticket.png"} className="buyTicketsIcon" /><br />

                        <Link to="buyTickets" className="navbar-brand" ><text className="x2">לרכישת כרטיסים</text></Link>

                    </div>

                    <div class="wrapper">
                        <h3>? רוצים לשחות כמו מקצוענים</h3>
                        <img src={"Pic/swimming-silhouette.png"} className="savePlaceIcon" /><br /><br />
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <Link to="courses" className="navbar-brand" ><text >למגוון קורסים</text></Link>
                    </div>

                    <div className="wrapper2">
                        <img src={"Pic/clock.png"} className="savePlaceIcon" />
                        <h3>ימים ושעות פעילות</h3>

                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <div><span class="dot"></span></div>
                        <Link to="ShowSchedule" className="navbar-brand" ><text >לפרטים </text></Link>


                    </div>





                </div>


                <div className="animations_Div">

                    <div class="animation"><figure><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/7.gif" class="animationPic" alt="" loading="lazy" /></figure><div class="elementor-image-box-content"><h4 >מותאם <br />לציבור החרדי</h4></div></div>

                    <div class="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/2.gif" class="animationPic" alt="" loading="lazy" /></figure><div><h4 class="elementor-image-box-title">כסאות נוח <br />במרחבי דשא מוצלים</h4></div></div>

                    <div class="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/6.gif" class="animationPic" alt="" loading="lazy" /></figure><div class="elementor-image-box-content"><h4 > בריכות <br /> ענק לשחייה ושעשוע</h4></div></div>

                    <div class="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/11.gif" class="animationPic" alt="" loading="lazy" /></figure><div class="elementor-image-box-content"><h4 >מגלשת ספירלה<br /> </h4></div></div>

                    <div class="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/5.gif" class="animationPic" alt="" loading="lazy" /></figure><div class="elementor-image-box-content"><h4 > מגלשות <br />אקסטרים</h4></div></div>

                    <div class="animation"><figure ><img onMouseOver={MouseOver} onMouseOut={MouseOut} decoding="async" width="100" height="100" src="https://mayapro.co.il/wp-content/uploads/2022/05/12.gif" class="animationPic" alt="" loading="lazy" /></figure><div class="elementor-image-box-content"><h4>בריכת פעוטות<br />ומתקני מים</h4></div></div>

                </div >

                <div className="bottomDiv">xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                
                



            </div>
        </>)


}





