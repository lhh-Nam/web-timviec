import React from 'react';
import { withRouter } from 'react-router';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Admin_List_Category from '../components/layouts/admin/listCategory/Admin_List_Category';

function Admin_Category ({}) {
   
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu></Admin_Menu>
            <div className="right">
                   <Admin_List_Category/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Admin_Category)