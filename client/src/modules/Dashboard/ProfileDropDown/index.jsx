import React from 'react';
import auth from '../../../utils/auth';

import ItemsList from '../../../Components/molecules/ItemsList';

const ProfileITems = (props) => {
    

    function logout() {
        auth.logout(() => {
            window.location.href = "/";
        })
    }
    const NoticeItems = [
        { img: '/Images/profile.svg', pr_routes: 'My Profile', det: '', Uri:  '/profile' },
        { img: '/Images/team.svg', pr_routes: 'Team', det: '', Uri:  '/team' },
        { img: '/Images/billing.svg', pr_routes: 'Billing', det: '', Uri: '/billing'},
        { img: '/Images/support.svg', pr_routes: 'Support', det: '', Uri: '#'},
        { img: '/Images/socailAccount.svg', pr_routes: 'Socail Account', det: '', Uri: '/social_account'},
        { img: '/Images/referrals.svg', pr_routes: 'Referrals', det: '', Uri: '#'},

    ]
    return (
        <React.Fragment>
            <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x kt-head-notification" style={{ backgroundImage: 'url(/Images/bg-1.jpg)' }}>
                <div className="kt-user-card__avatar">
                    <img className="" alt="Pic" src="/Images/100_12.jpg" />
                  

                </div>
                <div className="kt-user-card-profile">
                    <div className="kt-user-card__name kt-user-card-profile-name ">
                        {props && props.firstName?props.firstName:''} {props && props.lastName?props.lastName:''}
                                                        </div>
                    <div className="kt-user-card__email">
                        {props && props.email?props.email:''}
                                                        </div>
                </div>
            </div>
           
            <div className="kt-notification">
                <ItemsList items={NoticeItems} userItems="userProfileItems" />

                <div className="kt-notification__custom">
                    <a href="#" onClick={logout} className="btn btn-label-brand btn-bold btn-sm">Sign Out</a>
                    
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProfileITems