import React from 'react';
import '../../styles/styles.css'

const notFound = (props) => {


    return (

        <div className="kt-grid__item kt-grid__item--fluid kt-grid  kt-error-v6"
            style={{ backgroundColor: '#0099e5' }}>
            <div className="kt-error_container">
                <div className="kt-error_subtitle kt-font-light">
                    <h1>Oops...</h1>
                </div>
                <p className="kt-error_description kt-font-light">
                    Looks like something went wrong.
                    </p>
            </div>
        </div>

    );

};
export default notFound;