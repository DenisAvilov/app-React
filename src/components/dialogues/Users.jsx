import React from 'react';
import d from './Users.module.css';
import { NavLink } from 'react-router-dom';
import preloader from './../../imgs/preloader.gif';
const Users = (props) => {
    let path = '/dialogues/';  

   let allPage =  Math.ceil(props.totalCount/props.pageSize);
   let pagination = [];   
      for( let i = 1; i <= allPage; i++){         
          if( i === 11 ){             
            break           
          }
          pagination.push(i)   
            } 

    return (
    <div> 
       
      { props.isloading && <img src={preloader} alt=""/>  } 
       <div>
          <span>Prev</span>
            { pagination.map(el =>  
              <span onClick={ ()=> props.onPagination(el) } className={ props.currentPage === el ? d.currentPageActive  : d.currentPage   }>{el}</span>        
            ) }
          <span>Nex</span>
       </div> 

        <div className={d.dialogs}>           
            <div className={d.dialogsi_items}>             
                    {props.users.map(user => 
                    
                    <div className={d.dialog}>
                        <NavLink to={path + user.id} activeClassName={d.active}>
                            {user.photos.small === null ?
                                <div className={d.img_logo_wrap}>
                                    <img className={d.img_logo} src="https://i.pinimg.com/originals/3d/6d/53/3d6d53f5a27089f411588dd57b8d8a87.png" alt="" />
                                </div> :
                                <div className={d.img_logo_wrap}><img className={d.img_logo} src={user.photos.small} alt="" /></div>}
                            <h2> {user.name} </h2>
                         </NavLink>
                        {user.status === null ? <p>Здесь будет Ваш статус</p> : <p>{user.status}</p>}
                        {user.followed === true ?
                            <button onClick={() => props.unfollow(user.id) } > Удалить из друзей</button>
                            :
                            <button onClick={() => props.follow(user.id)} > Добавить в друзья</button>}

                    </div>
                    
                    )
                    }                
            </div>
     
         </div>
      </div>
    )
}


export default Users;