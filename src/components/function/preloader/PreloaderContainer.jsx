import React from "react"
import Preloader from "./Preloader"
import { connect } from "react-redux"
 


class PreloaderContainer extends React.Component{
    render(){
        return(
            <Preloader preloader={this.props.preloader}/>
        )
    }

}

let mapStateToProps = (store) => {
    return{
        preloader : store.dialogues.isLoading
    }
}

export default connect(mapStateToProps)(PreloaderContainer);

