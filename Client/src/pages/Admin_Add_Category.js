import React from 'react';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Add_Category from '../components/layouts/admin/listCategory/Add_Category';
function Admin_Add_Category () {
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu/>
            <div className="right">
                <Add_Category/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Admin_Add_Category
