import React from 'react';
import d from './Dialogues.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';
import * as axios from 'axios';

class Dialogues extends React.Component {
//единственное правильное место для сайд эфектов 

  //componentDidMount метод жизнинего цикла

    //  componentDidMount(){         
    //    axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //        .then(response => {           
    //              this.props.set_users(response.data.items)
    //        })
    //     }

    userName = this.props.state.users.map(user =>
        (<Dialog key={user.id} id={user.id} name={user.name} photos={user.photos} 
           followed={user.followed} 
           follow={this.props.follow} unfollow={this.props.unfollow} 
         />));


    render() {
        return (
            <div className={d.dialogs}>
                <div className={d.dialogsi_items}>
                    {this.userName}
                </div>                
            </div>
        )

    }
}

export default Dialogues;