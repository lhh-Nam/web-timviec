import React, {useState, useEffect} from 'react'

import '../../../assets/Admin_Css/admin'
import '../../../assets/Admin_Css/admin.css'

import { withRouter } from 'react-router'
import Admin_Menu from './Admin_Menu'

function Admin_Dashboard ({}) {
   
    return (
    <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            <Admin_Menu product={""}></Admin_Menu>
            <div className="right">
                {/* {onShowContent(history.location.pathname)} */}
            </div>
            </div>
        </div>
        </div>

    )
}
export default withRouter(Admin_Dashboard)