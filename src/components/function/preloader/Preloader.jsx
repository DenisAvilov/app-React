import React from "react"
import preloader from "./../../../imgs/preloader.gif"
import "./Preloader.css"; 
const Preloader = () => {
    return(
        <div className="wrap_preloader">
             <img src={preloader} />
      </div>
    )
}

export default Preloader;