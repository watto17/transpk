import React from 'react';
import SidebarItems from './sidebaritems';
import { Link } from 'react-router-dom';
import auth from "../../../utils/auth";
import {withRouter} from 'react-router-dom'

const sidebar=(props)=> {
  let pathname = window.location.pathname;
    function logout() {
        auth.logout(() => {
            props.history.push('/');
        })
    }
    return (
       

  <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
    <div id="kt_aside_menu" className="kt-aside-menu kt-scroll ps" data-ktmenu-vertical={1} data-ktmenu-scroll={1} data-ktmenu-dropdown-timeout={500} style={{height: '1308px', overflow: 'hidden'}}>
      <ul className="kt-menu__nav ">
        <li className={`kt-menu__item ${pathname === '/customers' ? 'kt-menu__item--active' : '' } `} aria-haspopup="true"><Link to='/customers'
        className="kt-menu__link"><span className="kt-menu__link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon id="Bound" points="0 0 24 0 24 24 0 24" />
                  <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" id="Shape" fill="#000000" fillRule="nonzero" />
                  <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" id="Path" fill="#000000" opacity="0.3" />
                </g>
              </svg></span><span className="kt-menu__link-text list-style">Dashboard</span></Link></li>
        <li className={`kt-menu__item ${pathname === '/addCustomers' ? 'kt-menu__item--active' : '' } `}  aria-haspopup="true"><Link to='/addCustomers' className="kt-menu__link "><span className="kt-menu__link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                  <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" id="Combined-Shape" fill="#000000" />
                </g>
              </svg></span><span className="kt-menu__link-text  list-style">Add Customer</span></Link></li>
       
      </ul>
      <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} /></div><div className="ps__rail-y" style={{top: '0px', right: '3px'}}><div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '0px'}} /></div></div>
  </div>


       
    )
};
export default withRouter(sidebar);
