import React from "react"
import preloader from "./../../../imgs/preloader.gif"
import "./Preloader.css"; 
const Preloader = (props) => {
    return(
        <div className="wrap_preloader">
             {props.preloader &&  <img src={preloader} />} 
      </div>
    )
}

export default Preloader;