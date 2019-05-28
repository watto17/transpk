import React, { useState, useEffect } from "react";
import "../../styles/theme/style.bundle.css";
import "./../../styles/style.css";
import "./../../styles/register.default.css";
import Sadeed from "./../../Components/molecules/sadeedImage.jsx";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { registerApi, EditEmailApi, fetchUserEmail } from "./service";
import Alerts from "../../Components/Atoms/Alert";
import Notification from "./../../utils/notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import {SOMETHING_WRONG}  from '../../utils/AlertMessages';

import { RegisterValidationSchema } from "./validation";
const qs = require("query-string");
const Register = props => {
  const query = qs.parse(window.location.search);
  //   const [msg, setMsg] = useState("");
  //   const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  //custom add Hooks
  const [alertError, setAlertError] = useState("");
  const [alertErrorMessage, setAlertErrorMessage] = useState("");

  async function getUserEmail(uuid) {
    const res = await fetchUserEmail(uuid);
    if (res.meta.status >= 200 && res.meta.status < 300) {
      setEmail(res.data.email);
    }
  }
  useEffect(() => {
    if (query && query.Code) {
      getUserEmail(query.Code);
    }
  }, []);
  
  let initialState = {
    firstName: "",
    lastName: "",
    email: email,
    password: "",
    passwordConfirmation: ""
  };
  async function register(values, setSubmitting) {
    try {
      let res = {};
      if (query && query.Code) {
        res = await EditEmailApi(values, query.Code);
        if (
          res &&
          res.meta &&
          res.meta.status >= 200 &&
          res.meta.status < 300
        ) {
          props.history.push("/");
        } else {
          setAlertError("error");
          setAlertErrorMessage(res.meta.message);
        }
      } else {
        res = await registerApi(values);
        if (
          res &&
          res.meta &&
          res.meta.status >= 200 &&
          res.meta.status < 300
        ) {
          props.history.push("/confirmation", {
            sendEmailUuid: res.data.uuid,
            values: values
          });
        } else {
          setAlertError("error");
          setAlertErrorMessage(res.meta.message);
        }
      }
      setSubmitting(false);
    } catch (error) {
      setAlertError("error");
      setAlertErrorMessage(SOMETHING_WRONG);
    }
  }
  return (
    <Formik
      initialValues={initialState}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
        register(values, setSubmitting);
      }}
      validationSchema={RegisterValidationSchema}
    >
      {props => {
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
          handleReset
        } = props;
        const alertStyle = {
          background: "rgba(253, 57, 122, 0.1)",
          borderColor: "transparent",
          marginBottom: "-5%"
        };   
        return (
          <div className="kt-grid kt-grid--ver kt-grid--root main-div">
          <div
            className="kt-grid kt-grid--hor kt-grid--root  kt-register kt-register--v1"
            id="kt_login"
          >
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
              {/*begin::Aside*/}
              <Sadeed />
              {/*begin::Aside*/}
              {/*begin::Content*/}
              <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-register__wrapper">
                {/*begin::Head*/}

                {/*end::Head*/}
                {/*begin::Body*/}
                <div className="kt-register__body">
                  {/*begin::Signin*/}
                  <div className="kt-register__form">
                    <div className="kt-register__title text-center">
                      <h3>Register New Account</h3>
                      <span className="subtitle">
                        You're starting a 14-day free trial for Sadeed
                      </span>
                    </div>
                    {/*begin::Form*/}
                    {/*custom alert */}
                    <div className="form-style">
                      <form
                        onSubmit={handleSubmit}
                        className="kt-form"
                        action="#"
                        noValidate
                      >
                        <Alerts status={alertError} msg={alertErrorMessage} style={alertStyle} />
                       
                        <div className="form-group">
                          <div className="row row-style">
                            <div className="col-md-6">
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.firstName &&
                                  touched.firstName &&
                                  "is-invalid"}`}
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={values.firstName}
                                autoComplete="off"
                              />
                              {errors.firstName && touched.firstName && (
                                <div className="invalid-feedback">
                                  {errors.firstName}
                                </div>
                              )}
                            </div>
                            <div className="col-md-6">
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.lastName &&
                                  touched.lastName &&
                                  "is-invalid"}`}
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={values.lastName}
                                autoComplete="off"
                              />
                              {errors.lastName && touched.lastName && (
                                <div className="invalid-feedback">
                                  {errors.lastName}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            disabled={query && query.Code ? true : false}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${errors.email &&
                              touched.email &&
                              "is-invalid"}`}
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            value={values.email}
                            autoComplete="off"
                          />
                          {errors.email && touched.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${errors.password &&
                              touched.password &&
                              "is-invalid"}`}
                            type="password"
                            value={values.password}
                            placeholder="Password"
                            name="password"
                          />
                          {errors.password && touched.password && (
                            <div className="invalid-feedback">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${errors.passwordConfirmation &&
                              touched.passwordConfirmation &&
                              "is-invalid"}`}
                            type="password"
                            value={values.passwordConfirmation}
                            placeholder="Confirm Password"
                            name="passwordConfirmation"
                          />
                          {errors.passwordConfirmation &&
                            touched.passwordConfirmation && (
                              <div className="invalid-feedback">
                                {errors.passwordConfirmation}
                              </div>
                            )}
                        </div>
                        {/*begin::Action*/}
                        <div className="kt-register__actions">
                          <div className="row row-style">
                            <div className="col-md-12  ">
                              <label className="label-styling">
                                By clicking Sign up, you agree on Sadeed’s{" "}
                              </label>

                              <br />
                              <a href="#" className="kt-link link-styling">
                                Terms &amp; Conditions
                              </a>
                            </div>
                            <div className="col-md-12 style-signup-btn">
                              <button
                                disabled={isSubmitting}
                                type="submit"
                                id="kt_login_signin_submit"
                                className="btn btn-primary btn-elevate kt-register__btn-primary"
                              >
                                Sign Up{" "}
                                <FontAwesomeIcon
                                  className={
                                    isSubmitting ? " vis" : " spin_ldr"
                                  }
                                  icon={faSpinner}
                                  spin
                                  pull="right"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/*end::Action*/}
                      </form>
                    </div>
                    {/*end::Form*/}
                    {/*begin::Divider*/}
                    <div className="kt-register__divider">
                      <div className="kt-divider">
                        <span />
                        <span>OR</span>
                        <span />
                      </div>
                    </div>
                    <div className="kt-register__head">
                      <span className="kt-register__signup-label">
                        Already have an account?
                      </span>
                      &nbsp;&nbsp;
                      <Link to="/" className="kt-link kt-register__signup-link">
                        {" "}
                        Login
                      </Link>
                    </div>
                    {/*end::Divider*/}
                    {/*begin::Options*/}
                    {/*end::Options*/}
                  </div>
                  {/*end::Signin*/}
                </div>
              </div>
              {/*end::Content*/}
            </div>
          </div>
          </div>
          
        );
      }}
    </Formik>
  );
};
export default Register;
