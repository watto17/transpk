
import React from 'react';
import SideBarItemDesc from './sidebardesc';
const NotificationITems = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <SideBarItemDesc {...item} />
                        </li>
                    )
                })}




            </ul>

        </div>
    )
}
export default NotificationITems;