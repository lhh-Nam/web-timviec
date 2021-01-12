import React from 'react';
import { withRouter } from 'react-router';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Admin_List_Position from '../components/layouts/admin/listPosition/Admin_List_Position';

function Admin_Position ({}) {
   
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu></Admin_Menu>
            <div className="right">
                   <Admin_List_Position/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Admin_Position)