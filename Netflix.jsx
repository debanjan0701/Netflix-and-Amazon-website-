import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix=() =>
{
return(
    <Card 
    key={Sdata[1].id}
    imgsrc={Sdata[1].imgscr}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].links}
    />
);
}
export default Netflix;