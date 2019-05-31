import React , {useEffect , useState} from 'react';
import {Formik} from 'formik';
import Dashboard from '../../Dashboard/dashboard1';
import {addExpenses} from '../services';
import {ExpenseSchema} from '../../validations';
import {showToaster} from '../../../utils/toastr';


 

export default function index() {
  
    async function addExpense(values, setSubmitting) {
        try {
        let today = new Date();
        values.month = today.getMonth()+1;
        values.paymentDate = today.getDate();

            let res = await addExpenses(values);
            if(res.status >=200 && res.status<300){
              showToaster('success','Expenses added successfully');
              setSubmitting(false);
                setTimeout(() => {
                  window.location.href='/expenses'
                }, (2000));
            
            }
              else {
                showToaster('error','Something went wrong');
              }
           
        } 
        catch (err) {
            console.log(err);
        }
    }

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
                                    
                Add Expense                                            </h3>
                                <span className="kt-txt-style">Manage all your Customers</span>
                            </div>
                        </div>
    <Formik
      initialValues={{ companyUuid: '', name: '',price : ''}}
      onSubmit={(values, { setSubmitting }) => {
        addExpense(values,setSubmitting)
      }}
      validationSchema={ExpenseSchema}

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
                 <label>Company id</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.companyUuid}
                        className={`form-control ${errors.companyUuid && touched.companyUuid && 'is-invalid'}`}
                          type="text" placeholder="Company id"
                             name="companyUuid" autoComplete="off" />
                           {errors.companyUuid && touched.companyUuid &&
                         <div className="invalid-feedback">{errors.companyUuid}</div>}
                 </div>
                 <div className="form-group">
                 <label>Discription</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.name}
                        className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
                          type="text" placeholder="Discription"
                             name="name" autoComplete="off" />
                           {errors.name && touched.name &&
                         <div className="invalid-feedback">{errors.name}</div>}
                 </div>



                 <div className="form-group">
                 <label>Amount</label>
                    <input onBlur={handleBlur} onChange={handleChange}
                      value={values.price}
                        className={`form-control ${errors.price && touched.price && 'is-invalid'}`}
                          type="text" placeholder="price "
                             name="price" autoComplete="off" />
                           {errors.price && touched.price &&
                         <div className="invalid-feedback">{errors.price}</div>}
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
