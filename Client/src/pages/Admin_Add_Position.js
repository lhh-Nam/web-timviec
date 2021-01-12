import React from 'react';
import Admin_Menu from '../components/layouts/admin/Admin_Menu';
import Add_Position from '../components/layouts/admin/listPosition/Add_Position';
function Admin_Add_Position () {
    return (
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu/>
            <div className="right">
                <Add_Position/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Admin_Add_Position
