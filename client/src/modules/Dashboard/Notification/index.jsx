import React from 'react';
import ItemsList from '../../../Components/molecules/ItemsList';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Notifications() {
    const NoticeItems = [
        { img: '/Images/facebook.svg', not_text: ' New order has been received', date: '2 hrs ago'},
        { img: '/Images/instagram.svg', not_text: 'New customer is registered', date: '3 hrs ago'},
        { img: '/Images/twitter.svg', not_text: 'Application has been approved', date: '3 hrs ago'},
      

    ]
    return (
        <form>
            <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head-notification"
                 style={{backgroundImage: 'url(/Images/bg-1.jpg)'}}>
                <h3 className="kt-head__title">
                    <span className="btn-md btn-bold btn-font-md kt-notify-style" >23 New</span>
                </h3>
                <h4 className="kt-head__title__notification kt-notify-title">
                    User Notifications
                </h4>
            </div>
            <div className="tab-content" id="notificationsTabContent">
            <PerfectScrollbar>
                <div className="tab-pane active show" id="topbar_notifications_notifications" role="tabpanel">
                    <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true"
                         data-height={300} data-mobile-height={200}>
                        <ItemsList items={NoticeItems} userItems="userNotificationsItems"/>
                    </div>
                </div>
                </PerfectScrollbar>
                <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                    <div className="kt-grid kt-grid--ver" style={{minHeight: '200px'}}>
                        <div className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                            <div className="kt-grid__item kt-grid__item--middle kt-align-center">
                                All caught up!
                                <br/>No new notifications.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
