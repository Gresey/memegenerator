import React, { useState,createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage=()=>{
    const [params]=useSearchParams();
    const [count,setCount]=useState(0);
   
    const memeRef=createRef();

    const addText=()=>{
          setCount(count+1)
    }
    return(
        <div className="Editpage">
        <div style={{width:"700px",border:"1px solid"}}ref={memeRef} className="meme mt-5 mb-5">
            <img src={params.get("url")} width="300px"></img>
            {
             Array(count).fill(0).map(e=><Text/>)
            }
        </div>
        <button style={{backgroundColor:'white',borderRadius:'6px' ,margin:'5px',padding:'5px',fontWeight:'bold',border:'0px solid white'}} onClick={addText}>Add Text</button>
        <button style={{backgroundColor:'white',borderRadius:'6px' ,margin:'5px',padding:'5px',fontWeight:'bold',border:'0px solid white'}} onClick={(e)=>{
               exportComponentAsJPEG(memeRef);

        }}>Save</button>
        </div>
    )
};

export default EditPage;