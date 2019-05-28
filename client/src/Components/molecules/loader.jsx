import React from 'react';
import '../../styles/loader.css'
const loader=()=>{
    return(
        <div className="container">
            <div className="row cf">
                <div className="twelve col">
                    <div className="loader" id="loader-4">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default loader;