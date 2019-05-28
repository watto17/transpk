import React from 'react';
import Header from '../molecules/Header';
import Sidebar from '../molecules/Sidebar';
import Footer from '../molecules/Footer';
const DashBoardTemplate = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <Sidebar/>
            <Footer/>
        </React.Fragment>
    )
};