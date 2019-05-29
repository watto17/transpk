import React, {useState} from 'react'
import {deltTeamUserService, changeRoleService} from './services';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default function PackageList(props) {
    const [roledrpdwn, setroledrpdwn] = useState(false)
   async function deleteUser(id){
        props.deleteUser(id)  }
    function showRoleDropDown() {
        setroledrpdwn(!roledrpdwn);
    }

    async function changeRoleApi(role, id) {
        let data = await changeRoleService(role, id);
        props.onClick(role, id)
    }
   function showRoleDropDown(){
    setroledrpdwn(!roledrpdwn);
   }
   async function changeRoleApi(role,id,index) {
       let data = await changeRoleService(role,id);
       props.onClick(role,index);
       setroledrpdwn(false);
    
   }
    return (
        <tr data-row={0} className="kt-datatable__row">
            <td data-field="TeamMember" className="kt-datatable__cell ">
            <span style={{width: '200px'}}>
                <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                        <div
                            className="kt-badge kt-badge--xl kt-badge--warning">{props && props.firstName?props.firstName[0].toUpperCase():''}</div>
                    </div>
                    <div className="kt-user-card-v2__details">
                        <span
                            className="kt-user-card-v2__name">{props.firstName} {props.lastName}</span>
                        <a className="kt-user-card-v2__email kt-link"
                           href="#">{props.email}</a>
                    </div>
                </div>
            </span>
            </td>
            <td data-field="InvitedDate" className="kt-datatable__cell">
                <span style={{width: '80px'}}>5/11/2019</span></td>
            <td data-field="Status" className="kt-datatable__cell">
        <span style={{width: '70px'}}>
            <button type="button"
                    className={`btn btn-sm btn-bold   ${props.isVerified ? 'btn-label-success' : 'btn-label-brand'} `}>{props.isVerified ? 'Active' : 'Invited'}
            </button>
            </span>
            </td>
            <td className="kt-datatable__cell">
  <Dropdown id="drpdwn" isOpen={roledrpdwn} toggle={showRoleDropDown}>
        <DropdownToggle style={{width:'80px'}} caret   className="btn btn-bold btn-sm label-brandd">
         {props.role === 'admin' ?'Admin':'Member'}
        </DropdownToggle>
        <DropdownMenu className="innerDrp"    style={{padding: '0px'}}>
            {props.role === 'admin' ? <DropdownItem color="work"  onClick={() => changeRoleApi('user',props._id,props.TeamIndex)}>Member</DropdownItem> : <DropdownItem  onClick={() => changeRoleApi('admin',props._id,props.TeamIndex)}>Admin</DropdownItem> }
        </DropdownMenu>
      </Dropdown>
            </td>
            <td data-field="Action" className="kt-datatable__cell">
        <span style={{width: '70px'}}>
            <a className="btn-cursor" title="Delete" onClick={() => deleteUser(props._id)}>
                <i style={{fontSize:'19px'}} className="la la-trash-o text-danger" aria-hidden="true"/>
            </a>
            </span>
            </td>
        </tr>
    )
}
