import React, { useState } from 'react';
import '../../styles/login.default.css';
import './../../styles/theme/style.bundle.css';
import './../../styles/style.css';
import { Link } from 'react-router-dom';
import auth from './../../utils/auth';
import { Formik } from "formik";
import { LOGIN } from '../../Api/endpoints'
import Notification from "./../../utils/notification";
import { getToken } from "./service";
import {LOGIN_SUCCESSFULL, ICORRECT_EMAIL, SOMETHING_WRONG} from '../../utils/AlertMessages';

import Alerts from '../../Components/Atoms/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { loginValidationSchema } from './validation';


const Login = (props) => {
    const [errorStatus, seterrorStatus] = useState();
    const [errormsg , seterrormsg] = useState();
    async function login(values, setSubmitting) {
        try {
            let res = await getToken(values);
            setSubmitting(false);
            if (res.meta.status >= 200 && res.meta.status < 300) {
                seterrorStatus("success");
                seterrormsg(LOGIN_SUCCESSFULL);
                auth.login(res.data.token.token, () => {
                    if (values && values.remember) {
                        localStorage.setItem('remember', values.remember);
                    }
                    props.history.push('/dashboard');
                });
            } else {
                seterrorStatus("error");
                seterrormsg(ICORRECT_EMAIL)
            }
        } catch (error) {
            seterrorStatus("error");
            seterrormsg(SOMETHING_WRONG)
            
                   }

    }
    if (localStorage.getItem('remember') && localStorage.getItem('token')) {
        props.history.push('/dashboard');
    }
    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                login(values, setSubmitting);

            }}
            validationSchema={loginValidationSchema}>{(props) => {
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
                } = props;
                return (
                    <div className="kt-grid kt-grid--ver kt-grid--root main-div">
                    <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
                
                        <div
                            className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                            {/*begin::Aside*/}
                            <div
                                className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside"
                                style={{ backgroundImage: 'url(/Images/bg-img.png)' }}>
                                <div className="kt-grid__item">
                                    <a href="#" className="kt-login__logo">
                                        <img src="/Images/sadeed-logo.svg" width="200" height="60" />
                                    </a>
                                </div>
                                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                                    <div className="kt-grid__item kt-grid__item--middle">
                                        <h3 className="kt-login__title"> SADEED</h3>
                                        <h4 className="kt-login__subtitle">keeps your team perfectly in
                                                sync <br /> and
                                                automate their tasks </h4>
                                    </div>
                                </div>
                                <div className="kt-grid__item">
                                    <div className="kt-login__info">
                                        <div className="kt-login__copyright" id="kt-login__copy">
                    2019&nbsp;©&nbsp;<a href="https://sadeed.io/" target="_blank" className="kt-link-footer">Sadeed</a>
                                            </div>

                                        <div className="kt-login__menu">
                                            <a href="#" className="kt-link">Terms of Services</a>
                                            <a href="#" className="kt-link">Privacy</a>
                                            <a href="#" className="kt-link">Contact</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*begin::Aside*/}
                            {/*begin::Content*/}
                            <div
                                className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                                {/*begin::Head*/}

                                {/*end::Head*/}
                                {/*begin::Body*/}
                                <div className="kt-login__body">
                                    {/*begin::Signin*/}
                                    <div className="kt-login__form">
                                        <div className="kt-login__title">
                                            <h3>Login</h3>
                                            <span className="kt_subtitle"> Enter details below</span></div>

                                        {/*begin::Form*/}
                                        <form onSubmit={handleSubmit} className="kt-form" action="#" noValidate>
                                        
                                                <Alerts  status={errorStatus} msg={errormsg} />
                                            <div className="form-group">
                                                <input onBlur={handleBlur} onChange={handleChange}
                                                    value={values.email}
                                                    className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                                                    type="text" placeholder="Email Address"
                                                    name="email" autoComplete="off" />
                                                {errors.email && touched.email &&
                                                    <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                            <div className="form-group">
                                                <input onBlur={handleBlur} value={values.password}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                                                    type="password" placeholder="Password"
                                                    name="password" />
                                                {errors.password && touched.password &&
                                                    <div className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                            {/*begin::Action*/}

                                            <div className="form-group">
                                                <div className="row kt-remember">
                                                    <div className="col-md-7">
                                                        <label className="kt-checkbox box">
                                                            <input onChange={handleChange} name="remember"
                                                                type="checkbox" id="defaultUnchecked" />
                                                            Remember Me <span></span></label>

                                                    </div>
                                                    <div className=" col-md-5 link-style">
                                                        <Link to={{ pathname: '/forgetPassword', state: values.email }} className="kt-link"> Forgot
                                                                Password ?</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions ">
                                                <div className="row kt-btn">
                                                    <div className="col-md-12 tex-center">
                                                        <button type="submit" disabled={isSubmitting}
                                                            id="kt_login_signin_submit"
                                                            className={"btn btn-primary btn-elevate kt-login__btn-primary"}>Login <FontAwesomeIcon
                                                                className={(isSubmitting ? ' vis' : ' spin_ldr')}
                                                                icon={faSpinner} spin pull="right" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Action*/}
                                        </form>
                                        {/*end::Form*/}
                                        {/*begin::Divider*/}
                                        <div className="kt-login__divider">
                                            <div className="kt-divider">
                                                <span />
                                                <span>OR</span>
                                                <span />
                                            </div>
                                        </div>
                                        <div className="kt-login__head">
                                            <span
                                                className="kt-login__signup-label">Don't have an account?</span>&nbsp;&nbsp;
                                                <Link to='/register' className="kt-link kt-login__signup-link">Create
                                                    one now!</Link>
                                        </div>
                                    </div>

                                    {/*end::Signin*/}
                                </div>

                                {/*end::Body*/}
                            </div>

                            {/*end::Content*/}
                        </div>

                    </div>

              </div>
                )
            }}

        </Formik>

    )
};
export default Login;