import React , {useEffect , useState} from 'react';
import {Formik} from 'formik';
import Dashboard from '../../Dashboard/dashboard1';
import {getpackages , addCustomers} from '../services';
import {showToaster} from '../../../utils/toastr';
import {CustomersSchema} from '../validations';


export default function index() {
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
    

    async function addCustomer(values, setSubmitting) {
        try {
         
        let today = new Date();
        values.month = today.getMonth()+1;
        values.paymentDate = today.getDate();

            let res = await addCustomers(values);
            if(res.status >=200 && res.status<300){
            showToaster('success','Customer added successfully');
            setSubmitting(false);
              setTimeout(() => {
                window.location.href='/customers'
              }, (2000));
          
          }
            else {
              showToaster('error','Something went wrong');
            }
           
        } catch (err) {
            console.log(err);
        }
    }

    
    useEffect(() => {
        fetchPackages();
    },[]);
    const [packages , setPackages] = useState([]);
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
    <Formik
      initialValues={{ name: '', contact: '',packageUuid : '' , debit : ''  , credit : '' }}
      onSubmit={(values, { setSubmitting }) => {
        addCustomer(values,setSubmitting)
      }}

      validationSchema={CustomersSchema}
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
                            {packages.map((items , index) => {
                                return (
                                    <option key={index} value={items.uuid}>{items.name}</option>
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
                 
         
          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
            Submit
          </button>
          </div>
          </div>
          </div>
        </form>
      )}
    </Formik>

                        </div>
                            </div>
                        </div>
                    </div>
                </div>
               
</Dashboard>
    )

}
