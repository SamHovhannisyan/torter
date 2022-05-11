import React, {useEffect} from 'react';
import css from './chefHome.module.css';
import {Col} from "react-bootstrap";
import {BsDash} from "react-icons/bs";
import povrImg from '../../../Images/povr.png'
import {useTranslation} from "react-i18next";

const ChefHome = ({about_home_data, langValue}) => {

    const {t} = useTranslation();

    return (
        <>
            <Col lg={6} md={6} xs={12} className='pt-5'>
                <div className={css.cofeImg}>
                    <img src={povrImg} alt=""/>
                </div>
            </Col>

            <Col lg={6} md={6} xs={12} className='pt-5'>
                <div className={css.cheMain}>
                    {about_home_data?.slice(2).map((item,index) => {
                        return (
                            <div className={css.chef} key={index}>
                                <h2><BsDash />{langValue == 'en' ? item.titleEn : langValue == 'ru' ? item.titleRu :
                                    langValue == 'am' ?  item.titleHy : null}</h2>
                                <p>{langValue == 'en' ? item.textEn : langValue == 'ru' ? item.textRu :
                                    langValue == 'am' ?  item.textHy : null}</p>
                                <button>{t("Seemore")}</button>
                            </div>
                        )
                    })}
                </div>
            </Col>
        </>
    );
};

export default ChefHome;