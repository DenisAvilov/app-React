import React from 'react'
import { Field, reduxForm } from 'redux-form'

//  export const maxLength = max => value =>
//    value && value.length > max ? `Must be ${max} characters or less` : undefined


//1 nave f 2 указываем конечные значение которые будет возвращать фукция
// 3 условие

export const requer = (value) => {
 return value ? undefined  :  "обезательное поле"
//  if(value )return undefined
//  return "обезательное поле"  
}

 export const maxLength = max => value => {
   return value &&  value.length < max ? undefined : ` Максимальное коллическтво ${max} символов ` ;
}
 const minLength = min => value => {
    return value &&  value.length > min ? undefined : ` Минимальное коллическтво ${min} символов ` ;}
export const minLength5 = minLength(5);

export const email = value => {
 return  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
         ? 'Не корекртый email адрес'
         : undefined
}


 const password = min => value => {
  return  value && value.length < min  ? ` Минимальное коллическтво ${min} символов ` : undefined }
export const password2 = password(2)
