import React from 'react';
import { withRouter } from 'react-router';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Admin_List_Location from '../components/layouts/admin/listLocation/Admin_List_Location';

function Admin_Location ({}) {
   
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu></Admin_Menu>
            <div className="right">
                   <Admin_List_Location/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Admin_Location)