import React from 'react'
import Notification from "../../modules/Dashboard/Notification";
import Countries from "../../modules/Dashboard/Countries";
import ProfileDropDown from "./../../modules/Dashboard/ProfileDropDown";

export default function DashHeader() {
    return (
        <React.Fragment>
            <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">
                <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i
                    className="la la-close" /></button>
                <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                </div>
                <div className="kt-header__topbar">
                    <div className="kt-header__topbar-item dropdown">
                        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
                            aria-expanded="true">
                            <span className="kt-header__topbar-icon kt-pulse kt-pulse--brand">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect id="bound" x={0} y={0} width={24} height={24} />
                                        <path
                                            d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                                            id="Combined-Shape" fill="#000000" opacity="0.3" />
                                        <path
                                            d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg> <span className="kt-pulse__ring" />
                            </span>
                        </div>
                        <div
                            className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg dropdown-menu-notification">
                            <Notification />
                        </div>
                    </div>
                    <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                            <span className="kt-header__topbar-icon">
                                <img className src="/Images/020-flag.svg" alt="img" />
                            </span>
                        </div>
                        <div
                            className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-notification">
                            <Countries />
                        </div>
                    </div>
                    <div className="kt-header__topbar-item kt-header__topbar-item--user">
                        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                            <div className="kt-header__topbar-user">
                                <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                                <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
                                <img className="kt-hidden" alt="Pic" src="/Images/100_12.jpg" />
                            </div>
                        </div>
                        <div
                            className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-profile">
                            <ProfileDropDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-subheader-dashboard">
                <div className="kt-subheader kt-subheader-dashboard" id="kt_subheader">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title">Dashboard</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
