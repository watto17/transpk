import React from 'react';
import NotifactionItemDet from './ShowItemDet';

const NotificationITems = (props) => {
    return (
        <React.Fragment>

            {props.userItems === 'userCountriesItems' && <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">


                {props.items.map((item, index) => {
                    return (
                        <li key={index} className="kt-nav__item kt-nav__item">
                            <NotifactionItemDet {...item} userItems={props.userItems} />
                        </li>

                    )
                })}





            </ul>}


            {(props.userItems === 'userNotificationsItems' || props.userItems === 'userProfileItems') &&


                props.items.map((item, index) => {
                    return (

                        <NotifactionItemDet {...item} userItems={props.userItems} key={index} />

                    )
                })
            }






        </React.Fragment>
    )
};
export default NotificationITems;