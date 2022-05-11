import React from 'react';
import css from './fail.module.css';
import {AiOutlineClose} from 'react-icons/ai';

const Fail = () => {
    return (
        <div>
            <div className={css.main}>
                <div>
                <span>
                    <i><AiOutlineClose /></i>
                </span>
                    <h1>Thank you!!!</h1>
                    <p>You sucsessfully created your delivary</p>
                </div>
            </div>
        </div>
    );
};

export default Fail;