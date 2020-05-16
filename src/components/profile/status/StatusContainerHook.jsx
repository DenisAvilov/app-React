
import React, { useState } from 'react'
import { connect } from 'react-redux';
import d from './Status.module.css'
import { useEffect } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';



const StatusContainer = (props) =>  {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
  

  let  isStatusTrue = (e) => {                
         setStatus(e.currentTarget.value);                
     } 
        
      let changeEditMode = () => {        
            setEditMode(!editMode)          
      } 
      let setStatusBlur = () => {
        setEditMode(!editMode) 
         props.upStatus(status) 
      }  


     //https://habr.com/ru/company/ruvds/blog/445276/

     useEffect( () => { setStatus(props.status) }, [props.status])

 
        return(<div className={d.wrap}>

        { !editMode && <div ><span onDoubleClick={changeEditMode}>{props.status || "-----"}</span></div>}

        { editMode && <div> <input onBlur={setStatusBlur} onChange={isStatusTrue} value={status}  autoFocus={true} ></input> </div>  }   
       
          </div> 
        )

   
}

export default StatusContainer;