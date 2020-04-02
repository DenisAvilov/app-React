import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

 // Получаем данные для выполнения условия при отрисовки новой компоненты
 let mapStateToProps = (store) => {
    return {
        identification: store.login.isYou
    }
}

//Создаем чистую функцианальную функцию, которая принимает Component 
export const withAuthMe = (Component) => {
   
    // в withAuthMe создаем классовую чистую функцию новый-Component которая является оберткой для получаемого компонента.  
    class WrappComponent extends React.Component {

        render() {
            //задаем условие отрисовки нашей новой компоненты
            if (!this.props.identification) return <Redirect to={{ pathname: "/login" }}> </Redirect>
            return (
                //Отрисовываем входящий Component без искажений.
                <Component {...this.props} />
            )
        }

    }
    //connect вернет новый Component WrappComponent
    let NewComponent = connect(mapStateToProps, {})(WrappComponent)
    return NewComponent;
}