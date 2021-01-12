import React from 'react';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Add_Location from '../components/layouts/admin/listLocation/Add_Location';
function Admin_Add_Location () {
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu/>
            <div className="right">
                <Add_Location/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Admin_Add_Location
