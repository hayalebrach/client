
import { useSelector } from "react-redux";
import PoolNavBar from "../PoolNavBar";
const PoolWeb = () => {

    let currentPool = useSelector(state => state.currentPool)

    return (
        <>
            <PoolNavBar /><br /><br />
            <h1>{currentPool.Name}</h1>
            {/* <h3>{currentPool.dis}</h3> */}


        </>

    )



}

export default PoolWeb;