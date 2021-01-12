import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { withRouter } from 'react-router';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Admin_List_Post from '../components/layouts/admin/listPost/Admin_List_Post';

function Admin_User ({}) {
   
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu></Admin_Menu>
            <div className="right">
                    <Admin_List_Post/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Admin_User)