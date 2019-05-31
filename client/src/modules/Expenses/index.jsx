import React, {useState, useEffect} from 'react'
import ExpenseList from "./list";
import api from './../../Api'
import {setAuthHeaders} from "../../Api/setauthHeaders";
import {deltTeamUserService, getTeams, inviteUser,getExpenses} from './services'; 
import {inviteValidationSchema} from "../Login/validation";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {Formik} from "formik";
import Dashboard from '../Dashboard/dashboard1';
import '../../styles/teams.css';
import Pagination from "../../Components/molecules/Pagination";
import {showToaster} from '../../utils/toastr';


const Expenses = (props) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [mapTeams, setmapTeams] = useState(false);
    const [pagination,setPagination]=useState({});
    async function deleteUser(id) { 
        try {
            let res = await deltTeamUserService(id); 
            if(res.status >=200 && res.status<300){
                showToaster('success','User Deleted Successfull');
                fetchExpense();
            }
            else{
                showToaster('error','Something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function changeRoleCurrent(role,index){
    

        let allTeams = teamMembers;
      
        delete allTeams[index].role ;
        allTeams[index].role = role;
      
        setTeamMembers(allTeams);
        setmapTeams(!mapTeams);
        
        
    }
    async function mapItems(){

    }

    async function fetchExpense(options={
        limit:10,
        page:1
    }) {
        try {
            let res = await getExpenses(options);
            if (res.status >= 200 && res.status < 300) {
                setTeamMembers(res.data);
                setmapTeams(!mapTeams);
            }
            console.log("expense ",res)

        } catch (err) {
            console.log(err);
        }
    }

    async function sendInvite(values, setSubmitting) {
        try {
            if(props && props.firstName) {
                values.firstName=props.firstName;
                values.lastName=props.lastName;
            }
            var res=await inviteUser(values);
            if(res.meta.status>=200 && res.meta.status<300){
                teamMembers.push(res.data);
                setTeamMembers(teamMembers);
            }
            setSubmitting(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchExpense();
    }, []);

    
    return (
      <Dashboard>
        <Formik
            initialValues={{email: ''}}
            onSubmit={async (values, {setSubmitting}) => {
                sendInvite(values, setSubmitting);
            }}
            validationSchema={inviteValidationSchema}>{(formikProps) => {
            const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
                handleReset,
            } = formikProps;
            return (
                <div className="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
                    <h5 className="account-text">Account</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
                                id="kt_page_portlet">
                                <div className="kt-portlet kt-portlet--mobile">
                                    <div className="kt-portlet__head kt-portlet__head--lg">
                                        <div className="kt-portlet__head-label">
                                            <h3 className="kt-portlet__head-title">
                                                Expenses
                                            </h3>
                                            <span className="kt-txt-style">Manage all your team members</span>
                                        </div>
                                    </div>
                                    <div className="row">
<div className="col-md-2 offset-md-10">
<Link to="/addExpenses"><button className="btn btn-success ">Add Expenses</button></Link>

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
                                                        style={{width: '200px'}}>Company Id</span></th>
                                                    <th data-field="InvitedDate"
                                                        className="kt-datatable__cell kt-datatable__cell--sort"><span
                                                        style={{width: '80px'}}>Description</span></th>
                                                    <th data-field="Status"
                                                        className="kt-datatable__cell kt-datatable__cell--sort"><span
                                                        style={{width: '70px'}}>Amount</span></th>
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
                                                 mapTeams ? 
                                                teamMembers.map((item, i) => {
                                                        return (
                                                            <ExpenseList key={i} {...item} currentRole={item} TeamIndex={i} onClick={changeRoleCurrent} deleteUser={deleteUser} />
                                                        )
                                                }) : 
                                                teamMembers.map((item, i) => {
                                                    return (
                                                        <ExpenseList key={i} {...item} currentRole={item} TeamIndex={i} onClick={changeRoleCurrent} deleteUser={deleteUser} />
                                                    )
                                                })
                                                }
                                               
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {pagination && pagination.totalPages?<Pagination handleClick={fetchExpense} {...pagination}/>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            )
        }}

        </Formik>
      
</Dashboard>
    )
};
export default Expenses;
