import React , {useEffect , useState} from 'react';
import {Formik} from 'formik';
import Dashboard from '../../Dashboard/dashboard1';
import {editCustomer , getpackages , updateCustomer} from '../services';


export default function index(props) {
let  uuid  = props.match.params.id;  
    async function fetchCustomerDetail() {

        try {
            let res = await editCustomer(uuid);
            setCustomer(res.data);
            console.log('res', res.data)
            if(res.status >= 200 && res.status < 300){
                setCustomer(res.data);
                console.log(showCustomer)

            }
           
        } catch (err) {
            console.log(err);
        }
    }

        async function fetchPackages() {
            try {
                let res = await getpackages();
                if(res.status >= 200 && res.status < 300){
                    setPackages(res.data);
    
                }
               
            } catch (err) {
                console.log(err);
            }
        }

    
    async function UpdateCustomer(values, setSubmitting) {
        try {
         
            let res = await updateCustomer(values,uuid);
            setSubmitting(false);
           
        } catch (err) {
            console.log(err);
        }
    }
    async function updatePayment() {
      let d =  document.querySelector('input[name="payButton"]:checked').value;
    
        
    }
function handleCheckbox(e){
setPay(e.target.checked)
}
    
    useEffect(() => {
        fetchPackages();
        fetchCustomerDetail();
       
    },[]);
    const [packages , setPackages] = useState([]);
    const [showCustomer , setCustomer] = useState('');
    const [pay ,setPay] = useState(false);
    return (
        <Dashboard>
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
                                    
                Add Cusotmer                                            </h3>
                                <span className="kt-txt-style">Manage all your Customers</span>
                            </div>
                        </div>
    {showCustomer !== '' &&

    <Formik
      initialValues={{name : showCustomer && showCustomer.name , contact : showCustomer &&  showCustomer.contact  , debit : showCustomer && showCustomer.debit , credit : showCustomer && showCustomer.credit , packageUuid : showCustomer && showCustomer.packageUuid }}
      onSubmit={(values, { setSubmitting }) => {
        UpdateCustomer(values,setSubmitting)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
        <div className="kt-input-icon ">
            <div className="row">
            <div className=" col-md-10 col-xs-10 col-sm-9 offset-md-1">
            <div className="form-group">
                 <label>Name</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.name}
                        className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
                          type="text" placeholder="name"
                             name="name" autoComplete="off" />
                           {errors.name && touched.name &&
                         <div className="invalid-feedback">{errors.name}</div>}
                 </div>
                 <div className="form-group">
                 <label>Contact</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.contact}
                        className={`form-control ${errors.contact && touched.contact && 'is-invalid'}`}
                          type="text" placeholder="contact Address"
                             name="contact" autoComplete="off" />
                           {errors.contact && touched.contact &&
                         <div className="invalid-feedback">{errors.contact}</div>}
                 </div>


                 <div className="form-group">
                 <label>Packages</label>
                    <select onBlur={handleBlur} onChange={handleChange}
                      value={values.packageUuid}
                        className={`form-control ${errors.packageUuid && touched.packageUuid && 'is-invalid'}`}
                             name="packageUuid" autoComplete="off" >
                            {packages.map(items => {
                                let uuid = items.uuid
                                return (
                                    <option  value={items.uuid} >{items.name}</option>
                                )
                            })}
                        
                             </select>
                           {errors.packageUuid && touched.packageUuid &&
                         <div className="invalid-feedback">{errors.packageUuid}</div>}
                 </div>





                 <div className="form-group">
                 <label>Debit</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.debit}
                        className={`form-control ${errors.debit && touched.debit && 'is-invalid'}`}
                          type="text" placeholder="debit "
                             name="debit" autoComplete="off" />
                           {errors.debit && touched.debit &&
                         <div className="invalid-feedback">{errors.debit}</div>}
                 </div>

                    <div className="form-group">
                 <label>Credit</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.credit}
                        className={`form-control ${errors.credit && touched.credit && 'is-invalid'}`}
                          type="text" placeholder="credit Address"
                             name="credit" autoComplete="off" />
                           {errors.credit && touched.credit &&
                         <div className="invalid-feedback">{errors.credit}</div>}
                 </div>
                 <div className="form-group">
                 <label>Pay </label>
                    <input type="checkbox" name="payCheckbox" onChange={handleCheckbox}/>
                 </div>
                {pay && <div className="form-group">
                
                    <input type="radio" id="payspayAsPackage" name="payButton" value="payspayAsPackage"  /> PayAsPackage<br/>
                    <input type="radio" id="addCustomAmount" name="payButton" value="addCustomAmount"/> AddCustomAmount
                    <br/>
                    <button type="button" className="btn btn-success" onClick={updatePayment}>Update Payment</button>
                    <hr/>
                 </div>
               
                }
                
         
          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
            Submit
          </button>
          </div>
          </div>
          </div>
        </form>
      )}
    </Formik>}

                        </div>
                            </div>
                        </div>
                    </div>
                </div>
               
</Dashboard>
    )

}
