import React, { useEffect, useState } from "react";
import MemeCard from "../components/card";
import { getAllMemes } from "../api/memes";
const HomePage=()=>{
   const [memes,setMemes]=useState([]);
    useEffect(()=>{
     getAllMemes().then((memes)=>setMemes(memes.data.memes));
    },[]);
    return(
        <div className="row main">
            {memes.map(e=><MemeCard title={e.name} img={e.url}/>)}           
        </div>
    )
}

export default HomePage;