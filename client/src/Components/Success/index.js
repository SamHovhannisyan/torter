import React from 'react';
import css from './success.module.css';
import successImg from '../../Images/successImg.svg'

const Success = () => {
    return (
        <div className={css.main}>
            <div>
                <span>
                    <img src={successImg} alt=""/>
                </span>
                <h1>Thank you!!!</h1>
                <p>You sucsessfully created your delivary</p>
            </div>
        </div>
    );
};

export default Success;