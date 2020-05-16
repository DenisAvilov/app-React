import React from 'react';
import d from './Posts.module.css';
import Post from './post/Post.jsx'
import { Field }   from 'redux-form';
import { reduxForm }   from 'redux-form';
import { Element } from '../../renderField/RenderField';
import { maxLength } from '../../../validation/FieldLevelValidationForm';

const Textarea =  Element("textarea");


const Posts = (props) => {  

    const postItem = props.posts.map(content => (<Post key={content.id} id={content.id}
         massedge={content.massedge} like={content.like} img={content.img} />));
     
       let submit = values => {           
            console.log(values)
            props.add_nuw_post(values.newPost)            
          }   

    return (
        <div className={d.posts}>
            <h2>Ваши посты</h2>
           <PostFieldFormRedux onSubmit={submit}/> 
             {postItem} 
        </div>
    )

}

let maxLength20 = maxLength(20);

let PostFieldForm = (props) => {  
    let {handleSubmit} = props
    return(
        <form onSubmit={ handleSubmit }>
                <Field component={Textarea} name="newPost"
                 type="text" label="Введите новый пост" 
                 
               />
                <button type="submit" >Отправить</button>                
        </form>
    )
}

let PostFieldFormRedux = reduxForm({ form: "newPost" })( PostFieldForm )


export default Posts;