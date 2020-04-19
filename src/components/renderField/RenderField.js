import React from "react"
import d from './RenderField.module.css'
export const Textarea = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    let  myError = touched && error;
    
    return(    
    <div className={d.formValid + " " +  (myError ? d.styleError : " ")}>      
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={label} type={type} />
      </div>
      <div>
        { myError && <span >{error}</span>}
      </div>
    </div>
  )}


  export const Input = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    let  myError = touched && error;
    
    return(    
    <div className={d.formValid + " " +  (myError ? d.styleError : " ")}>      
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
      </div>
      <div>
        { myError && <span >{error}</span>}
      </div>
    </div>
  )}

  
  // {touched &&
  //   ((error && <span>{error}</span>) ||
  //     (warning && <span>{warning}</span>))}