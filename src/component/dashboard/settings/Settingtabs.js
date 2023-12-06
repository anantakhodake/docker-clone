import React from 'react'
import "./Settingtabs.css"
import Genaralsettingtab from './Genaralsettingtab'

function Settingtabs() {
  return (
    <div className='settingtabs_container'>
       <div className="s_card1">
        <h4>Genaral</h4>
        <p>Security</p>
        <p>Default Privacy</p>
        <p>Notifications</p>
        <p>Convert Account</p>
        <p>Deactivate Account</p>
      </div>
      <Genaralsettingtab />
    </div>
  )
}

export default Settingtabs
