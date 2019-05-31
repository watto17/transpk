import React, { useState,useEffect } from 'react';
import auth from '../../utils/auth'
import isEmptyNow from '../../utils/isEmpty';
import MyContext from '../../utils/Context';
import ProfileItems from '../Dashboard/ProfileDropDown';
import Notifications from '../Dashboard/Notification';
import UserCountriesitems from '../Dashboard/Countries';
import DashboardFooter from '../../Components/molecules/Footer';
import DashboardHeader from '../../Components/molecules/Header';
import DashboardSideBar from '../Dashboard/Sidebar';
import '../../styles/dashboard2Styles.css';
import  '../../styles/teams.css';
import { UserdetailsService } from './service';

export default function Profile(props) {
    async function fetchUserDet() {
        // let res = await UserdetailsService();
        // try {
        //     if(res.meta.status >= 200 && res.meta.status <300){
        //         setuserDetails(res.data);
        //     }
        // }
        // catch(error){
        //     console.log(error);
        // }

    }
    function DocomentClick(e){
        if (e.currentTarget.id === 'notificationsMenu') {
            SetshowProfileMenu(false);
            SetShowNotificationMenu(!ShowNotificationMenu);
            SetShowCountriesMenu(false);
        }
        else if (e.currentTarget.id === 'countriesMenu') {
            SetshowProfileMenu(false);
            SetShowNotificationMenu(false);
            SetShowCountriesMenu(!ShowCountriesMenu);
        }
        else if (e.currentTarget.id === 'profileMenushow') {
            SetshowProfileMenu(!ShowProfileMenu);
            SetShowNotificationMenu(false);
            SetShowCountriesMenu(false);
        }else {
            SetshowProfileMenu(false);
            SetShowNotificationMenu(false);
            SetShowCountriesMenu(false);
        }

    }
    useEffect(() => {
        fetchUserDet();
        window.addEventListener('click',DocomentClick);
        return () => {
            window.removeEventListener('click',DocomentClick)
        }
    },[])
    // let Component3 = RoutingComponents(CName)
    const [ShowProfileMenu, SetshowProfileMenu] = useState(false);
    const [ShowNotificationMenu, SetShowNotificationMenu] = useState(false);
    const [ShowCountriesMenu, SetShowCountriesMenu] = useState(false);
    const [dsidebar , hidesidebar] = useState(false);
    const [dsidebarHover , hidesidebarhover] = useState(true);
    const [userDetails , setuserDetails] = useState({});


  
    function logout() {
        auth.logout(() => {
            this.props.history.push('/');
        })
    }
    const dashBoardMenu = (e) => {
        e.stopPropagation();
        if (e.currentTarget.id === 'notificationsMenu') {
            SetshowProfileMenu(false);
            SetShowNotificationMenu(!ShowNotificationMenu);
            SetShowCountriesMenu(false);
        }
        else if (e.currentTarget.id === 'countriesMenu') {
            SetshowProfileMenu(false);
            SetShowNotificationMenu(false);
            SetShowCountriesMenu(!ShowCountriesMenu);
        }
        else if (e.currentTarget.id === 'profileMenushow') {
            SetshowProfileMenu(!ShowProfileMenu);
            SetShowNotificationMenu(false);
            SetShowCountriesMenu(false);
        }
    }

    function dhideShowSidebar(){
        hidesidebar(!dsidebar);
       
        if(dsidebar){
            hidesidebarhover(true);
        }
    }
    function daddHoverClass(){ 
        if(dsidebar){
            hidesidebarhover(false); 
        }    }
    function dremoveHoverClass(){
        if(dsidebar){
            hidesidebarhover(true);    }
         }
    return (
    
        <div style={{ width: '100%' }} id="dashboardSidebar" className={dsidebar ?(dsidebarHover ? `kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize`:  `kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize-hover`):
        `kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading`}>
           
    <MyContext.Consumer>

        {context => (

      <React.Fragment>

          {
              !isEmptyNow(userDetails) &&  context.setUserNow(userDetails)
          }
            <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed ">
                <div className="kt-header-mobile__logo">
                    <a href="index.html">
                        <img alt="Logo" src="/Images/logo2.png" />
                    </a>
                </div>
                <div className="kt-header-mobile__toolbar">
                    <button className="kt-header-mobile__toggler kt-header-mobile__toggler--left" id="kt_aside_mobile_toggler"><span /></button>
                    <button className="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span /></button>
                    <button className="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more" /></button>
                </div>
            </div>
            
            <div className="kt-grid kt-grid--hor kt-grid--root">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                   
                    <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close" /></button>
                   
                    <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside" onMouseOut={dremoveHoverClass} onMouseOver={daddHoverClass}>
           
            <div className="kt-aside__brand kt-grid__item " id="kt_aside_brand">
                <div className="kt-aside__brand-logo">
                    <a href="">
                        <img alt="Logo" src="/Images/sadeed-logo.svg"  width="150" height="70" />
                    </a>
                </div>
                <div className="kt-aside__brand-tools">
                    <button className="kt-aside__brand-aside-toggler" id="kt_aside_toggler" onClick={dhideShowSidebar}>
                        <span><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" id="Path-94" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) " />
                                <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" id="Path-94" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) " />
                            </g>
                        </svg></span>
                        <span><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                <path d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z" id="Path-94" fill="#000000" fillRule="nonzero" />
                                <path d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z" id="Path-94" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) " />
                            </g>
                        </svg></span>
                    </button>

                </div>
            </div>
                   
                    <DashboardSideBar />

                     </div>

                 
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper my-header ">
                       
                        <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">
                          
                            <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i className="la la-close" /></button>
                            <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                          
                            </div>
                           
                            <div className="kt-header__topbar">
                               
                                <div className="kt-header__topbar-item dropdown">
                                    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px" aria-expanded="true">
                                        <span className="kt-header__topbar-icon kt-pulse kt-pulse--brand" id="notificationsMenu"
                                                onClick={dashBoardMenu}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                    <rect id="bound" x={0} y={0} width={24} height={24} />
                                                    <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                                                    <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" id="Combined-Shape" fill="#000000" />
                                                </g>
                                            </svg> <span className="kt-pulse__ring" />
                                        </span>
                   
                                    </div>

                                        <div id="notificationDrpDwnMenu" className={`dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg dropdown-menu-notification ${ShowNotificationMenu && 'show'}`}>


                                        <Notifications /> </div>

                                </div>
                                
                                <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                                    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                                        <span className="kt-header__topbar-icon"  id="countriesMenu"
                                                onClick={dashBoardMenu}>
                                            <img src="/Images/020-flag.svg" alt=""
                                                />

                                        </span>
                                    </div>


                                        <div id="lagnuageBaMenu" className={`dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-notification 
                                            ${ShowCountriesMenu && 'show'} `}>
                                        <UserCountriesitems />
                                          </div>
                                           </div>
                               
                                <div  className="kt-header__topbar-item kt-header__topbar-item--user">
                                    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px"  id="profileMenushow"
                                            onClick={dashBoardMenu}>
                                        <div className="kt-header__topbar-user"
                                          
                                        >
                                            <span className="kt-header__topbar-welcome kt-hidden-mobile kt-msg">Hi,</span>
                                            <span className="kt-header__topbar-username kt-hidden-mobile kt-username">{
                                                userDetails.firstName}</span>
                                            <img className="" alt="Pic" src="/Images/100_12.jpg" />
                                       
                                        </div>
                                    </div>

                                     
                                        <div   className={`dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-profile ${ShowProfileMenu ? 'show' : ''}`}>
                                        <ProfileItems {...userDetails}  />
                                      </div>
                                 
                                </div>
                              
                            </div>
                          
                        </div>
                     {props.children}
            <DashboardFooter /> 
                      </div>
                </div>
            </div>
            </React.Fragment>
              )}
            </MyContext.Consumer>
        </div>



    )
}
