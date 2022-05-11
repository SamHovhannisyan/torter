import React, {useEffect} from 'react';
import css from './cakesTwo.module.css';
import {Col} from "react-bootstrap";
import {BsDash} from 'react-icons/bs';
import cofeHomeImg from '../../../Images/cofeHome.png'
import {useTranslation} from "react-i18next";

const CakesTwo = ({about_home_data, langValue}) => {

    const {t} = useTranslation();

    return (
        <>
            <Col lg={6} md={6} xs={12}>

                <div className={css.divOne}>
                    {
                        about_home_data?.slice(1, 2).map((item) => {
                            return (
                                <div>
                                    <h2><BsDash />{langValue == 'en' ? item.titleEn : langValue == 'ru' ? item.titleRu :
                                        langValue == 'am' ? item.titleHy : null}</h2>
                                    <p>{langValue == 'en' ? item.textEn : langValue == 'ru' ? item.textRu :
                                        langValue == 'am' ? item.textHy : null}</p>
                                    <button>{t("Seemore")}</button>
                                </div>
                            )
                        })
                    }
                </div>

            </Col>

            <Col lg={6} md={6} xs={12}>
                <div className={css.homeCofe}>
                    <img src={cofeHomeImg} alt=""/>
                </div>
            </Col>
        </>
    );
};

export default CakesTwo;