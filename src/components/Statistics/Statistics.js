import React, { useEffect } from "react";
import {
    Chart, PieSeries, Title
} from '@devexpress/dx-react-chart-material-ui';
import "./Statistics.css"
import { shallowEqual, useSelector } from "react-redux";
import {getCustomerToPool} from "../../store/Actions/Users"


export const Statistics = () => {
    let PoolsStatistic = [];
    let CustomerToPool=[{Id:1,PoolId:3,TotalPrice:200},{Id:2,PoolId:3,TotalPrice:200},{Id:3,PoolId:6,TotalPrice:500}];
    let x=0,sumAll=0,sumOne=0;

    useEffect(() => {
        

        alert(CustomerToPool[0].Id)
        const json = JSON.stringify(CustomerToPool);
        console.log(json);    
      }, []);



    const { Courses, Pools,Packages } = useSelector(state => ({
        Courses: state.courses_arr,
        Pools: state.poolsArr,
        Packages:state.allCards
    }), shallowEqual);

    const mostProfitablePool = () => {
        for(let i=0;i<Pools.length;i++){
            for(let j=0;j<CustomerToPool.length;j++){
                if(CustomerToPool[j].PoolId==Pools[i].Id){
                    sumOne+=CustomerToPool[j].TotalPrice;
                }
               
            }
            PoolsStatistic[0].sum=sumOne;
            PoolsStatistic[0].percent="20";
            sumAll+=sumOne;

        }
        PoolsStatistic.forEach(element => {element.percent=(element.sum/sumAll)*0.1
            
        });

    }



    return (<>
    {mostProfitablePool()}
    



    </>
    );
}

