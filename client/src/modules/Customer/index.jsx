import React, {useState, useEffect} from 'react'
import CustomerList from "./list";
import api from './../../Api'
import {setAuthHeaders} from "../../Api/setauthHeaders";
import {deleteCustomersService, getCustomers, inviteUser} from './services';
import {inviteValidationSchema} from "../Login/validation";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {Formik} from "formik";
import Dashboard from '../Dashboard/dashboard1';
import '../../styles/teams.css';
import Pagination from "../../Components/molecules/Pagination";

const Team = (props) => {
    async function deleteUser(id) {
        try {
            
            let res = await deleteCustomersService(id);
            console.log('data deleted successfully',res.data)
            setmapCustomer(!mapCustomer);

        } catch (error) {
            console.log(error);
        }
    }

   

    async function fetchCustomers(options={
        limit:10,
        page:1
    }) {
        try {
            let res = await getCustomers();
            if (res.status >= 200 && res.status < 300) {
                setcustomersList(res.data);
                setmapCustomer(!mapCustomer);
            }
        } catch (err) {
            console.log(err);
        }
    }

   

    useEffect(() => {
        fetchCustomers();
    }, []);

    const [customersList, setcustomersList] = useState([]);
    const [mapCustomer, setmapCustomer] = useState(false);
    const [pagination,setPagination]=useState({});
    return (
      <Dashboard>
  
                <div className="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
                    <h5 className="account-text">Accounts</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
                                id="kt_page_portlet">
                                <div className="kt-portlet kt-portlet--mobile">
                                    <div className="kt-portlet__head kt-portlet__head--lg">
                                        <div className="kt-portlet__head-label">
                                            <h3 className="kt-portlet__head-title">
                                                
                            Cusotmers                                            </h3>
                                            <span className="kt-txt-style">Manage all your Customers</span>
                                        </div>
                                    </div>
<div className="row">
<div className="col-md-2 offset-md-10">
<Link to="/addCustomers"><button className="btn btn-success ">Add Customer</button></Link>

</div>
</div>
                                    <div className="kt-portlet__body kt-portlet__body--fit kt-team-list">
                                        <div
                                            className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded  table-responsive-xl"
                                            id="column_rendering" style={{}}>
                                            <table className="kt-datatable__table table">
                                                <thead className="kt-datatable__head">
                                                <tr className="kt-datatable__row">
                                                    <th data-field="TeamMember"
                                                        className="kt-datatable__cell kt-datatable__cell--sort "><span
                                                        style={{width: '200px'}}>Name</span></th>
                                                    <th data-field="InvitedDate"
                                                        className="kt-datatable__cell kt-datatable__cell--sort"><span
                                                        style={{width: '80px'}}>Contact</span></th>
                                                    <th data-field="Status"
                                                        className="kt-datatable__cell kt-datatable__cell--sort"><span
                                                        style={{width: '70px'}}>debit</span></th>
                                                    <th data-field="Role"
                                                        className="kt-datatable__cell kt-datatable__cell--sort">
                                                        <span style={{width: '70px'}}>credit</span></th>
                                                        <th data-field="Role"
                                                        className="kt-datatable__cell kt-datatable__cell--sort">
                                                        <span style={{width: '70px'}}>Edit</span></th>
                                                        <th data-field="Role"
                                                        className="kt-datatable__cell kt-datatable__cell--sort">
                                                        <span style={{width: '70px'}}>delete</span></th>
                                                </tr>
                                                </thead>
                                                <tbody className="kt-datatable__body" style={{}}>
                                                {
                                                 mapCustomer ? 
                                                customersList.map((item, i) => {
                                                        return (
                                                            <CustomerList key={i} {...item} currentRole={item} TeamIndex={i}  deleteUser={deleteUser} />
                                                        )
                                                }) : 
                                                customersList.map((item, i) => {
                                                    return (
                                                        <CustomerList key={i} {...item} currentRole={item} TeamIndex={i}  deleteUser={deleteUser} />
                                                    )
                                                })
                                                }
                                               
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {pagination && pagination.totalPages?<Pagination handleClick={getCustomers} {...pagination}/>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

           
      
</Dashboard>
    )
};
export default Team;
