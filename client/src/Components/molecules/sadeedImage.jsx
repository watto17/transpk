import React from 'react';

const sadeedImage = () => {
    return (
        <div className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-register__aside" style={{backgroundImage: 'url(/Images/bg-img.png)'}}>
            <div className="kt-grid__item">
                <a href="#" className="kt-register__logo">
                <img src="/Images/sadeed-logo.svg" width="200" height="60" />
                </a>
            </div>
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                <div className="kt-grid__item kt-grid__item--middle">
                    <h3 className="kt-register__title"> SADEED</h3>
                    <h4 className="kt-register__subtitle">keeps your team perfectly in sync <br /> and automate their tasks </h4>
                </div>
            </div>
            <div className="kt-grid__item">
                <div className="kt-register__info">
                    <div className="kt-register__copyright">
                    2019&nbsp;©&nbsp;<a href="https://sadeed.io/" target="_blank" className="kt-register-footer">Sadeed</a>
                    </div>
                    <div className="kt-register__menu">
                        <a href="#" className="kt-link">Privacy</a>
                        <a href="#" className="kt-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default sadeedImage;