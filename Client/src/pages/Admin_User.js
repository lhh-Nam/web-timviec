import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { withRouter } from 'react-router';
import Admin_List_User from '../components/layouts/admin/listUser/Admin_List_User';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';

function Admin_User ({}) {
   
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu></Admin_Menu>
            <div className="right">
                    <Admin_List_User
                    user={"userState"}
                    online={"onlineUser"}/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Admin_User)