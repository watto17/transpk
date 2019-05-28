import React from 'react'
import { Link } from 'react-router-dom';

const NotificationItem = (props) => {

    return (
        <React.Fragment>

            {props.userItems == "userCountriesItems" &&

                <a href="#" className="kt-nav__link">
                    <span className="kt-nav__link-icon">
                        <img src={props.icon_image} alt="" /></span>
                    <span className="kt-nav__link-text">{props.c_name}</span>
                </a>

            }
            {(props.userItems === 'userNotificationsItems' || props.userItems === 'userProfileItems') &&
                <Link to={props.Uri} className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                  
                     <img src={props.img} alt=""/>
                  
                     
                      
                    </div>
                    <div className="kt-notification__item-details">
                        <div className={`kt-notification__item-title ${props.pr_routes && 'kt-font-bold'}`}>
                            {props.userItems == "userCountriesItems" ? props.c_name : null}
                            {props.userItems == "userNotificationsItems" ? props.not_text : null}
                            {props.userItems == "userProfileItems" ? props.pr_routes : null}




                        </div>

                        {props.userItems == "userProfileItems" ? <div className="kt-notification__item-time">{props.det}</div> : null}

                        {props.userItems == "userNotificationsItems" ? <div className="kt-notification__item-time">{props.date} </div> : null}

                    </div>
                </Link>
            }



        </React.Fragment>
    )
};

export default NotificationItem