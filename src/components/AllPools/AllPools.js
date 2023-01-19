
import * as actionType from "../../store/actions";
import { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SavePool } from "../../store/Actions/Pools"
import "./AllPools.css";
import AddImage from "../AddDetailsPool/addImage";

export default function AllPools() {
  const dispatch = useDispatch();
  const [selectedId, setSelected] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const [Sort, setSort] = useState(false);
  let nav = useNavigate();

  const Func = (pool) => {
    dispatch(SavePool(pool));
    nav("/poolWeb");
  }
  let sortPools = [];


  const { Pools, Pools2, currentPool, Areas ,currentUser} = useSelector(state => ({
    Pools: state.poolsArr,
    Pools2: state.poolsArr2,
    currentPool: state.currentPool,
    Areas: state.Areas,
    currentUser:state.currentUser
  }), shallowEqual);

  const Search = () => {

    if (showDiv == false) {
      setShowDiv(true);
      document.getElementById("citiesDiv").style.visibility = "visible";
    }
    else {
      setShowDiv(false);
      document.getElementById("citiesDiv").style.visibility = "hidden";
    }

  }


  const sortByCity = (areaId) => {
    sortPools = [];
    setSort(true);

    for (let i = 0; i < Pools.length; i++) {
      if (Pools[i].IdErea == areaId)
        sortPools.push(Pools[i]);

    }
    dispatch({ type: actionType.SORT_POOLS_BY_AREA, payload: sortPools })

  }

  const sortByPrice = () => {
    setSort(true);

    sortPools = [];
    let maxPrice = document.getElementById("maxPrice").value;
    for (let i = 0; i < Pools.length; i++) {
      if (Pools[i].Price <= maxPrice)
        sortPools.push(Pools[i]);

    }
    dispatch({ type: actionType.SORT_POOLS_BY_PRICE, payload: sortPools })

  }

  return (
    <>
      <br />
      <br />

      <h1>בריכות שחייה</h1>
      {!Sort ? <>

        {Pools.map(pool => <><div className="pool"><div>
          <img src={`Pic/${pool.Pic}`} alt="" className="img" />
          

        </div> <br /><b className="name">{pool.Name}</b><br />
          <text>{pool.Adress} </text> <img src={`Pic/map.png`} alt="" className="imgLocation" />
          <br /><text> מחיר: {pool.Price}</text><br />
          {pool.Id === selectedId  ?<AddImage type="File" Id={pool.Id} /> :
            <input type="button" value="החלפת תמונה" onClick={() => setSelected(pool.Id)}/>}<br/>
          <input type="button" className="detailsButton" value="לפרטים" onClick={() => Func(pool)} />
        </div></>)}</>

        : <>{Pools2.map(pool => <>
          <div className="pool"><div>
            <img src={`Pic/${pool.Pic}`} alt="" className="img" />
          </div> <br /><b className="name">{pool.Name}</b><br />
            <text>{pool.Adress} </text> <img src={`Pic/map.png`} alt="" className="imgLocation" /> <br /><text> מחיר: {pool.Price}</text><br /><input type="button" className="detailsButton" value="לפרטים" onClick={() => Func(pool)}></input></div></>)}</>

      }

      <div className='search'>
        <h3>חיפוש ממוקד</h3>
        <img src="../Pic/down (1).png" className='downImg'alt="" onClick={() => Search()}></img>

        <div className='citiesDiv' id="citiesDiv">
          <text style={{ fontSize: "20px", fontFamily: "revert-layer", color: "red" }}>:לפי איזור </text><br />
          {

            Areas.map(area => <><text onClick={() => sortByCity(area.Id)}>{area.Name}</text><img alt="" src='../Pic/Left.png' className='leftImg'></img> <br /></>)
          }

          <div>
            <text style={{ fontSize: "20px", fontFamily: "revert-layer", color: "red" }}>:לפי מחיר</text><br />
            <input type="text" className="priceInput" placeholder="מחיר מקסימלי" id="maxPrice"></input>
            <input type="button" value="<=" className="maxPriceButton" onClick={sortByPrice}></input>

          </div>
        </div>
      </div>

    </>
  )
}




