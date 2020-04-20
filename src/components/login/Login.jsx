import React from 'react'
import d from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

import { SomeField } from '../renderField/RenderField'
import { email, requer, password2   } from '../../validation/FieldLevelValidationForm'
let Input = SomeField("Input");

let Login = props => {
   const {handleSubmit} = props; 

    return (
        <form onSubmit={handleSubmit}>
            <div className={d.field}>             
                <Field name="mail" label="Почта" component={Input} type="email"  validate={[email, requer]} />
            </div>
            <div className={d.field}>                
                <Field name="password" label="Пароль" component={Input} type="password" validate={[password2, requer]} />
            </div>
            <div className={d.field}>                
                <Field name="checkbox" component={Input} type="checkbox" label="Запомнить меня"/>
            </div>   
            <div>
             {props.error}
            </div>        
            <div className={d.field}>               
                <button type="submit"> Войти </button>              
            </div>
        </form>
        
    )
}
// Y43ggeyrcFRD73q 

let WrapContactForm = reduxForm({
    form: 'contackProfile'
    
})(Login)

 export default WrapContactForm;
