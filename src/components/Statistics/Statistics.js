import React, { useEffect, useState } from "react";
import "./Statistics.css"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCustomerToPool, getCustomerToPoolByPoolId } from "../../store/Actions/Users"
import { GetTimeOfCoursByIdPool } from "../../store/Actions/Time";
import { getAllCardByIdPool } from "../../store/Actions/Card";
import { GetAllCoursesByPool, GetCoursesToUserByIdPool } from "../../store/Actions/Cours";
import { PieChart, Pie} from 'recharts'


export const Statistics = () => {

    const { Courses,currentUser, Pools, PackagesToPool, CustomerToPool, AllCourseToCustomer,currentPool,CustomerToPoolByIdPool,CourseToCustomerByPool } = useSelector(state => ({
        Courses: state.courses_arr,
        Pools: state.poolsArr,
        PackagesToPool: state.CardsArr,
        CustomerToPool: state.CustomerToPool,
        CustomerToPoolByIdPool:state.CustomerToPoolByIdPool,
        AllCourseToCustomer: state.AllCourseToCustomer,
        currentPool:state.currentPool,
        CourseToCustomerByPool:state.CourseToCustomerByPool,
        currentUser:state.currentUser
    }), shallowEqual);

    const [flag,setFlag ] = useState(false);
    const [PoolsStatistic,setPoolsStatistic ] = useState([]);
    
    const dispatch=useDispatch();
    

    useEffect(() => {
        dispatch(getCustomerToPool());
        dispatch(getCustomerToPoolByPoolId(currentPool.Id));
        dispatch(getAllCardByIdPool(currentPool.Id));
        dispatch(GetAllCoursesByPool(currentPool.Id));
        dispatch(GetCoursesToUserByIdPool(currentPool.Id));
        
      
    }, [])

    let x = 0, sumAll = 0, sumOne = 0;

    // useEffect(() => {
    //     getCustomerToPool();
    //     GetAllCoursesToUser();

    //   }, []);

    const mostProfitablePool = () => {
        
        setPoolsStatistic([]) ;
        let arr=[];
        for (let i = 0; i < Pools.length; i++) {
            for (let j = 0; j < CustomerToPool.length; j++) {
                if (Pools[i].Id == CustomerToPool[j].IdPool) {
                    sumOne += CustomerToPool[j].TotalPrice;
                    
                }
            }
            arr.push({name:Pools[i].Name,Sum:sumOne,Percent:null})
            
            sumAll += sumOne;
            sumOne = 0;
        }
        for (let i = 0; i < arr.length; i++) {
            if( arr[i].Sum!=0)
            arr[i].Percent = ((arr[i].Sum) / sumAll) * 100;
        }
        sumAll = 0;
       setPoolsStatistic(arr);
        setFlag(true);

    }


    const mostProfitableCourse = () => {
        console.log(CourseToCustomerByPool);
        let arr=[];
        x = 0;
        let count = 0;
        setPoolsStatistic([]);
        for (let i = 0; i < Courses.length; i++) {
            for (let j = 0; j < CourseToCustomerByPool.length; j++) {
                if (Courses[i].Id == CourseToCustomerByPool[j].IdCours) {
                    count++;
                }
            }
            arr.push({name:Courses[i].NameCours,Sum:count,Percent:null})
            sumAll += count;
            count = 0;
        }
        
        for (let i = 0; i < arr.length; i++) {
            if( arr[i].Sum!=0)
            arr[i].Percent = ((arr[i].Sum) / sumAll) * 100;
        }
        console.log(PoolsStatistic);
        sumAll = 0;
        setFlag(true);
        setPoolsStatistic(arr);


    }

    const mostProfitablePackage = () => {
        let arr=[];
        x = 0;
        setPoolsStatistic([]);
        for (let i = 0; i < PackagesToPool.length; i++) {
            for (let j = 0; j < CustomerToPoolByIdPool.length; j++) {
                if (PackagesToPool[i].Id == CustomerToPoolByIdPool[j].IdPackage) {
                    sumOne += CustomerToPoolByIdPool[j].TotalPrice;
                }
            }

            arr.push({name:PackagesToPool[i].EntersAmount,Sum:sumOne,Percent:null})

            sumAll += sumOne;
            sumOne = 0;
        }
        
        for (let i = 0; i < arr.length; i++) {
            arr[i].Percent = (((arr[i].Sum) / sumAll) * 100);
        }
        sumAll = 0;
        setPoolsStatistic(arr);
        setFlag(true);
        console.log(PoolsStatistic);
    }



    return (<>
        <h1>STATISTICS:</h1>
        {currentUser.IdRole==1?<><input type="button" value="בריכה הכי ריווחית" onClick={() =>mostProfitablePool() } />
        
        </>
        :<><input type="button" value="סטטיסטיקת רישום לקורס " onClick={() => mostProfitableCourse()} />
        <input type="button" value="הכרטיסיה הכי נקניית" onClick={() => mostProfitablePackage()} /></>
}
        {flag==true?<PieChart  className="pie" width={400} height={400}>
          <Pie data={PoolsStatistic} dataKey="Sum" label="name" outerRadius={200} fill="blue" title="STATISTICS" />
        </PieChart>:null}

        {PoolsStatistic.map(x=><>שם :{x.name} סה"כ  :{x.Sum} <br/> אחוז :{x.Percent}% <br/></>)}
    </>
    );
}

