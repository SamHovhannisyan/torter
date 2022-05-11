import React, {useEffect, useState} from 'react';
import css from './home.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {BsDash} from 'react-icons/bs';
import Behind from "./Behind";
import Cakes from "./Cakes";
import CakesTwo from "./CakesTwo";
import ChefHome from "./ChefHome";
import chefHomeImg from '../../Images/chefHome.png'
import {useDispatch, useSelector} from "react-redux";
import {aboutHomeGetData} from "../../Store/actions/productActions";
import {productReducer} from "../../Store/reducers/productReducer";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Home = () => {

    const about_home_data = useSelector(state => state.productReducer.about_home_get)
    const langValue = useSelector(state => state.productReducer.lang)

    const {t} = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(aboutHomeGetData())
    }, [])

    return (
        <div>
            <div className={css.aboutMain}>
                <Container fluid>
                    <Row>

                    </Row>
                </Container>
            </div>

            <Container>
                <Row className='mt-5'>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.homeMainTwo}>
                            <img src={chefHomeImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.homeMainAbout}>
                            {
                                about_home_data?.slice(0, 1).map((item) => {
                                    return (
                                        <div className={css.divMain}>
                                            <h2>
                                                <BsDash/>{langValue == 'en' ? item.titleEn
                                                : langValue == 'ru' ? item.titleRu : langValue == 'am' ? item.titleHy : null}
                                            </h2>
                                            <p>{langValue == 'en' ? item.textEn
                                                : langValue == 'ru' ? item.textRu : langValue == 'am' ? item.textHy : null}</p>
                                            <button className={css.buttonSee}><Link to={'/about'}>{t("Seemore")}</Link></button>
                                        </div>
                                    )
                                })
                            }
                            <div className={css.aboutZet}>
                                {/*<Image*/}
                                {/*    src="/dount.png"*/}
                                {/*    alt="Picture of the author"*/}
                                {/*    width={200}*/}
                                {/*    height={150}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Cakes langValue={langValue}/>
                </Row>
                <Row className="justify-content-md-center  pb-5">
                    <CakesTwo langValue={langValue} about_home_data={about_home_data}/>
                </Row>
                <Row className="justify-content-md-center mt-5">

                        <ChefHome langValue={langValue} about_home_data={about_home_data}/>
                </Row>
            </Container>

            <div>
                <Behind langValue={langValue}/>
            </div>

        </div>
    );
};

export default Home;