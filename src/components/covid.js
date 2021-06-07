import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () =>{



    const [data, setData]=useState([]);
    const getCovidData=async()=>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData =await res.json();
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
       
    }

  useEffect(( ) =>{
      
    getCovidData();
  },[]);

  return (
    <div className="body">
    <section className="container-fulid">
         <h1><span className="cir">●</span> LIVE </h1>
         <p>COVID-19 CORONAVIRUS TRACKER</p>
     </section>
     <section className="container">

        <div className="row">

            <div className="col-lg-4 col-md-4 card c1">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">OUR<span> COUNTRY</span></p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </div>  
            <div className="col-lg-4 col-md-4 card c2">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">TOTAL<span> RECOVERED</span></p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </div> 
            <div className="col-lg-4 col-md-4 card c3">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">TOTAL<span> CONFIRMED</span></p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
            </div> 

        </div>
        <div className="row">

            <div className="col-lg-4 col-md-4 card c4">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">TOTAL<span> DEATHS</span></p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
            </div>  
            <div className="col-lg-4 col-md-4 card c5" >
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">TOTAL<span> ACITVE</span></p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
            </div> 
            <div className="col-lg-4 col-md-4 card c6">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name">LAST<span> UPDATED</span></p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </div> 

        </div>
         
     </section>
    </div>    
  )
}

export default Covid