import React from 'react';
import d from './Status.module.css'
import { Field, reduxForm } from 'redux-form'
import { StatusInput } from './../../renderField/RenderField'
let Status = props => {

  let isStatusTrue = (e) => {
    props.isStatusTrue(true, e);
  }

  let isStatusFalse = (e) => {
    props.isStatusFalse(false, e);
  }



  const { change } = props
  return <form onChange={change} className={d.wrap}>

    {props.isStatus
      ? <div onDoubleClick={isStatusFalse}> <span>{props.status}</span> </div>
      : <Field name="statusInput"
        component={StatusInput} type="text" autoFocus={true}
        onBlur={isStatusTrue}></Field>}

  </form>
}

let StatusForm = reduxForm({
  form: 'status'
})(Status);

export default StatusForm;












// class Status extends React.Component {  
//   textInput = React.createRef()   ;  
//        state = { 
//              isStatus : true,
//              status : this.props.status 
//             };  
//   watchState = (e) => {      
//     this.setState(
//       {status : e.currentTarget.value }
//         )        
//   }   
//   isStatusTrue = () => {    
//     this.setState({isStatus : true }) ;      
//     this.props.upStatus(this.state.status)
//       } 
//   isStatusFalse = () => {    
//     this.setState({isStatus : false }) ;    
//       }   

  // componentDidUpdate(prevProps, prevState){  
  //    let a = prevProps.status,
  //        b = prevState.status,
  //         thisProps = this.props.status,
  //        thisState = this.state.status;
  //    console.log('a : Props Status - ' + a, '. This Props :' + thisProps );
  //     console.log('b : Prev State - ' + b,  '. This State :' + thisState) 
  //      if(a !== b){
  //      this.setState({status : this.props.status})
  //     }
  //   }

// render(){
//   console.log("rende componentDiD")
//     return(<div className={d.wrap}>
//          {this.state.isStatus 
//              ? <div onDoubleClick={ this.isStatusFalse } > <span> {this.props.status} </span></div> 
//              : <div >   onChange={this.watchState} autoFocus={true} onBlur={this.isStatusTrue} 
//              value={this.state.status} } </div>}  
//         </div>
//     )
// } 

// }

 // upNewStateToServer = () => {
  //   this.props.upStatus(this.state.status)
  // }  

//В componentDidUpdate приходитят два аргумента PrevProps, PrevState. Достучатся до них можно через this.state   
//Сдесь можно понять какие изменения произошли, почему мы сюда попали, какие изменения привели к тому что  мы сюда попали.
// componentDidUpdate(prevProps, prevState) {
  //обезательно должно быть условие

  // if(prevProps.status !== this.props.status){

  //   this.setState({
  //     status : this.props.status
  //    })
  //  }
  //   console.log("componentDiD Up Date")
  // }
  // isStatus = () => {    
  //   this.setState({isStatus : !this.state.isStatus }) ;

  //     } 
