import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
import  ReactDOM  from 'react-dom';

function ncard(val,ind,arr){
    return(
        <Card 
        key={val.id}
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
    );
}


ReactDOM.render(
    <>

        <h1 className='heading_style'>List of top 5 Netflix Series in 2022</h1>
        {Sdata.map(ncard)};        
        
        
    </>

,document.getElementById("root")
);




// eslint-disable-next-line no-undef
export default App;