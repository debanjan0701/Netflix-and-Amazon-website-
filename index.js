import React from 'react';
import ReactDOM from 'react-dom';
import Amazon from './Amazon';
import Card from './Cards';
import './index.css';
import Netflix from './Netflix';
import App from "./App";

const favSeries='amazon';

const FavS=()=>{
if(favSeries==='netflix'){
    return(
        <Netflix/>
    );
}else{
    return(
        <Amazon/>
    );
}
}
function ncard(val,ind,arr){
    return(
        <Card
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        limk={val.links}
        />
    );
}


ReactDOM.render(
    <>

        <App/>
        
        <FavS/>  
        
        
    </>

,document.getElementById("root")
);