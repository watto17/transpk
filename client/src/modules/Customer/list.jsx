import React, {useState} from 'react'
import {deltTeamUserService, changeRoleService} from './services';
import {Link} from 'react-router-dom';
export default function TeamsList(props) {
    const [roledrpdwn, setroledrpdwn] = useState(false)
   async function deleteUser(id){
        props.deleteUser(id)  }
 
    return (
        <tr data-row={0} className="kt-datatable__row">
            <td data-field="TeamMember" className="kt-datatable__cell ">
            <span style={{width: '200px'}}>
                <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                        <div
                            className="kt-badge kt-badge--xl kt-badge--warning">{props && props.name?props.name[0].toUpperCase():''}</div>
                    </div>
                    <div className="kt-user-card-v2__details">
                        <span
                            className="kt-user-card-v2__name">{props.name}</span>
                       
                    </div>
                </div>
            </span>
            </td>
            <td data-field="InvitedDate" className="kt-datatable__cell">
                <span style={{width: '80px'}}>{props && props.contact}</span></td>
                <td data-field="InvitedDate" className="kt-datatable__cell">
                <span style={{width: '80px'}}>{props && props.debit}</span></td>
                <td data-field="InvitedDate" className="kt-datatable__cell">
                <span style={{width: '80px'}}>{props && props.credit}</span></td>
 
            <td data-field="Action" className="kt-datatable__cell">
        <span style={{width: '70px'}}>
            <Link to={`/editCustomers/${props && props.uuid}`} className="btn-cursor" title="eidt">
                <button className="btn btn-success">Edit</button>
            </Link> 
            </span>
            </td>
            <td data-field="Action" className="kt-datatable__cell">
        <span style={{width: '70px'}}>
            <a className="btn-cursor" title="Delete" onClick={() => deleteUser(props.uuid)}>
                <i style={{fontSize:'19px'}} className="la la-trash-o text-danger" aria-hidden="true"/>
            </a>
            </span>
            </td>
        </tr>
    )
}
