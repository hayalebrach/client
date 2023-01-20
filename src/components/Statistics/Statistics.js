import React, { useEffect } from "react";
import {
    Chart, PieSeries, Title
} from '@devexpress/dx-react-chart-material-ui';
import "./Statistics.css"
import { shallowEqual, useSelector } from "react-redux";
import { getCustomerToPool } from "../../store/Actions/Users"
import { GetAllCoursesToUser } from "../../store/Actions/Cours";


export const Statistics = () => {

    const { Courses, Pools, PackagesToPool, CustomerToPool, AllCourseToCustomer } = useSelector(state => ({
        Courses: state.courses_arr,
        Pools: state.poolsArr,
        PackagesToPool: state.CardsArr,
        CustomerToPool: state.CustomerToPool,
        AllCourseToCustomer: state.AllCourseToCustomer
    }), shallowEqual);

    let PoolsStatistic = [];

    let x = 0, sumAll = 0, sumOne = 0;

    // useEffect(() => {
    //     getCustomerToPool();
    //     GetAllCoursesToUser();

    //   }, []);

    const mostProfitablePool = () => {
        alert("hi")
        PoolsStatistic = [{Id:null,Sum:0,Percent:0}];
        for (let i = 0; i < Pools.length; i++) {
            for (let j = 0; j < CustomerToPool.length; j++) {
                if (Pools.Id[i] == CustomerToPool[j].IdPool) {
                    sumOne += CustomerToPool.TotalPrice;
                }
            }
            PoolsStatistic[x].Id = Pools[i].Id;
            PoolsStatistic[x++].Sum = sumOne;
            sumAll += sumOne;
            sumOne = 0;


        }
        for (let i = 0; i < PoolsStatistic.length; i++) {
            PoolsStatistic[i].Percent = ((PoolsStatistic[i].sum) / sumAll) * 0.1;
        }
        sumAll = 0;
        console.log(PoolsStatistic);

    }

    const mostProfitableCourse = () => {
        x = 0;
        let count = 0;
        PoolsStatistic = [];
        for (let i = 0; i < Courses.length; i++) {

            for (let j = 0; j < Courses.length; j++) {
                if (Courses[i].Id == AllCourseToCustomer[j].IdCours) {
                    count++;
                }
            }
            PoolsStatistic[x].Id = Courses[i].Id;
            PoolsStatistic[x++].numOfEnrollment = count;
            sumAll += count;
            count = 0;
        }
        for (let i = 0; i < PoolsStatistic.length; i++) {
            PoolsStatistic[i].percent = ((PoolsStatistic[i].sum) / sumAll) * 0.1;
        }
        sumAll = 0;
        console.log(PoolsStatistic);
    }

    const mostProfitablePackage = () => {
        x = 0;
        PoolsStatistic = [];
        for (let i = 0; i < PackagesToPool.length; i++) {

            for (let j = 0; j < CustomerToPool.length; j++) {
                if (PackagesToPool[i].Id == CustomerToPool[j].IdPackage) {
                    sumOne += CustomerToPool.TotalPrice;
                }
            }
            PoolsStatistic[x].sum = sumOne;
            PoolsStatistic[x++].Id = PackagesToPool[i].Id;
            sumAll += sumOne;
            sumOne = 0;


        }
        for (let i = 0; i < PoolsStatistic.length; i++) {
            PoolsStatistic[i].percent = ((PoolsStatistic[i].sum) / sumAll) * 0.1;
        }
        sumAll = 0;
        console.log(PoolsStatistic);
    }



    return (<>
        <h1>dddddddddddddddd</h1>
        <input type="button" value="בריכה הכי ריווחית" onClick={() => mostProfitablePool()} />
        <input type="button" value="סטטיסטיקת רישום לקורס " onClick={() => mostProfitableCourse()} />
        <input type="button" value="הכרטיסיה הכי נקניית" onClick={() => mostProfitablePackage()} />
    </>
    );
}

