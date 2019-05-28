import React from 'react';
import ItemsList from '../../../Components/molecules/ItemsList';

export default function UserNotifications() {
    const NoticeItems = [
        { c_name: 'English', icon_image: '/Images/020-flag.svg' },
        { c_name: 'Spanish', icon_image: '/Images/016-spain.svg' },
        { c_name: 'German', icon_image: '/Images/017-germany.svg' },

    ];
    return (
        <ItemsList items={NoticeItems} userItems="userCountriesItems" />
    )
}
