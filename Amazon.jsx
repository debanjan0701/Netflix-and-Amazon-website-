import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon=() =>
{
return(
    <Card 
    key={Sdata[3].id}
    imgsrc={Sdata[3].imgscr}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].links}
    />
);
}
export default Amazon;