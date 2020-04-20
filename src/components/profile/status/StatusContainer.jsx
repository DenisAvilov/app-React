
import React from 'react'
import { connect } from 'react-redux';
import { upStatus } from '../../../redux/profile-reducer';
import StatusForm from './Status';

class StatusContainer extends React.Component {
   
        state = {
            isStatus: true,
            status: this.props.status
        };

        componentDidUpdate(prevProps, prevState){  
    let a = prevProps.status,
        b = prevState.status,
        thisProps = this.props.status,
        thisState = this.state.status;
    //   console.log('a : Props Status - ' + a, 'СРАВНИВАЕМ С . This Props :' + thisProps );
    //   console.log('b : Prev State - ' + b,  'СРАВНИВАЕМ С . This State :' + thisState) 
        if(a != thisProps){
        this.setState({status : thisProps})
       }
       
     
    }     
 
    isStatusTrue = (data,e) => { 
        this.setState({isStatus : data }) ;  
        console.log(e.currentTarget.defaultValue)
        this.props.upStatus(e.currentTarget.defaultValue);       
        } 

    isStatusFalse = (data) => {             
         this.setState({isStatus : data }) ; 
        
       
           }  
    render() {
    
        return <StatusForm 
        
         isStatus={this.state.isStatus} 
         status={this.state.status}
         upStatus={this.props.upStatus}
         setState={this.props.setState}

         isStatusTrue={this.isStatusTrue}
         isStatusFalse={this.isStatusFalse}

         />
    }
}

let mapStateToProps = (store) => {
    
    return {
        status: store.profile.status
    }
}

export default connect(mapStateToProps, {upStatus})(StatusContainer);
